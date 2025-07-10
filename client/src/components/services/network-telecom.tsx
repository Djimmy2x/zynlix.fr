import { Wifi, Router, Phone, Globe, CheckCircle, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function NetworkTelecom() {
  const networkServices = [
    {
      icon: Wifi,
      title: "Réseau d'Entreprise",
      description: "Conception et déploiement d'infrastructures réseau performantes et sécurisées",
      technologies: ["Cisco", "Juniper", "HP Aruba", "Ubiquiti"],
      features: ["Architecture réseau", "Segmentation VLAN", "QoS avancée", "Redondance", "Monitoring", "Optimisation"]
    },
    {
      icon: Router,
      title: "Connexions Haut Débit",
      description: "Solutions de connectivité fiables avec garanties de service et support 24/7",
      technologies: ["Fibre optique", "SDWAN", "4G/5G", "Satellite"],
      features: ["Liens dédiés", "Backup automatique", "Bande passante garantie", "SLA 99.9%", "Support prioritaire", "Monitoring"]
    },
    {
      icon: Phone,
      title: "Téléphonie IP",
      description: "Systèmes de communication unifiés pour améliorer la collaboration",
      technologies: ["SIP", "VoIP", "Teams", "Cisco Webex"],
      features: ["Standard virtuel", "Postes IP", "Mobilité", "Visioconférence", "Messagerie unifiée", "Intégration CRM"]
    },
    {
      icon: Globe,
      title: "Sécurité Réseau",
      description: "Protection avancée contre les menaces avec surveillance continue",
      technologies: ["Fortinet", "Palo Alto", "Sophos", "WatchGuard"],
      features: ["Firewall nouvelle génération", "VPN sécurisé", "Détection intrusion", "Filtrage web", "Antimalware", "Audit sécurité"]
    }
  ];

  const offerings = [
    {
      name: "Audit Réseau",
      description: "Analyse complète de votre infrastructure existante",
      price: "Gratuit",
      features: ["Cartographie réseau", "Analyse performance", "Audit sécurité", "Recommandations", "Rapport détaillé"]
    },
    {
      name: "Déploiement",
      description: "Mise en œuvre de solutions sur-mesure",
      price: "Sur devis",
      features: ["Conception architecture", "Installation équipements", "Configuration", "Tests validation", "Formation", "Documentation"]
    },
    {
      name: "Maintenance",
      description: "Support et maintenance préventive",
      price: "Dès 99€/mois",
      features: ["Monitoring 24/7", "Maintenance préventive", "Support technique", "Mises à jour", "Remplacement matériel", "Reporting"]
    }
  ];

  const benefits = [
    { icon: Zap, text: "Performance optimisée", description: "Bande passante garantie et latence minimisée" },
    { icon: Shield, text: "Sécurité renforcée", description: "Protection multicouche contre les cybermenaces" },
    { icon: CheckCircle, text: "Disponibilité 99.9%", description: "Redondance et basculement automatique" },
    { icon: Phone, text: "Communication unifiée", description: "Intégration voix, vidéo et messagerie" }
  ];

  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Réseau & Télécoms
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Infrastructures réseau et solutions de télécommunications pour connecter, 
            sécuriser et optimiser vos communications d'entreprise.
          </p>
        </div>

        {/* Avantages clés */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6">
                  <Icon className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{benefit.text}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Services réseau */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {networkServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                      <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {service.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
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

        {/* Offres de service */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 rounded-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Nos Offres de Service
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Solutions complètes de l'audit à la maintenance, adaptées à vos besoins
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {offerings.map((offering, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{offering.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{offering.description}</p>
                  <div className="text-xl font-bold text-primary mb-4">{offering.price}</div>
                </div>
                <ul className="space-y-2">
                  {offering.features.map((feature, idx) => (
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
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            Demander un Audit Réseau Gratuit
          </Button>
        </div>
      </div>
    </div>
  );
}