import { Briefcase, MapPin, Clock, Users, Heart, Zap, Award, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Careers() {
  const openPositions = [
    {
      title: "Architecte Cloud Senior",
      department: "Infrastructure",
      location: "Paris",
      type: "CDI",
      experience: "5+ ans",
      description: "Conception et déploiement d'architectures cloud complexes pour nos clients grands comptes",
      skills: ["AWS", "Azure", "Kubernetes", "Terraform", "DevOps"],
      posted: "Il y a 3 jours"
    },
    {
      title: "Ingénieur Cybersécurité",
      department: "Sécurité",
      location: "Lyon",
      type: "CDI",
      experience: "3+ ans",
      description: "Audit de sécurité, tests d'intrusion et mise en place de solutions de protection",
      skills: ["Penetration testing", "SIEM", "ISO 27001", "RGPD", "SOC"],
      posted: "Il y a 1 semaine"
    },
    {
      title: "Technicien Support N2",
      department: "Support",
      location: "Marseille",
      type: "CDI",
      experience: "2+ ans",
      description: "Support technique avancé et résolution d'incidents complexes",
      skills: ["Windows Server", "VMware", "Office 365", "Active Directory", "ITIL"],
      posted: "Il y a 2 semaines"
    },
    {
      title: "Ingénieur Réseau",
      department: "Réseau",
      location: "Paris",
      type: "CDI",
      experience: "4+ ans",
      description: "Déploiement et maintenance d'infrastructures réseau et télécoms",
      skills: ["Cisco", "Juniper", "VoIP", "SD-WAN", "Fibres optiques"],
      posted: "Il y a 4 jours"
    },
    {
      title: "Consultant IT Junior",
      department: "Conseil",
      location: "Télétravail",
      type: "CDI",
      experience: "0-2 ans",
      description: "Accompagnement des clients dans leurs projets de transformation digitale",
      skills: ["Gestion de projet", "Analyse fonctionnelle", "Communication", "Formation"],
      posted: "Il y a 1 jour"
    },
    {
      title: "Développeur DevOps",
      department: "Infrastructure",
      location: "Paris",
      type: "CDI",
      experience: "3+ ans",
      description: "Automatisation des déploiements et optimisation des processus CI/CD",
      skills: ["Docker", "Kubernetes", "Jenkins", "GitLab", "Python", "Ansible"],
      posted: "Il y a 6 jours"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Équilibre Vie Pro/Perso",
      description: "Télétravail flexible, RTT et congés sabbatiques"
    },
    {
      icon: GraduationCap,
      title: "Formation Continue",
      description: "Budget formation 3000€/an et certifications prises en charge"
    },
    {
      icon: Users,
      title: "Esprit d'Équipe",
      description: "Événements réguliers, team building et projets collaboratifs"
    },
    {
      icon: Award,
      title: "Reconnaissance",
      description: "Primes objectives, évolution de carrière et intéressement"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Projets R&D, veille technologique et temps dédié à l'innovation"
    },
    {
      icon: MapPin,
      title: "Mobilité",
      description: "Missions variées, échanges inter-bureaux et opportunités internationales"
    }
  ];

  const hiringProcess = [
    {
      step: "1",
      title: "Candidature",
      description: "Envoi de votre CV et lettre de motivation via notre plateforme"
    },
    {
      step: "2",
      title: "Présélection",
      description: "Étude de votre profil par notre équipe RH (48h max)"
    },
    {
      step: "3",
      title: "Entretien RH",
      description: "Échange téléphonique de 30 min sur votre parcours et motivations"
    },
    {
      step: "4",
      title: "Test Technique",
      description: "Évaluation de vos compétences techniques (en ligne ou présentiel)"
    },
    {
      step: "5",
      title: "Entretien Manager",
      description: "Rencontre avec votre futur manager et présentation de l'équipe"
    },
    {
      step: "6",
      title: "Proposition",
      description: "Offre détaillée et négociation des conditions"
    }
  ];

  const values = [
    "Excellence technique et innovation constante",
    "Collaboration et partage de connaissances",
    "Satisfaction client et qualité de service",
    "Développement personnel et professionnel",
    "Responsabilité sociale et environnementale"
  ];

  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Carrières chez Zynlix
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Rejoignez une équipe passionnée et contribuez à façonner l'avenir de l'IT. 
            Chez Zynlix, votre talent trouve sa place dans un environnement stimulant et bienveillant.
          </p>
        </div>

        {/* Nos valeurs */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Nos Valeurs
          </h2>
          <div className="grid md:grid-cols-1 gap-4 max-w-3xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Avantages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Pourquoi Nous Rejoindre ?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
                    <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Postes ouverts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Postes Ouverts
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg mb-2">{position.title}</CardTitle>
                      <CardDescription className="text-sm">{position.description}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-xs">{position.type}</Badge>
                  </div>
                  <div className="flex space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-3">
                    <div className="flex items-center space-x-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{position.department}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{position.experience}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Compétences requises :</h4>
                    <div className="flex flex-wrap gap-1">
                      {position.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{position.posted}</span>
                    <Button size="sm" variant="outline">
                      Postuler
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Processus de recrutement */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Notre Processus de Recrutement
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {hiringProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Candidature spontanée */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Vous ne trouvez pas le poste idéal ?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Envoyez-nous votre candidature spontanée ! Nous sommes toujours à la recherche 
            de talents exceptionnels pour renforcer nos équipes.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            Candidature Spontanée
          </Button>
        </div>
      </div>
    </div>
  );
}