import { Users, Headphones, BookOpen, Wrench, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function UserSupport() {
  const supportServices = [
    {
      icon: Headphones,
      title: "Helpdesk 24/7",
      description: "Support technique multicanal disponible en permanence pour vos utilisateurs",
      sla: "< 15 min",
      features: ["Téléphone", "Email", "Chat", "Ticket", "Accès distant", "Base connaissances"]
    },
    {
      icon: BookOpen,
      title: "Formation Utilisateurs",
      description: "Programmes de formation personnalisés pour maximiser l'adoption des outils",
      sla: "Sur mesure",
      features: ["Formation présentielle", "E-learning", "Guides utilisateur", "Certifications", "Évaluation", "Suivi progression"]
    },
    {
      icon: Wrench,
      title: "Maintenance Préventive",
      description: "Interventions planifiées pour optimiser les performances et prévenir les pannes",
      sla: "Planifié",
      features: ["Mise à jour systèmes", "Nettoyage postes", "Optimisation", "Diagnostic", "Reporting", "Recommandations"]
    },
    {
      icon: Users,
      title: "Gestion Utilisateurs",
      description: "Administration complète des comptes et droits d'accès",
      sla: "< 2h",
      features: ["Création comptes", "Gestion droits", "Synchronisation AD", "Audit accès", "Déprovisioning", "Gouvernance"]
    }
  ];

  const supportLevels = [
    {
      name: "Niveau 1",
      description: "Support de base",
      responseTime: "< 15 min",
      coverage: "24/7",
      features: ["Réinitialisation mots de passe", "Incidents matériels", "Problèmes logiciels courants", "Orientation utilisateurs"]
    },
    {
      name: "Niveau 2",
      description: "Support spécialisé",
      responseTime: "< 2h",
      coverage: "7j/7",
      features: ["Problèmes techniques complexes", "Configuration avancée", "Intégrations systèmes", "Escalade expertise"]
    },
    {
      name: "Niveau 3",
      description: "Expertise technique",
      responseTime: "< 4h",
      coverage: "Horaires bureau",
      features: ["Développement spécifique", "Architecture systèmes", "Résolution critique", "R&D solutions"]
    }
  ];

  const metrics = [
    { label: "Temps de réponse moyen", value: "< 8 min", icon: Clock },
    { label: "Taux de résolution N1", value: "85%", icon: CheckCircle },
    { label: "Satisfaction utilisateurs", value: "96%", icon: Users },
    { label: "Disponibilité service", value: "99.9%", icon: Headphones }
  ];

  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Support Utilisateurs
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Accompagnement complet de vos utilisateurs avec un support technique expert, 
            des formations adaptées et une maintenance proactive de vos équipements.
          </p>
        </div>

        {/* Métriques de performance */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Services de support */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {supportServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <Badge variant="outline" className="text-xs">{service.sla}</Badge>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-secondary flex-shrink-0" />
                        <span className="text-xs text-gray-600 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Niveaux de support */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Niveaux de Support
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Organisation structurée pour une résolution efficace de tous vos incidents
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {supportLevels.map((level, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{level.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{level.description}</p>
                  <div className="flex justify-center space-x-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-primary">{level.responseTime}</div>
                      <div className="text-xs text-gray-500">Réponse</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-secondary">{level.coverage}</div>
                      <div className="text-xs text-gray-500">Couverture</div>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {level.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            Découvrir Nos Offres Support
          </Button>
        </div>
      </div>
    </div>
  );
}