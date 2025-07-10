import { LucideIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface CaseStudy {
  title: string;
  description: string;
  metrics: Array<{
    value: string;
    label: string;
    color: "green" | "blue" | "orange" | "purple";
  }>;
}

interface ServicePageLayoutProps {
  // Informations du service
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  
  // Fonctionnalités du service
  features: ServiceFeature[];
  
  // Étude de cas
  caseStudy: CaseStudy;
  
  // Appel à l'action
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  onCtaClick?: () => void;
  
  // Couleurs personnalisées (optionnel)
  primaryColor?: string;
  secondaryColor?: string;
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  icon: Icon,
  features,
  caseStudy,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  onCtaClick,
  primaryColor = "primary",
  secondaryColor = "secondary"
}: ServicePageLayoutProps) {
  const colorClasses = {
    green: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
    orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
    purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400"
  };

  return (
    <div className="space-y-12">
      {/* Hero pour le service */}
      <section className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
        <div className="flex items-center space-x-4 mb-4">
          <div className={`w-16 h-16 bg-${primaryColor}/10 rounded-full flex items-center justify-center`}>
            <Icon className={`w-8 h-8 text-${primaryColor}`} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">{subtitle}</p>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </section>

      {/* Fonctionnalités clés */}
      <section>
        <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Nos domaines d'intervention
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const FeatureIcon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                  <FeatureIcon className={`w-6 h-6 text-${primaryColor}`} />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Étude de Cas */}
      <section className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Étude de Cas : {caseStudy.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{caseStudy.description}</p>
        <div className="flex flex-wrap gap-4">
          {caseStudy.metrics.map((metric, index) => (
            <div key={index} className={`p-4 rounded-lg ${colorClasses[metric.color]}`}>
              <p className="text-xl font-bold">{metric.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{ctaTitle}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{ctaDescription}</p>
        <Button 
          size="lg" 
          onClick={onCtaClick}
          className="hover:scale-105 transition-transform duration-200"
        >
          {ctaButtonText} <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </section>
    </div>
  );
} 