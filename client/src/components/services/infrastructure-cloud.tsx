import { Server, Cloud, Database, Shield } from "lucide-react";
import ServicePageLayout from "./ServicePageLayout";

const serviceFeatures = [
  { icon: Server, title: "Gestion de Serveurs", description: "Administration complète de vos serveurs physiques et virtuels (Windows, Linux)." },
  { icon: Cloud, title: "Migration Cloud", description: "Planification et exécution de la migration de vos applications et données vers AWS, Azure ou Google Cloud." },
  { icon: Database, title: "Gestion de Bases de Données", description: "Optimisation, sauvegarde et maintenance de vos bases de données SQL et NoSQL." },
  { icon: Shield, title: "Haute Disponibilité", description: "Mise en place de clusters et de plans de reprise d'activité pour garantir une disponibilité maximale." }
];

export default function InfrastructureCloud() {
  const handleCtaClick = () => {
    // Scroll vers la section contact
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ServicePageLayout
      title="Infrastructure & Cloud"
      subtitle="Des fondations solides pour votre système d'information."
      description="Nous concevons, déployons et gérons des infrastructures informatiques robustes, évolutives et sécurisées, qu'elles soient sur site, dans le cloud ou hybrides. Notre objectif est de vous fournir une base technique fiable pour que vous puissiez vous concentrer sur vos activités."
      icon={Server}
      features={serviceFeatures}
      caseStudy={{
        title: "Migration Cloud pour PME",
        description: "Une entreprise manufacturière de 150 employés souhaitait réduire ses coûts de maintenance et améliorer la flexibilité de son ERP. Nous avons orchestré la migration de leur infrastructure on-premise vers un environnement cloud hybride sur Azure en 3 mois, sans interruption de service.",
        metrics: [
          {
            value: "-40%",
            label: "sur les coûts d'infrastructure",
            color: "green" as const
          },
          {
            value: "+200%",
            label: "de performance sur l'ERP",
            color: "blue" as const
          }
        ]
      }}
      ctaTitle="Prêt à moderniser votre infrastructure ?"
      ctaDescription="Contactez-nous pour un audit gratuit de votre système actuel."
      ctaButtonText="Demander un audit"
      onCtaClick={handleCtaClick}
      primaryColor="primary"
    />
  );
}
