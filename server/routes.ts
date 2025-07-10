import type { Express } from "express";
import { createServer, type Server } from "http";
import passport from "passport";
import { storage } from "./storage";
import { requireAuth, requireAdmin } from "./auth";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Route de login
  app.post("/api/auth/login", (req, res, next) => {
    passport.authenticate('local', (err: any, user: any, info: any) => {
      if (err) {
        return res.status(500).json({ success: false, message: "Erreur serveur" });
      }
      
      if (!user) {
        return res.status(401).json({ 
          success: false, 
          message: info?.message || "Identifiants incorrects" 
        });
      }
      
      req.logIn(user, (err) => {
        if (err) {
          return res.status(500).json({ success: false, message: "Erreur de connexion" });
        }
        res.json({ 
          success: true, 
          message: "Connexion réussie",
          user: { id: user.id, username: user.username, role: user.role }
        });
      });
    })(req, res, next);
  });

  // Route de logout
  app.post("/api/auth/logout", (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ success: false, message: "Erreur de déconnexion" });
      }
      res.json({ success: true, message: "Déconnexion réussie" });
    });
  });

  // Route pour vérifier l'état de l'authentification
  app.get("/api/auth/status", (req, res) => {
    if (req.isAuthenticated()) {
      res.json({ 
        authenticated: true, 
        user: { id: req.user.id, username: req.user.username, role: req.user.role }
      });
    } else {
      res.json({ authenticated: false });
    }
  });

  // Contact form submission (publique)
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, message: "Message envoyé avec succès", id: submission.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Données invalides", 
          errors: error.errors 
        });
      }
      res.status(500).json({ success: false, message: "Erreur serveur" });
    }
  });

  // Get all contact submissions (protégé par authentification admin)
  app.get("/api/contact", requireAdmin, async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
