import { Scale, Shield, FileText, Users, Globe, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Legal() {
  const companyInfo = {
    name: "Zynlix",
    legalName: "Zynlix SAS",
    siret: "123 456 789 00123",
    address: "123 Avenue des Champs-Élysées, 75008 Paris",
    phone: "01 XX XX XX XX",
    email: "contact@zynlix.fr",
    capital: "100 000 €",
    rcs: "Paris B 123 456 789",
    tva: "FR12345678901"
  };

  const sections = [
    {
      id: "editeur",
      title: "Éditeur du Site",
      icon: Globe,
      content: [
        `Le site web www.zynlix.fr est édité par la société ${companyInfo.legalName}.`,
        `Siège social : ${companyInfo.address}`,
        `Capital social : ${companyInfo.capital}`,
        `SIRET : ${companyInfo.siret}`,
        `RCS : ${companyInfo.rcs}`,
        `N° TVA intracommunautaire : ${companyInfo.tva}`,
        `Téléphone : ${companyInfo.phone}`,
        `Email : ${companyInfo.email}`
      ]
    },
    {
      id: "hebergeur",
      title: "Hébergement",
      icon: Shield,
      content: [
        "Le site est hébergé par Replit Inc.",
        "Adresse : 767 Bryant St, San Francisco, CA 94107, États-Unis",
        "Site web : https://replit.com",
        "L'hébergeur est conforme aux standards de sécurité internationaux et assure une disponibilité de service optimale."
      ]
    },
    {
      id: "donnees",
      title: "Protection des Données Personnelles",
      icon: Users,
      content: [
        "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles.",
        "Responsable du traitement : Zynlix SAS",
        "Finalités du traitement : Gestion des demandes de contact, fourniture des services, amélioration de nos prestations",
        "Base légale : Consentement pour les demandes de contact, exécution du contrat pour les clients",
        "Durée de conservation : 3 ans maximum après la dernière interaction",
        "Destinataires : Personnel autorisé de Zynlix, sous-traitants techniques liés par des accords de confidentialité",
        "Transferts hors UE : Aucun transfert de données personnelles hors Union Européenne",
        "Exercice des droits : Contactez notre délégué à la protection des données à dpo@zynlix.fr"
      ]
    },
    {
      id: "cookies",
      title: "Cookies et Technologies Similaires",
      icon: FileText,
      content: [
        "Notre site utilise des cookies pour améliorer votre expérience de navigation :",
        "• Cookies techniques : Indispensables au fonctionnement du site (session, préférences)",
        "• Cookies analytiques : Mesure d'audience anonymisée (Google Analytics avec IP anonymisée)",
        "• Cookies de préférences : Mémorisation de vos choix (thème sombre/clair, langue)",
        "Vous pouvez configurer votre navigateur pour refuser les cookies non essentiels.",
        "Les cookies sont conservés pour une durée maximale de 13 mois."
      ]
    },
    {
      id: "propriete",
      title: "Propriété Intellectuelle",
      icon: Scale,
      content: [
        "L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, etc.) est protégé par le droit d'auteur et appartient à Zynlix ou à ses partenaires.",
        "Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site est interdite, sauf autorisation écrite préalable de Zynlix.",
        "Les marques citées sur ce site sont déposées par leurs propriétaires respectifs.",
        "L'utilisation non autorisée de ces éléments constitue une contrefaçon passible de sanctions pénales."
      ]
    },
    {
      id: "responsabilite",
      title: "Limitation de Responsabilité",
      icon: Shield,
      content: [
        "Zynlix s'efforce de fournir des informations exactes et à jour sur ce site, mais ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.",
        "Zynlix ne pourra être tenue responsable des dommages directs ou indirects résultant de l'utilisation du site ou de l'impossibilité d'y accéder.",
        "L'utilisateur est seul responsable de l'utilisation qu'il fait des informations contenues sur ce site.",
        "Les liens vers des sites tiers sont fournis à titre informatif. Zynlix n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu."
      ]
    },
    {
      id: "droit",
      title: "Droit Applicable et Juridiction",
      icon: Scale,
      content: [
        "Les présentes mentions légales sont régies par le droit français.",
        "En cas de litige, les parties s'efforceront de trouver une solution amiable.",
        "À défaut d'accord amiable, tout litige relatif à l'utilisation du site sera soumis aux tribunaux compétents de Paris.",
        "Si une disposition des présentes mentions légales était déclarée nulle ou inapplicable, les autres dispositions resteraient en vigueur."
      ]
    }
  ];

  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Mentions Légales
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Informations légales et conditions d'utilisation du site Zynlix
          </p>
        </div>

        {/* Informations de contact rapide */}
        <Card className="mb-12 border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-primary" />
              Contact Légal
            </CardTitle>
            <CardDescription>
              Pour toute question relative aux mentions légales ou à la protection des données
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Adresse :</strong><br />
                {companyInfo.address}
              </div>
              <div>
                <strong>Contact :</strong><br />
                Email : {companyInfo.email}<br />
                Téléphone : {companyInfo.phone}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sections légales */}
        <div className="space-y-8">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Card key={section.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Icon className="w-6 h-6 mr-3 text-primary" />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.content.map((paragraph, index) => (
                      <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Separator className="my-12" />

        {/* Date de mise à jour */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Dernière mise à jour des mentions légales : 15 janvier 2025</p>
          <p className="mt-2">
            Ces mentions légales peuvent être modifiées à tout moment. 
            Il appartient à l'utilisateur de les consulter régulièrement.
          </p>
        </div>

        {/* Liens utiles */}
        <Card className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
              Liens Utiles
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <button className="text-primary hover:text-accent transition-colors font-medium">
                  Politique de Confidentialité
                </button>
              </div>
              <div>
                <button className="text-primary hover:text-accent transition-colors font-medium">
                  Conditions Générales d'Utilisation
                </button>
              </div>
              <div>
                <button className="text-primary hover:text-accent transition-colors font-medium">
                  Gestion des Cookies
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}