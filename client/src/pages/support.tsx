import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageSquare, LifeBuoy } from "lucide-react";

const faqItems = [
  {
    question: "Quels sont vos délais d'intervention ?",
    answer: "Nous garantissons une première réponse en moins de 15 minutes pour les incidents critiques, et en moins d'une heure pour les demandes standards. La résolution dépend de la complexité du problème, mais 80% des tickets sont résolus en moins de 4 heures."
  },
  {
    question: "Proposez-vous un support 24/7 ?",
    answer: "Oui, notre service de support est disponible 24h/24 et 7j/7 pour tous nos clients sous contrat. Une équipe d'astreinte est toujours prête à intervenir sur les incidents critiques, même en dehors des heures de bureau."
  },
  {
    question: "Comment puis-je suivre l'avancement de mes demandes ?",
    answer: "Tous nos clients ont accès à un portail de support en ligne sécurisé. Vous pouvez y soumettre de nouveaux tickets, suivre en temps réel l'état de vos demandes, communiquer avec nos techniciens et consulter l'historique de vos interventions."
  },
  {
    question: "Quelle est la durée d'un contrat type ?",
    answer: "Nos contrats standards ont une durée d'engagement de 12, 24 ou 36 mois, avec des tarifs dégressifs. Nous proposons également des solutions plus flexibles pour des projets spécifiques ou des besoins ponctuels."
  }
];

const supportChannels = [
  { icon: Phone, title: "Support Téléphonique", description: "Pour les urgences, appelez-nous directement.", contact: "+33 1 23 45 67 89" },
  { icon: Mail, title: "Support par Email", description: "Pour les demandes non urgentes.", contact: "support@technogarde.fr" },
  { icon: MessageSquare, title: "Portail Client", description: "Suivez vos tickets en temps réel.", contact: "Accéder au portail" }
];

export default function Support() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LifeBuoy className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Support & FAQ
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Nous sommes là pour vous aider. Trouvez les réponses à vos questions.
          </p>
        </div>
      </section>

      {/* Canaux de Support */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Comment nous contacter ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>{channel.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{channel.description}</p>
                    <Button>{channel.contact}</Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Foire Aux Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-lg text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600 dark:text-gray-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
}
