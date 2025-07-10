import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Building, Target, Users, TrendingUp, Award, Shield } from "lucide-react";

const teamMembers = [
  {
    name: "Marc Dubois",
    role: "Directeur Technique",
    description: "15 ans d'expérience en infrastructure IT et cloud.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
  },
  {
    name: "Sarah Martin",
    role: "Responsable Sécurité",
    description: "Experte en cybersécurité et conformité RGPD.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
  },
  {
    name: "Thomas Leroy",
    role: "Responsable Support",
    description: "Spécialiste du support utilisateur et de la satisfaction client.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
  }
];

const values = [
  { icon: Award, title: "Excellence", description: "Nous visons l'excellence technique et opérationnelle dans chacune de nos missions." },
  { icon: Shield, title: "Confiance", description: "La sécurité et la confidentialité des données de nos clients sont notre priorité absolue." },
  { icon: TrendingUp, title: "Innovation", description: "Nous sommes en veille technologique constante pour proposer les solutions les plus performantes." }
];

export default function Company() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Building className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Notre Entreprise
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Votre partenaire de confiance pour une informatique performante et sécurisée.
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Target className="w-8 h-8 text-primary mr-4" />
                Notre Histoire
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Fondée en 2008, TechnoGarde est née d'une vision simple : rendre les services informatiques de pointe accessibles aux PME. Nous avons commencé avec une petite équipe de passionnés et une grande ambition.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Aujourd'hui, nous sommes fiers d'accompagner plus de 500 entreprises en France, en leur offrant la tranquillité d'esprit d'une infrastructure IT robuste, sécurisée et optimisée.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Équipe TechnoGarde en réunion"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Nos Valeurs Fondamentales
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 flex items-center justify-center">
            <Users className="w-8 h-8 text-primary mr-4" />
            Notre Équipe d'Experts
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h4>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
