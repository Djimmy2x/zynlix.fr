import express, { type Request, Response, NextFunction } from "express";
import session from "express-session";
import passport from "passport";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { configureAuth, createInitialAdmin } from "./auth";

// Charger les variables d'environnement
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Middleware pour parser le JSON et les formulaires
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configuration des sessions sécurisées
const sessionConfig = {
  name: process.env.SESSION_NAME || 'zynlix.sid',
  secret: process.env.SESSION_SECRET || 'default-secret-change-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: parseInt(process.env.SESSION_COOKIE_MAXAGE || '86400000'),
    sameSite: 'lax' as const
  }
};

// En production, utiliser connect-pg-simple pour stocker les sessions en base
if (process.env.NODE_ENV === 'production' && process.env.DATABASE_URL) {
  const pgSession = require('connect-pg-simple')(session);
  sessionConfig.store = new pgSession({
    conString: process.env.DATABASE_URL,
    tableName: 'sessions'
  });
} else {
  // En développement, utiliser memorystore
  const MemoryStore = require('memorystore')(session);
  sessionConfig.store = new MemoryStore({
    checkPeriod: 86400000 // Nettoyer les sessions expirées toutes les 24h
  });
}

app.use(session(sessionConfig));

// Configuration de Passport
configureAuth();
app.use(passport.initialize());
app.use(passport.session());

// Middleware de logging
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  // Créer l'utilisateur admin initial si nécessaire
  await createInitialAdmin();

  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = process.env.PORT || 5000;
  const host = process.env.HOST || "0.0.0.0";
  
  server.listen({
    port: parseInt(port.toString()),
    host,
    reusePort: true,
  }, () => {
    log(`serving on ${host}:${port} in ${process.env.NODE_ENV || 'development'} mode`);
  });
})();
