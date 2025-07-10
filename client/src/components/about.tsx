export default function About() {
  const teamMembers = [
    {
      name: "Marc Dubois",
      role: "Directeur Technique",
      description: "15 ans d'expérience en infrastructure IT",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Sarah Martin",
      role: "Responsable Sécurité",
      description: "Experte en cybersécurité et conformité",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Thomas Leroy",
      role: "Responsable Support",
      description: "Spécialiste en support utilisateurs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              À Propos de TechnoGarde
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Depuis plus de 15 ans, TechnoGarde accompagne les entreprises dans la gestion et l'optimisation de leur infrastructure informatique. Notre expertise et notre approche proactive nous permettent d'offrir des solutions sur mesure, adaptées aux besoins spécifiques de chaque client.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nous combinons innovation technologique et excellence opérationnelle pour garantir la continuité et la performance de votre système d'information, tout en optimisant vos coûts IT.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-[hsl(var(--light-blue))] rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Disponibilité garantie</div>
              </div>
              <div className="text-center p-4 bg-[hsl(var(--light-green))] rounded-lg">
                <div className="text-2xl font-bold text-secondary mb-2">30%</div>
                <div className="text-sm text-gray-600">Réduction des coûts IT</div>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in-scale">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional IT team collaborating"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">
            Notre Équipe d'Experts
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
