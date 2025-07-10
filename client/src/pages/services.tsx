import { Route, Switch, useLocation } from "wouter";
import InfrastructureCloud from "@/components/services/infrastructure-cloud";
import SecurityBackup from "@/components/services/security-backup";
import UserSupport from "@/components/services/user-support";
import NetworkTelecom from "@/components/services/network-telecom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Shield, Users, Wifi, ArrowRight } from "lucide-react";

function ServicesOverview() {
  const services = [
    {
      icon: Cloud,
      title: "Infrastructure & Cloud",
      description: "Migration cloud, infrastructure hybride, supervision 24/7 et optimisation des performances",
      link: "/services/infrastructure-cloud",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Shield,
      title: "Sécurité & Sauvegarde",
      description: "Audit sécurité, protection avancée, sauvegarde automatisée et réponse aux incidents",
      link: "/services/security-backup",
      color: "text-red-600 dark:text-red-400"
    },
    {
      icon: Users,
      title: "Support Utilisateurs",
      description: "Helpdesk 24/7, formation utilisateurs, maintenance préventive et gestion des comptes",
      link: "/services/user-support",
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: Wifi,
      title: "Réseau & Télécoms",
      description: "Infrastructure réseau, connexions haut débit, téléphonie IP et sécurité réseau",
      link: "/services/network-telecom",
      color: "text-purple-600 dark:text-purple-400"
    }
  ];

  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Nos Services IT
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Solutions complètes d'infogérance et de services informatiques pour accompagner 
            votre entreprise dans sa transformation digitale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                      <Icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <a href={service.link}>
                      Découvrir ce service
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [location] = useLocation();

  return (
    <Switch>
      <Route path="/services" component={ServicesOverview} />
      <Route path="/services/infrastructure-cloud" component={InfrastructureCloud} />
      <Route path="/services/security-backup" component={SecurityBackup} />
      <Route path="/services/user-support" component={UserSupport} />
      <Route path="/services/network-telecom" component={NetworkTelecom} />
    </Switch>
  );
}