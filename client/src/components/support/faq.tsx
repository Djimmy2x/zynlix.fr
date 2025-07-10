import { Search, ChevronDown, ChevronUp, HelpCircle, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      name: "Services Généraux",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
      count: 12
    },
    {
      name: "Infrastructure Cloud",
      color: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
      count: 8
    },
    {
      name: "Sécurité",
      color: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
      count: 10
    },
    {
      name: "Support Technique",
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
      count: 15
    },
    {
      name: "Facturation",
      color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",
      count: 6
    }
  ];

  const faqItems = [
    {
      category: "Services Généraux",
      question: "Quels sont les délais d'intervention de Zynlix ?",
      answer: "Nos délais d'intervention varient selon le niveau de criticité : incidents critiques (< 2h), incidents majeurs (< 4h), incidents mineurs (< 8h). Pour le support standard, nous garantissons une réponse sous 15 minutes en heures ouvrées.",
      popular: true
    },
    {
      category: "Infrastructure Cloud",
      question: "Combien de temps prend une migration cloud complète ?",
      answer: "La durée dépend de la complexité de votre infrastructure. En moyenne : PME (2-4 semaines), ETI (1-3 mois), Grandes entreprises (3-6 mois). Nous établissons un planning détaillé après l'audit initial gratuit.",
      popular: true
    },
    {
      category: "Sécurité",
      question: "Comment Zynlix garantit-elle la sécurité de mes données ?",
      answer: "Nous appliquons une approche sécurité multicouche : chiffrement bout-en-bout, certificat ISO 27001, conformité RGPD, centres de données certifiés, surveillance 24/7, tests d'intrusion réguliers et plan de continuité d'activité.",
      popular: true
    },
    {
      category: "Support Technique",
      question: "Comment contacter le support technique en urgence ?",
      answer: "Hotline d'urgence 24/7 : 01 XX XX XX XX. Vous pouvez aussi créer un ticket prioritaire via votre portail client ou nous envoyer un email à urgence@zynlix.fr. Nos équipes sont mobilisées en moins de 15 minutes.",
      popular: false
    },
    {
      category: "Services Généraux",
      question: "Zynlix intervient-elle sur site ou uniquement à distance ?",
      answer: "Nous proposons les deux modalités : interventions à distance (80% des cas) pour une résolution rapide, et interventions sur site pour le matériel, installations complexes ou selon votre préférence. Déplacement inclus dans un rayon de 50km de nos bureaux.",
      popular: false
    },
    {
      category: "Infrastructure Cloud",
      question: "Puis-je garder une partie de mon infrastructure on-premise ?",
      answer: "Absolument ! Nous concevons des architectures hybrides sur-mesure combinant cloud public, privé et infrastructure on-premise. Cette approche permet une migration progressive et adaptée à vos contraintes métier.",
      popular: false
    },
    {
      category: "Facturation",
      question: "Comment fonctionne la facturation des services Zynlix ?",
      answer: "Nous proposons plusieurs modèles : forfait mensuel pour l'infogérance, facturation au temps passé pour les projets, ou forfait projet pour les migrations. Facturation mensuelle, paiement à 30 jours, devis gratuit et transparent.",
      popular: false
    },
    {
      category: "Sécurité",
      question: "Que faire en cas de cyberattaque ou incident de sécurité ?",
      answer: "Contactez immédiatement notre hotline sécurité 24/7. Ne débranchez rien, documentez l'incident, isolez les systèmes suspects si possible. Notre équipe de réponse d'incident prendra le relais sous 30 minutes maximum.",
      popular: true
    },
    {
      category: "Support Technique",
      question: "Quels outils utilisez-vous pour le support à distance ?",
      answer: "Nous utilisons des solutions professionnelles sécurisées : TeamViewer Business, Microsoft Remote Desktop, VPN sécurisés. Tous les accès sont tracés, chiffrés et nécessitent votre autorisation explicite.",
      popular: false
    },
    {
      category: "Infrastructure Cloud",
      question: "Quels fournisseurs cloud recommandez-vous ?",
      answer: "Nous sommes partenaires certifiés AWS, Microsoft Azure et Google Cloud. Le choix dépend de vos besoins : Azure pour les environnements Microsoft, AWS pour la flexibilité, Google Cloud pour l'analytique. Nous vous conseillons selon votre contexte.",
      popular: false
    },
    {
      category: "Services Généraux",
      question: "Proposez-vous des formations pour nos équipes ?",
      answer: "Oui, nous proposons des formations sur-mesure : utilisation des nouveaux outils, bonnes pratiques sécurité, gestion des incidents. Formats : présentiel, e-learning, ateliers pratiques. Certification possible selon les modules.",
      popular: false
    },
    {
      category: "Facturation",
      question: "Y a-t-il des frais cachés dans vos prestations ?",
      answer: "Non, nous pratiquons une tarification transparente. Tous les coûts sont détaillés dans le devis : prestations, licences, matériel, déplacements. Aucun frais supplémentaire sans validation préalable de votre part.",
      popular: false
    }
  ];

  const filteredFaq = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const popularQuestions = faqItems.filter(item => item.popular);

  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Questions Fréquentes
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur nos services, 
            notre support technique et nos processus.
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Rechercher une question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Catégories */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Catégories</h3>
                <div className="space-y-2">
                  {faqCategories.map((category, index) => (
                    <button key={index} className="flex justify-between items-center w-full text-left p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{category.name}</span>
                      <Badge className={`text-xs ${category.color}`}>{category.count}</Badge>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact support */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <HelpCircle className="w-5 h-5 mr-2 text-primary" />
                    Besoin d'aide ?
                  </CardTitle>
                  <CardDescription>
                    Vous ne trouvez pas votre réponse ? Contactez notre équipe support.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    01 XX XX XX XX
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    support@zynlix.fr
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat en ligne
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="lg:col-span-3">
            {!searchTerm && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Questions Populaires
                </h2>
                <div className="grid gap-4">
                  {popularQuestions.map((item, index) => (
                    <Card key={`popular-${index}`} className="border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.question}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{item.answer}</p>
                        <Badge variant="secondary" className="mt-3 text-xs">{item.category}</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Toutes les questions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {searchTerm ? `Résultats pour "${searchTerm}"` : "Toutes les Questions"}
              </h2>
              <div className="space-y-4">
                {filteredFaq.map((item, index) => (
                  <Card key={index} className="border hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 pr-4">
                              {item.question}
                            </h3>
                            <Badge variant="outline" className="text-xs">
                              {item.category}
                            </Badge>
                          </div>
                          {openItems.includes(index) ? (
                            <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      {openItems.includes(index) && (
                        <div className="px-6 pb-6 border-t dark:border-gray-700">
                          <p className="text-gray-600 dark:text-gray-300 pt-4 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredFaq.length === 0 && (
                <Card>
                  <CardContent className="text-center py-12">
                    <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Aucun résultat trouvé
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Essayez avec d'autres mots-clés ou contactez notre support.
                    </p>
                    <Button>Contacter le Support</Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}