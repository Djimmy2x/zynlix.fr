import { Cloud, Server, Shield, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function InfrastructureCloud() {
  const services = [
    {
      icon: Cloud,
      title: "Migration Cloud",
      description: "Transition sécurisée vers AWS, Azure ou Google Cloud avec zéro interruption",
      features: ["Analyse de compatibilité", "Plan de migration personnalisé", "Tests de charge", "Formation équipes"]
    },
    {
      icon: Server,
      title: "Infrastructure Hybride",
      description: "Solutions mixtes alliant cloud public et infrastructure on-premise",
      features: ["Architecture sur-mesure", "Synchronisation données", "Haute disponibilité", "Évolutivité garantie"]
    },
    {
      icon: Shield,
      title: "Supervision 24/7",
      description: "Monitoring proactif et maintenance préventive de votre infrastructure",
      features: ["Alertes en temps réel", "Rapports détaillés", "Optimisation continue", "Support technique"]
    },
    {
      icon: Zap,
      title: "Performance & Optimisation",
      description: "Amélioration des performances et réduction des coûts opérationnels",
      features: ["Audit de performance", "Optimisation ressources", "Automatisation", "Reporting ROI"]
    }
  ];

  const benefits = [
    "Réduction des coûts IT jusqu'à 40%",
    "Disponibilité garantie 99.9%",
    "Temps de déploiement divisé par 3",
    "Sécurité renforcée et conformité",
    "Évolutivité selon vos besoins",
    "Support technique expert 24/7"
  ];

  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Infrastructure & Cloud
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Modernisez votre infrastructure IT avec nos solutions cloud sécurisées et performantes. 
            Accompagnement complet de l'analyse à la mise en production.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Pourquoi Choisir Nos Solutions Cloud ?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-accent text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            Demander un Audit Gratuit
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}