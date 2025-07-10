import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, Shield, Users, Network, BarChart, Settings, ArrowRight } from "lucide-react";
import { Link, Route, useRoute } from "wouter";
import InfrastructureCloud from "@/components/services/infrastructure-cloud";

const services = [
  {
    slug: "infrastructure-cloud",
    icon: Server,
    title: "Infrastructure & Cloud",
    description: "Gestion, optimisation et migration de vos serveurs vers le cloud.",
    component: InfrastructureCloud
  },
  {
    slug: "securite-sauvegarde",
    icon: Shield,
    title: "Sécurité & Sauvegarde",
    description: "Protection avancée, sauvegardes et plans de reprise d'activité.",
    component: () => <div>Sécurité & Sauvegarde</div> // Placeholder
  },
  {
    slug: "support-utilisateurs",
    icon: Users,
    title: "Support Utilisateurs",
    description: "Helpdesk réactif et gestion de votre parc informatique.",
    component: () => <div>Support Utilisateurs</div> // Placeholder
  },
  {
    slug: "reseau-telecoms",
    icon: Network,
    title: "Réseau & Télécoms",
    description: "Conception et maintenance de votre architecture réseau.",
    component: () => <div>Réseau & Télécoms</div> // Placeholder
  },
  {
    slug: "monitoring-reporting",
    icon: BarChart,
    title: "Monitoring & Reporting",
    description: "Surveillance continue et rapports de performance détaillés.",
    component: () => <div>Monitoring & Reporting</div> // Placeholder
  },
  {
    slug: "conseil-strategie",
    icon: Settings,
    title: "Conseil & Stratégie IT",
    description: "Audit et accompagnement dans votre transformation numérique.",
    component: () => <div>Conseil & Stratégie IT</div> // Placeholder
  }
];

function ServicesList() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="flex flex-col justify-between hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="outline" className="w-full">
                      En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const [match, params] = useRoute("/services/:slug");

  const service = match ? services.find(s => s.slug === params.slug) : null;
  const ServiceComponent = service ? service.component : null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Settings className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nos Services d'Infogérance
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Des solutions complètes pour la performance et la sécurité de votre système d'information.
          </p>
        </div>
      </section>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Route path="/services" component={ServicesList} />
          {ServiceComponent && <Route path="/services/:slug"><ServiceComponent /></Route>}
        </div>
      </main>

      <Footer />
    </div>
  );
}
