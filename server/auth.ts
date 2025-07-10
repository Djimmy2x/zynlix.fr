import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { storage } from "./storage";
import type { User } from "@shared/schema";

// Configuration de l'authentification
export function configureAuth() {
  // Configuration de la stratégie locale
  passport.use(new LocalStrategy(async (username, password, done) => {
    try {
      const user = await storage.getUserByUsername(username);
      
      if (!user) {
        return done(null, false, { message: "Nom d'utilisateur incorrect" });
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      
      if (!isValidPassword) {
        return done(null, false, { message: "Mot de passe incorrect" });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }));

  // Sérialisation de l'utilisateur pour la session
  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  // Désérialisation de l'utilisateur depuis la session
  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await storage.getUser(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
}

// Middleware pour vérifier l'authentification
export function requireAuth(req: any, res: any, next: any) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Authentification requise" });
}

// Middleware pour vérifier les rôles admin
export function requireAdmin(req: any, res: any, next: any) {
  if (req.isAuthenticated() && req.user?.role === 'admin') {
    return next();
  }
  res.status(403).json({ message: "Accès administrateur requis" });
}

// Fonction pour créer un utilisateur admin initial
export async function createInitialAdmin() {
  const adminUsername = process.env.ADMIN_USERNAME || 'admin';
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    console.warn("ADMIN_PASSWORD not set, skipping admin user creation");
    return;
  }

  try {
    // Vérifier si l'admin existe déjà
    const existingAdmin = await storage.getUserByUsername(adminUsername);
    if (existingAdmin) {
      console.log("Admin user already exists");
      return;
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(adminPassword, 12);

    // Créer l'utilisateur admin
    await storage.createUser({
      username: adminUsername,
      password: hashedPassword,
      role: 'admin',
      email: 'admin@zynlix.fr'
    });

    console.log("Admin user created successfully");
  } catch (error) {
    console.error("Failed to create admin user:", error);
  }
} 