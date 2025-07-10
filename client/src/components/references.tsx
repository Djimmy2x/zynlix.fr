import { Star } from "lucide-react";

export default function References() {
  const testimonials = [
    {
      name: "Jean-Pierre Moreau",
      role: "DG, Entreprise Moreau",
      content: "TechnoGarde a transformé notre infrastructure IT. Leur expertise et leur réactivité nous ont permis de nous concentrer sur notre cœur de métier en toute sérénité.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Marie Dubois",
      role: "DSI, TechInnovation",
      content: "Un service irréprochable et une équipe toujours à l'écoute. La migration vers le cloud s'est déroulée sans aucun problème grâce à leur expertise.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Philippe Lambert",
      role: "PDG, Solutions Pro",
      content: "Depuis que nous avons confié notre infogérance à TechnoGarde, nous avons divisé par deux nos incidents et nos coûts de maintenance.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    }
  ];

  const caseStudies = [
    {
      title: "Migration Cloud - Entreprise Manufacturière",
      description: "Migration complète de l'infrastructure on-premise vers AWS avec zéro interruption de service pour une entreprise de 200 collaborateurs.",
      tags: [
        { label: "-40% coûts", color: "blue" },
        { label: "99.9% disponibilité", color: "green" },
        { label: "3 mois", color: "gray" }
      ],
      borderColor: "border-primary"
    },
    {
      title: "Sécurisation SI - Cabinet d'Avocats",
      description: "Mise en place d'une architecture sécurisée avec chiffrement bout-en-bout et conformité RGPD pour un cabinet de 50 avocats.",
      tags: [
        { label: "ISO 27001", color: "blue" },
        { label: "RGPD compliant", color: "green" },
        { label: "6 semaines", color: "gray" }
      ],
      borderColor: "border-secondary"
    }
  ];

  return (
    <section id="references" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ils Nous Font Confiance
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Découvrez les témoignages de nos clients satisfaits
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Case Studies */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Cas d'Usage
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`border-l-4 ${study.borderColor} pl-6 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {study.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{study.description}</p>
                <div className="flex flex-wrap gap-4">
                  {study.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-sm ${
                        tag.color === 'blue' 
                          ? 'bg-[hsl(var(--light-blue))] text-primary'
                          : tag.color === 'green'
                          ? 'bg-[hsl(var(--light-green))] text-secondary'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
