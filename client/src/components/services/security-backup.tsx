import { Shield, Lock, Database, AlertTriangle, CheckCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SecurityBackup() {
  const securityServices = [
    {
      icon: Shield,
      title: "Audit Sécurité",
      description: "Évaluation complète de votre posture de sécurité et identification des vulnérabilités",
      certifications: ["ISO 27001", "RGPD", "ANSSI"],
      features: ["Scan vulnérabilités", "Test intrusion", "Audit conformité", "Plan remediation"]
    },
    {
      icon: Lock,
      title: "Protection Avancée",
      description: "Solutions de sécurité multicouches pour protéger vos données et systèmes",
      certifications: ["SOC 2", "PCI DSS"],
      features: ["Firewall nouvelle génération", "Détection menaces", "Chiffrement bout-en-bout", "Accès privilégiés"]
    },
    {
      icon: Database,
      title: "Sauvegarde & Restauration",
      description: "Stratégies de sauvegarde robustes avec tests de restauration réguliers",
      certifications: ["3-2-1 Rule", "RTO/RPO"],
      features: ["Sauvegarde automatisée", "Stockage chiffré", "Test restauration", "Plan continuité"]
    },
    {
      icon: AlertTriangle,
      title: "Réponse Incident",
      description: "Équipe d'intervention rapide disponible 24/7 pour gérer les incidents de sécurité",
      certifications: ["CERT-FR", "FIRST"],
      features: ["Hotline sécurité", "Forensic numérique", "Communication crise", "Retour expérience"]
    }
  ];

  const complianceStandards = [
    { name: "RGPD", description: "Conformité protection données personnelles" },
    { name: "ISO 27001", description: "Management sécurité information" },
    { name: "SOC 2", description: "Contrôles sécurité opérationnelle" },
    { name: "ANSSI", description: "Recommandations cybersécurité" },
    { name: "PCI DSS", description: "Sécurité données cartes paiement" },
    { name: "HDS", description: "Hébergement données santé" }
  ];

  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Sécurité & Sauvegarde
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Protégez vos données critiques avec nos solutions de sécurité avancées et nos stratégies 
            de sauvegarde éprouvées. Conformité réglementaire garantie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {securityServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
                      <Icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {service.certifications.map((cert, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
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

        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 rounded-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Conformité Réglementaire
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Nos solutions respectent les standards les plus exigeants en matière de sécurité et de conformité
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="text-center">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                  <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{standard.name}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{standard.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            Audit Sécurité Gratuit
          </Button>
        </div>
      </div>
    </div>
  );
}