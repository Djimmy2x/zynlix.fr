import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Lock, LogOut, Mail, Phone, Building, MessageSquare, AlertCircle } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import type { ContactSubmission } from "@shared/schema";

interface AuthStatus {
  authenticated: boolean;
  user?: {
    id: number;
    username: string;
    role: string;
  };
}

interface LoginResponse {
  success: boolean;
  message: string;
  user?: {
    id: number;
    username: string;
    role: string;
  };
}

export default function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const queryClient = useQueryClient();

  // Vérifier l'état de l'authentification
  const { data: authStatus, isLoading: authLoading } = useQuery<AuthStatus>({
    queryKey: ["auth-status"],
    queryFn: async () => {
      const response = await fetch("/api/auth/status", {
        credentials: "include"
      });
      return response.json();
    },
    retry: false
  });

  // Mutation pour la connexion
  const loginMutation = useMutation<LoginResponse, Error, { username: string; password: string }>({
    mutationFn: async ({ username, password }) => {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erreur de connexion");
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth-status"] });
      setError("");
      setPassword("");
    },
    onError: (error) => {
      setError(error.message);
    }
  });

  // Mutation pour la déconnexion
  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include"
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth-status"] });
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    }
  });

  // Récupérer les soumissions de contact (seulement si authentifié)
  const { data: submissions, isLoading: submissionsLoading } = useQuery<ContactSubmission[]>({
    queryKey: ["/api/contact"],
    enabled: authStatus?.authenticated === true,
    queryFn: async () => {
      const response = await fetch("/api/contact", {
        credentials: "include"
      });
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
      }
      return response.json();
    }
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Veuillez remplir tous les champs");
      return;
    }
    loginMutation.mutate({ username, password });
  };

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  // Afficher le formulaire de connexion si non authentifié
  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-6">
            <div className="animate-pulse">
              <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!authStatus?.authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Administration Zynlix</CardTitle>
            <p className="text-muted-foreground">Accès sécurisé requis</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Nom d'utilisateur"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full"
                  disabled={loginMutation.isPending}
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                  disabled={loginMutation.isPending}
                />
                {error && (
                  <div className="flex items-center space-x-2 mt-2 text-destructive text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{error}</span>
                  </div>
                )}
              </div>
              <Button 
                type="submit" 
                className="w-full" 
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? "Connexion..." : "Se connecter"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-primary">Zynlix</h1>
              <Badge variant="secondary">Admin</Badge>
              {authStatus.user && (
                <span className="text-sm text-muted-foreground">
                  Connecté en tant que {authStatus.user.username}
                </span>
              )}
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogout}
              disabled={logoutMutation.isPending}
            >
              <LogOut className="w-4 h-4 mr-2" />
              {logoutMutation.isPending ? "Déconnexion..." : "Déconnexion"}
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground">Messages de Contact</h2>
          <p className="text-muted-foreground mt-2">
            Gestion des demandes de contact reçues via le site web
          </p>
        </div>

        {submissionsLoading ? (
          <div className="grid gap-4">
            {[...Array(5)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-4 bg-muted rounded w-1/4 mb-4"></div>
                  <div className="h-3 bg-muted rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : submissions && submissions.length > 0 ? (
          <div className="grid gap-6">
            {submissions
              .sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime())
              .map((submission) => (
                <Card key={submission.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{submission.nom}</CardTitle>
                        <p className="text-muted-foreground">
                          {submission.createdAt && format(new Date(submission.createdAt), "PPP à HH:mm", { locale: fr })}
                        </p>
                      </div>
                      {submission.service && (
                        <Badge variant="outline">{submission.service}</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{submission.email}</span>
                      </div>
                      {submission.telephone && (
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{submission.telephone}</span>
                        </div>
                      )}
                      {submission.entreprise && (
                        <div className="flex items-center space-x-2">
                          <Building className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{submission.entreprise}</span>
                        </div>
                      )}
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-start space-x-2">
                        <MessageSquare className="w-4 h-4 text-muted-foreground mt-0.5" />
                        <p className="text-sm leading-relaxed">{submission.message}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        ) : (
          <Card>
            <CardContent className="text-center py-12">
              <Mail className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Aucun message</h3>
              <p className="text-muted-foreground">
                Aucune demande de contact n'a été reçue pour le moment.
              </p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}