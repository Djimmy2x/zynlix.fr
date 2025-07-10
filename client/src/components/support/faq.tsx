import { Search, ChevronDown, ChevronUp, HelpCircle, Phone, Mail, MessageCircle, Filter, Clock, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

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
      count: 15,
      icon: Users
    },
    {
      name: "Infrastructure Cloud",
      color: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
      count: 12,
      icon: Shield
    },
    {
      name: "Sécurité",
      color: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
      count: 10,
      icon: Shield
    },
    {
      name: "Support Technique",
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
      count: 18,
      icon: Phone
    },
    {
      name: "Contractuel & Facturation",
      color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",
      count: 8,
      icon: Clock
    }
  ];

  const faqItems = [
    // Services Généraux - Questions essentielles
    {
      category: "Services Généraux",
      question: "Quels sont vos délais d'intervention de Zynlix ?",
      answer: "Nos délais d'intervention sont garantis selon le niveau de criticité : Incidents critiques (panne système complète) : < 2 heures, Incidents majeurs (dysfonctionnement partiel) : < 4 heures, Incidents mineurs (problème isolé) : < 8 heures. Pour le support standard, nous garantissons une réponse sous 15 minutes en heures ouvrées et 30 minutes en mode 24/7.",
      popular: true,
      tags: ["délais", "intervention", "support"]
    },
    {
      category: "Contractuel & Facturation",
      question: "Quelle est la durée d'un contrat type avec Zynlix ?",
      answer: "Nos contrats d'infogérance sont généralement conclus pour une durée de 12 à 36 mois, avec possibilité de reconduction tacite. Cette durée nous permet d'optimiser votre infrastructure et d'amortir les coûts de mise en place. Nous proposons aussi des contrats plus courts (6 mois minimum) pour les projets spécifiques ou les tests de nos services.",
      popular: true,
      tags: ["contrat", "durée", "engagement"]
    },
    {
      category: "Contractuel & Facturation",
      question: "Quels sont vos tarifs et comment sont-ils calculés ?",
      answer: "Nos tarifs sont adaptés à la taille de votre entreprise : PME (5-20 utilisateurs) : 120-150€/utilisateur/mois, ETI (20-100 utilisateurs) : 90-120€/utilisateur/mois, Grandes entreprises (100+ utilisateurs) : sur devis personnalisé. Ces tarifs incluent l'infogérance complète, la supervision 24/7, le support utilisateurs et les sauvegardes automatisées.",
      popular: true,
      tags: ["tarifs", "prix", "coût"]
    },
    {
      category: "Services Généraux",
      question: "Zynlix intervient-elle sur site ou uniquement à distance ?",
      answer: "Nous proposons les deux modalités selon vos besoins : Interventions à distance (80% des cas) pour une résolution rapide des incidents logiciels, configuration, maintenance préventive. Interventions sur site pour l'installation de matériel, maintenance physique, formations utilisateurs, ou selon votre préférence. Les déplacements sont inclus dans un rayon de 50km de nos bureaux (Paris, Lyon, Marseille).",
      popular: false,
      tags: ["intervention", "site", "distance"]
    },
    {
      category: "Infrastructure Cloud",
      question: "Combien de temps prend une migration cloud complète ?",
      answer: "La durée varie selon la complexité de votre infrastructure : PME (5-20 utilisateurs) : 2-4 semaines, ETI (20-100 utilisateurs) : 1-3 mois, Grandes entreprises (100+ utilisateurs) : 3-6 mois. Chaque migration comprend : audit initial (1 semaine), planification détaillée (1 semaine), migration par phases (progressif), tests et optimisation (1 semaine), formation équipes (1 semaine).",
      popular: true,
      tags: ["migration", "cloud", "durée"]
    },
    {
      category: "Sécurité",
      question: "Comment Zynlix garantit-elle la sécurité de mes données ?",
      answer: "Notre approche sécurité multicouche comprend : Chiffrement bout-en-bout (AES-256) pour toutes les données, Conformité RGPD avec audits réguliers, Centres de données certifiés ISO 27001 et HDS, Surveillance 24/7 avec SOC (Security Operations Center), Tests d'intrusion trimestriels par des experts externes, Plan de continuité d'activité testé semestriellement, Sauvegardes quotidiennes avec rétention 30 jours minimum.",
      popular: true,
      tags: ["sécurité", "données", "protection"]
    },
    {
      category: "Support Technique",
      question: "Comment contacter le support technique en urgence ?",
      answer: "Plusieurs canaux selon le niveau d'urgence : Hotline d'urgence 24/7 : 01 85 76 28 93 (réponse < 15 min), Email prioritaire : urgence@zynlix.fr (réponse < 30 min), Portail client : création de ticket prioritaire (réponse < 1h), Chat en ligne : disponible 8h-20h en semaine (réponse immédiate). Nos équipes sont mobilisées en moins de 15 minutes pour les urgences critiques.",
      popular: false,
      tags: ["urgence", "contact", "support"]
    },
    {
      category: "Infrastructure Cloud",
      question: "Puis-je garder une partie de mon infrastructure on-premise ?",
      answer: "Absolument ! Nous concevons des architectures hybrides sur-mesure qui combinent le meilleur des deux mondes : Cloud public pour la flexibilité et l'évolutivité, Infrastructure on-premise pour les données sensibles et la conformité, Connexions sécurisées (VPN, liaisons privées) entre les environnements, Gestion unifiée depuis une console unique. Cette approche permet une migration progressive selon vos contraintes métier et réglementaires.",
      popular: false,
      tags: ["hybride", "on-premise", "cloud"]
    },
    {
      category: "Contractuel & Facturation",
      question: "Y a-t-il des frais cachés dans vos prestations ?",
      answer: "Non, nous pratiquons une tarification 100% transparente : Devis détaillé avec tous les coûts (prestations, licences, matériel, déplacements), Aucun frais supplémentaire sans validation écrite préalable, Tarification fixe mensuelle pour l'infogérance, Grille tarifaire claire pour les prestations ponctuelles, Rapport mensuel détaillé des interventions et coûts, Révision tarifaire annuelle uniquement (sur base inflation).",
      popular: false,
      tags: ["tarification", "transparence", "coûts"]
    },
    {
      category: "Sécurité",
      question: "Que faire en cas de cyberattaque ou incident de sécurité ?",
      answer: "Procédure d'urgence sécurité : 1. Contactez immédiatement notre hotline sécurité 24/7 : 01 85 76 28 94, 2. NE débranchez RIEN pour préserver les preuves, 3. Documentez l'incident (captures d'écran, messages d'erreur), 4. Isolez les systèmes suspects si possible, 5. Notre équipe CERT prend le relais sous 30 minutes maximum. Nous gérons l'analyse forensique, la communication avec les autorités si nécessaire, et la remise en service sécurisée.",
      popular: true,
      tags: ["cyberattaque", "incident", "urgence"]
    },
    {
      category: "Support Technique",
      question: "Quels outils utilisez-vous pour le support à distance ?",
      answer: "Nous utilisons uniquement des solutions professionnelles sécurisées : TeamViewer Business avec chiffrement AES-256, Microsoft Remote Desktop dans environnements Azure, VPN sécurisés avec authentification double facteur, Outils de supervision propriétaires (Nagios, Zabbix), Solutions RMM (Remote Monitoring and Management) certifiées. Tous les accès sont tracés, chiffrés et nécessitent votre autorisation explicite à chaque intervention.",
      popular: false,
      tags: ["outils", "distance", "sécurité"]
    },
    {
      category: "Infrastructure Cloud",
      question: "Quels fournisseurs cloud recommandez-vous ?",
      answer: "Nous sommes partenaires certifiés de tous les grands acteurs et adaptons le choix à vos besoins : Microsoft Azure : recommandé pour les environnements Windows et Microsoft 365, Amazon Web Services (AWS) : optimal pour la flexibilité et les applications cloud-native, Google Cloud Platform : idéal pour l'analytique et l'intelligence artificielle, OVH Cloud : solution française pour la souveraineté des données, Nous évaluons ensemble le meilleur choix selon vos contraintes techniques, budgétaires et réglementaires.",
      popular: false,
      tags: ["fournisseurs", "cloud", "recommandations"]
    },
    {
      category: "Services Généraux",
      question: "Proposez-vous des formations pour nos équipes ?",
      answer: "Oui, la formation fait partie intégrante de nos services : Formation initiale : prise en main des nouveaux outils et processus, Formations spécialisées : sécurité informatique, utilisation cloud, bonnes pratiques, Formats adaptés : présentiel, e-learning, ateliers pratiques, webinaires, Certification possible : Microsoft, AWS, sécurité informatique, Formation continue : sessions de mise à jour trimestrielles, Support personnalisé : accompagnement au changement et adoption des outils.",
      popular: false,
      tags: ["formation", "équipes", "apprentissage"]
    },
    {
      category: "Contractuel & Facturation",
      question: "Comment se déroule la résiliation d'un contrat ?",
      answer: "Processus de résiliation simple et transparent : Préavis de 3 mois requis (sauf cas exceptionnels), Accompagnement à la transition vers votre nouveau prestataire, Restitution complète de vos données dans le format souhaité, Documentation complète de votre infrastructure, Assistance durant 30 jours après la résiliation, Aucuns frais de résiliation si le préavis est respecté. Notre objectif est une transition en douceur même en cas de changement de prestataire.",
      popular: false,
      tags: ["résiliation", "fin", "contrat"]
    },
    {
      category: "Support Technique",
      question: "Quel est votre taux de résolution en première intervention ?",
      answer: "Nos statistiques de performance 2024 : Taux de résolution en première intervention : 87%, Temps moyen de résolution incident mineur : 2h30, Temps moyen de résolution incident majeur : 6h15, Satisfaction client moyenne : 4.8/5, Disponibilité de nos services : 99.94%, Ces performances sont garanties par notre équipe d'experts certifiés et nos outils de supervision avancés.",
      popular: false,
      tags: ["performance", "résolution", "statistiques"]
    },
    {
      category: "Services Généraux",
      question: "Gérez-vous aussi les licences logicielles ?",
      answer: "Oui, nous gérons l'ensemble de votre parc logiciel : Audit initial de vos licences existantes, Optimisation du nombre de licences selon l'usage réel, Négociation avec les éditeurs (tarifs préférentiels), Gestion des renouvellements automatiques, Suivi de conformité et audits éditeurs, Conseil sur les alternatives open-source quand pertinentes, Tableau de bord en temps réel de votre parc licences.",
      popular: false,
      tags: ["licences", "logiciels", "gestion"]
    }
  ];

  const filteredFaq = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "Tous" || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const popularQuestions = faqItems.filter(item => item.popular);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("Tous");
  };

  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Questions Fréquentes
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur nos services, 
            notre support technique et nos processus. Tout ce que vous devez savoir avant de nous confier votre IT.
          </p>
        </div>

        {/* Barre de recherche améliorée */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Rechercher une question... (ex: délais, tarifs, sécurité)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg"
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSearchTerm("")}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                ✕
              </Button>
            )}
          </div>
          {(searchTerm || selectedCategory !== "Tous") && (
            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                {filteredFaq.length} résultat(s) trouvé(s)
              </p>
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                <Filter className="w-4 h-4 mr-1" />
                Effacer les filtres
              </Button>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar améliorée */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Questions populaires */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <HelpCircle className="w-4 h-4 mr-2 text-primary" />
                  Questions populaires
                </h3>
                <div className="space-y-2">
                  {popularQuestions.slice(0, 4).map((item, index) => (
                    <button 
                      key={index} 
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory(item.category);
                        const itemIndex = faqItems.findIndex(faq => faq.question === item.question);
                        if (!openItems.includes(itemIndex)) {
                          toggleItem(itemIndex);
                        }
                      }}
                      className="text-left text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors line-clamp-2"
                    >
                      {item.question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Catégories */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Catégories</h3>
                <div className="space-y-2">
                  <button 
                    onClick={() => setSelectedCategory("Tous")}
                    className={`flex justify-between items-center w-full text-left p-2 rounded transition-colors ${
                      selectedCategory === "Tous" ? "bg-primary/10 text-primary" : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <span className="text-sm">Toutes les questions</span>
                    <Badge variant="outline">{faqItems.length}</Badge>
                  </button>
                  {faqCategories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <button 
                        key={index} 
                        onClick={() => setSelectedCategory(category.name)}
                        className={`flex justify-between items-center w-full text-left p-2 rounded transition-colors ${
                          selectedCategory === category.name ? "bg-primary/10 text-primary" : "hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <Icon className="w-4 h-4" />
                          <span className="text-sm">{category.name}</span>
                        </div>
                        <Badge className={`text-xs ${category.color}`}>{category.count}</Badge>
                      </button>
                    );
                  })}
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
                    Vous ne trouvez pas votre réponse ? Notre équipe support est là pour vous aider.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    01 85 76 28 93
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
            {filteredFaq.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Aucune question trouvée
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Essayez de modifier vos critères de recherche ou contactez notre support.
                </p>
                <Button onClick={clearFilters}>
                  Voir toutes les questions
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaq.map((item, index) => {
                  const originalIndex = faqItems.findIndex(faq => faq.question === item.question);
                  const isOpen = openItems.includes(originalIndex);
                  
                  return (
                    <Card key={originalIndex} className="transition-all duration-200 hover:shadow-md">
                      <CardHeader 
                        className="cursor-pointer"
                        onClick={() => toggleItem(originalIndex)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <Badge variant="outline">{item.category}</Badge>
                              {item.popular && <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">Populaire</Badge>}
                            </div>
                            <CardTitle className="text-left">{item.question}</CardTitle>
                          </div>
                          <Button variant="ghost" size="sm">
                            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </Button>
                        </div>
                      </CardHeader>
                      {isOpen && (
                        <CardContent className="pt-0">
                          <div className="prose prose-sm max-w-none text-gray-600 dark:text-gray-300">
                            {item.answer.split('\n').map((paragraph, pIndex) => (
                              <p key={pIndex} className="mb-3 last:mb-0">{paragraph}</p>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {item.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}