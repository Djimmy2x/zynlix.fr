import { Linkedin, Mail, Award, Users, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Team() {
  const leadership = [
    {
      name: "Marc Dubois",
      role: "Directeur Général",
      experience: "20+ ans",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      description: "Expert en transformation digitale et stratégie IT. Diplômé de CentraleSupélec, Marc a dirigé la transformation numérique de plusieurs grandes entreprises avant de fonder Zynlix.",
      expertise: ["Stratégie IT", "Transformation digitale", "Management", "Innovation"],
      linkedin: "#",
      email: "marc.dubois@zynlix.fr"
    },
    {
      name: "Sophie Martin",
      role: "Directrice Technique",
      experience: "15+ ans",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      description: "Architecte cloud certifiée AWS et Azure. Sophie supervise l'ensemble des projets techniques et garantit l'excellence de nos solutions.",
      expertise: ["Architecture cloud", "Cybersécurité", "DevOps", "Big Data"],
      linkedin: "#",
      email: "sophie.martin@zynlix.fr"
    },
    {
      name: "Pierre Legrand",
      role: "Directeur Commercial",
      experience: "12+ ans",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      description: "Spécialiste de la relation client et du développement commercial dans le secteur IT. Pierre accompagne nos clients dans leurs projets de transformation.",
      expertise: ["Développement commercial", "Relation client", "Négociation", "Stratégie"],
      linkedin: "#",
      email: "pierre.legrand@zynlix.fr"
    }
  ];

  const departments = [
    {
      name: "Équipe Infrastructure",
      count: 8,
      description: "Experts en architecture cloud, virtualisation et systèmes",
      skills: ["VMware", "Hyper-V", "AWS", "Azure", "Kubernetes", "Docker"],
      lead: "Thomas Rousseau",
      projects: ["Migration cloud", "Modernisation infrastructure", "Optimisation performances"]
    },
    {
      name: "Équipe Sécurité",
      count: 6,
      description: "Spécialistes cybersécurité et conformité réglementaire",
      skills: ["Penetration testing", "SIEM", "SOC", "RGPD", "ISO 27001", "Forensic"],
      lead: "Marie Chevallier",
      projects: ["Audit sécurité", "Mise en conformité", "Réponse incidents"]
    },
    {
      name: "Équipe Support",
      count: 12,
      description: "Techniciens support et helpdesk multilingues",
      skills: ["Windows", "Linux", "MacOS", "Office 365", "Teams", "ITIL"],
      lead: "Antoine Bernard",
      projects: ["Support N1/N2", "Formation utilisateurs", "Documentation"]
    },
    {
      name: "Équipe Réseau",
      count: 5,
      description: "Ingénieurs réseau et télécommunications",
      skills: ["Cisco", "Juniper", "VoIP", "SD-WAN", "Fibres optiques", "5G"],
      lead: "Julien Moreau",
      projects: ["Déploiement réseau", "Optimisation WAN", "Téléphonie IP"]
    }
  ];

  const stats = [
    { label: "Collaborateurs", value: "35+", icon: Users },
    { label: "Certifications", value: "50+", icon: Award },
    { label: "Bureaux", value: "3", icon: MapPin },
    { label: "Années d'existence", value: "15+", icon: Calendar }
  ];

  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Notre Équipe
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Une équipe d'experts passionnés, certifiés et dédiés à votre réussite. 
            Découvrez les talents qui font la force de Zynlix.
          </p>
        </div>

        {/* Statistiques équipe */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direction */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Équipe de Direction
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                  <Badge variant="secondary" className="w-fit mx-auto mt-2">{member.experience}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 text-center">
                    {member.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Expertises :</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center space-x-3">
                    <Button variant="outline" size="sm">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Départements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Nos Départements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{dept.name}</CardTitle>
                      <CardDescription className="text-base">{dept.description}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-lg font-bold px-3 py-1">
                      {dept.count}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Responsable : {dept.lead}</h4>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Compétences clés :</h4>
                    <div className="flex flex-wrap gap-1">
                      {dept.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Projets types :</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300">
                      {dept.projects.map((project, idx) => (
                        <li key={idx} className="mb-1">• {project}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Recrutement */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Rejoignez Notre Équipe
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Nous recherchons constamment de nouveaux talents pour renforcer nos équipes. 
            Découvrez nos opportunités de carrière et rejoignez l'aventure Zynlix.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-accent text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            Voir Nos Offres d'Emploi
          </Button>
        </div>
      </div>
    </div>
  );
}