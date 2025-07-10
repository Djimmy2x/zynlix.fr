import { Shield, Lock, Database, AlertTriangle } from "lucide-react";
import ServicePageLayout from "./ServicePageLayout";

const serviceFeatures = [
  { icon: Shield, title: "Pare-feu Nouvelle Génération", description: "Protection avancée contre les cybermenaces avec des règles dynamiques et une surveillance en temps réel." },
  { icon: Lock, title: "Chiffrement des Données", description: "Chiffrement bout-en-bout de vos données sensibles, en transit et au repos, avec gestion des clés sécurisée." },
  { icon: Database, title: "Sauvegardes Automatisées", description: "Sauvegardes incrémentales et différentielles avec tests de restauration réguliers et stockage sécurisé." },
  { icon: AlertTriangle, title: "Détection d'Intrusion", description: "Système de détection et réponse aux incidents (SIEM) avec alertes proactives et analyse comportementale." }
];

export default function SecurityBackup() {
  const handleCtaClick = () => {
    // Scroll vers la section contact
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ServicePageLayout
      title="Sécurité & Sauvegarde"
      subtitle="Protection complète de vos actifs numériques."
      description="Notre approche de la cybersécurité combine technologies de pointe et bonnes pratiques pour protéger votre infrastructure contre les menaces actuelles et émergentes. Nous assurons également la continuité de vos activités grâce à des solutions de sauvegarde robustes et des plans de reprise d'activité éprouvés."
      icon={Shield}
      features={serviceFeatures}
      caseStudy={{
        title: "Sécurisation Cabinet d'Avocats",
        description: "Un cabinet d'avocats de 50 collaborateurs devait se conformer au RGPD et sécuriser ses données clients sensibles. Nous avons mis en place une architecture de sécurité complète incluant chiffrement, authentification multi-facteurs et monitoring 24/7.",
        metrics: [
          {
            value: "100%",
            label: "conformité RGPD",
            color: "green" as const
          },
          {
            value: "0",
            label: "incident de sécurité",
            color: "blue" as const
          },
          {
            value: "15min",
            label: "temps de restauration",
            color: "orange" as const
          }
        ]
      }}
      ctaTitle="Sécurisez votre infrastructure dès maintenant"
      ctaDescription="Audit de sécurité gratuit et plan de protection personnalisé."
      ctaButtonText="Audit de sécurité gratuit"
      onCtaClick={handleCtaClick}
      primaryColor="secondary"
    />
  );
}