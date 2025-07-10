import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        "Infrastructure & Cloud",
        "Sécurité & Sauvegarde",
        "Support Utilisateurs",
        "Réseau & Télécoms"
      ]
    },
    {
      title: "Entreprise",
      links: [
        "À Propos",
        "Équipe",
        "Carrières",
        "Actualités"
      ]
    },
    {
      title: "Support",
      links: [
        "Contact",
        "Documentation",
        "FAQ",
        "Mentions Légales"
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Facebook, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">TechnoGarde</h3>
            <p className="text-gray-300 mb-4">
              Votre partenaire de confiance pour tous vos besoins en infogérance et services informatiques.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-gray-300">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 TechnoGarde. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
