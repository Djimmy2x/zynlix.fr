import { Server, Shield, Users, Network, BarChart, Settings } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Server,
      title: "Infrastructure & Cloud",
      description: "Gestion complète de votre infrastructure serveurs, migration cloud, optimisation des performances et monitoring 24/7.",
      features: [
        "Supervision proactive",
        "Migration cloud sécurisée",
        "Optimisation performances"
      ],
      color: "primary"
    },
    {
      icon: Shield,
      title: "Sécurité & Sauvegarde",
      description: "Protection avancée contre les cybermenaces, sauvegardes automatisées et plans de reprise d'activité.",
      features: [
        "Pare-feu nouvelle génération",
        "Sauvegardes automatisées",
        "Plan de reprise d'activité"
      ],
      color: "secondary"
    },
    {
      icon: Users,
      title: "Support Utilisateurs",
      description: "Helpdesk multicanal, gestion des postes de travail et formation de vos équipes aux nouveaux outils.",
      features: [
        "Support 24/7",
        "Gestion des postes",
        "Formation utilisateurs"
      ],
      color: "primary"
    },
    {
      icon: Network,
      title: "Réseau & Télécoms",
      description: "Conception et maintenance de votre architecture réseau, optimisation des flux et connectivité sécurisée.",
      features: [
        "Architecture réseau",
        "VPN sécurisé",
        "Optimisation bande passante"
      ],
      color: "secondary"
    },
    {
      icon: BarChart,
      title: "Monitoring & Reporting",
      description: "Surveillance continue de votre SI, alertes proactives et rapports détaillés sur les performances.",
      features: [
        "Monitoring temps réel",
        "Alertes proactives",
        "Rapports personnalisés"
      ],
      color: "primary"
    },
    {
      icon: Settings,
      title: "Conseil & Stratégie IT",
      description: "Audit de votre SI, définition de votre stratégie IT et accompagnement dans vos projets de transformation.",
      features: [
        "Audit SI complet",
        "Stratégie IT",
        "Accompagnement projets"
      ],
      color: "secondary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Services d'Infogérance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions complètes pour optimiser, sécuriser et faire évoluer votre infrastructure informatique
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${service.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'} rounded-lg flex items-center justify-center`}>
                    <Icon className={`${service.color === 'primary' ? 'text-primary' : 'text-secondary'} w-6 h-6`} />
                  </div>
                  <h3 className="text-xl font-semibold ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
