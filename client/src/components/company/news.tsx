import { Calendar, User, Tag, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function News() {
  const featuredNews = {
    title: "Zynlix Partenaire Officiel Microsoft Azure Expert MSP",
    excerpt: "Nous sommes fiers d'annoncer notre nouvelle certification Microsoft Azure Expert MSP, renforçant notre expertise cloud et notre capacité à accompagner nos clients dans leur transformation digitale.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    date: "15 janvier 2025",
    author: "Marc Dubois",
    category: "Partenariats",
    readTime: "3 min"
  };

  const newsArticles = [
    {
      title: "Nouvelle Offre de Cybersécurité : SOC as a Service",
      excerpt: "Lancement de notre nouveau service de centre opérationnel de sécurité (SOC) en mode SaaS pour les PME et ETI.",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      date: "10 janvier 2025",
      author: "Sophie Martin",
      category: "Produits",
      readTime: "4 min",
      tags: ["Cybersécurité", "SOC", "SaaS"]
    },
    {
      title: "Ouverture du Nouveau Bureau de Marseille",
      excerpt: "Expansion de Zynlix dans le Sud de la France avec l'ouverture d'un nouveau bureau pour mieux servir nos clients régionaux.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      date: "8 janvier 2025",
      author: "Pierre Legrand",
      category: "Entreprise",
      readTime: "2 min",
      tags: ["Expansion", "Bureau", "Marseille"]
    },
    {
      title: "Certification ISO 27001 Renouvelée avec Succès",
      excerpt: "Renouvellement de notre certification ISO 27001 : 2022, témoignant de notre engagement continu pour la sécurité de l'information.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      date: "20 décembre 2024",
      author: "Sophie Martin",
      category: "Certifications",
      readTime: "3 min",
      tags: ["ISO 27001", "Certification", "Sécurité"]
    },
    {
      title: "Retour sur le Salon IT Partners 2024",
      excerpt: "Bilan de notre participation au salon IT Partners : nouvelles rencontres, innovations présentées et perspectives 2025.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      date: "15 décembre 2024",
      author: "Marc Dubois",
      category: "Événements",
      readTime: "5 min",
      tags: ["Salon", "IT Partners", "Innovation"]
    },
    {
      title: "Guide : Migration Cloud, Les Bonnes Pratiques",
      excerpt: "Découvrez notre livre blanc sur les meilleures pratiques pour réussir votre migration vers le cloud en toute sécurité.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      date: "10 décembre 2024",
      author: "Thomas Rousseau",
      category: "Ressources",
      readTime: "8 min",
      tags: ["Cloud", "Migration", "Guide"]
    },
    {
      title: "Zynlix Rejoint le Cluster Digital Security",
      excerpt: "Adhésion au cluster Digital Security pour renforcer notre écosystème cybersécurité et développer de nouveaux partenariats.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      date: "1 décembre 2024",
      author: "Pierre Legrand",
      category: "Partenariats",
      readTime: "3 min",
      tags: ["Cluster", "Partenariats", "Cybersécurité"]
    }
  ];

  const categories = [
    { name: "Tous", count: 15 },
    { name: "Produits", count: 4 },
    { name: "Entreprise", count: 3 },
    { name: "Partenariats", count: 3 },
    { name: "Certifications", count: 2 },
    { name: "Événements", count: 2 },
    { name: "Ressources", count: 1 }
  ];

  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Actualités Zynlix
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Suivez l'actualité de Zynlix : nouveautés produits, partenariats, certifications, 
            événements et ressources techniques pour rester à la pointe de l'innovation IT.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar catégories */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 sticky top-20">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Catégories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button className="flex justify-between items-center w-full text-left text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                      <span>{category.name}</span>
                      <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">{category.count}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="lg:col-span-3">
            {/* Article à la une */}
            <Card className="mb-8 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <Badge className="mb-3">{featuredNews.category}</Badge>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {featuredNews.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {featuredNews.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{featuredNews.date}</span>
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{featuredNews.author}</span>
                    <span>{featuredNews.readTime} de lecture</span>
                  </div>
                  <Button>
                    Lire l'article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Autres articles */}
            <div className="grid md:grid-cols-2 gap-6">
              {newsArticles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-3 left-3">{article.category}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-3">{article.date}</span>
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-3">{article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Lire la suite
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <Button variant="outline" className="mr-4">
                ← Articles précédents
              </Button>
              <Button variant="outline">
                Articles suivants →
              </Button>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Restez Informé de Nos Actualités
          </h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Abonnez-vous à notre newsletter pour recevoir en avant-première nos dernières actualités, 
            guides techniques et invitations aux événements.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <Button 
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100 px-6 py-2 rounded-r-lg"
            >
              S'abonner
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}