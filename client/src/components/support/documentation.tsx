import { Book, Download, Search, Video, FileText, Code, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function Documentation() {
  const docCategories = [
    {
      icon: Book,
      title: "Guides Utilisateur",
      description: "Documentation complète pour utiliser nos services",
      count: 25,
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Code,
      title: "API & Intégrations",
      description: "Documentation technique pour développeurs",
      count: 12,
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: Shield,
      title: "Sécurité & Conformité",
      description: "Procédures et politiques de sécurité",
      count: 18,
      color: "text-red-600 dark:text-red-400"
    },
    {
      icon: Video,
      title: "Tutoriels Vidéo",
      description: "Formations pas-à-pas en vidéo",
      count: 35,
      color: "text-purple-600 dark:text-purple-400"
    }
  ];

  const popularDocs = [
    {
      title: "Guide de Migration Cloud AWS",
      description: "Processus complet de migration vers AWS avec checklist et bonnes pratiques",
      category: "Guides Utilisateur",
      downloads: 1250,
      lastUpdated: "15 janvier 2025",
      format: "PDF",
      pages: 45
    },
    {
      title: "Configuration Office 365",
      description: "Installation et configuration d'Office 365 pour votre entreprise",
      category: "Guides Utilisateur",
      downloads: 980,
      lastUpdated: "12 janvier 2025",
      format: "PDF",
      pages: 28
    },
    {
      title: "API Monitoring - Documentation Technique",
      description: "Documentation complète de notre API de monitoring avec exemples de code",
      category: "API & Intégrations",
      downloads: 750,
      lastUpdated: "10 janvier 2025",
      format: "HTML",
      pages: 0
    },
    {
      title: "Politique de Sécurité RGPD",
      description: "Procédures de conformité RGPD et protection des données personnelles",
      category: "Sécurité & Conformité",
      downloads: 650,
      lastUpdated: "8 janvier 2025",
      format: "PDF",
      pages: 22
    },
    {
      title: "Sauvegarde et Restauration",
      description: "Procédures de sauvegarde automatisée et restauration d'urgence",
      category: "Guides Utilisateur",
      downloads: 890,
      lastUpdated: "5 janvier 2025",
      format: "PDF",
      pages: 32
    },
    {
      title: "Configuration VPN Site-to-Site",
      description: "Guide de configuration VPN pour connexions sécurisées inter-sites",
      category: "Guides Utilisateur",
      downloads: 420,
      lastUpdated: "3 janvier 2025",
      format: "PDF",
      pages: 18
    }
  ];

  const videoTutorials = [
    {
      title: "Introduction à Azure Active Directory",
      duration: "12:35",
      views: 2150,
      category: "Débutant"
    },
    {
      title: "Configuration Firewall Fortinet",
      duration: "18:42",
      views: 1890,
      category: "Avancé"
    },
    {
      title: "Monitoring avec Zabbix",
      duration: "15:20",
      views: 1650,
      category: "Intermédiaire"
    },
    {
      title: "Déploiement Kubernetes",
      duration: "25:15",
      views: 1200,
      category: "Expert"
    }
  ];

  const quickLinks = [
    "Premiers pas avec nos services",
    "Configuration compte utilisateur", 
    "Procédures d'urgence",
    "Contacts support technique",
    "Formulaires de demande",
    "Planification maintenance"
  ];

  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Documentation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Accédez à toute la documentation technique, guides utilisateur et ressources 
            pour tirer le meilleur parti de nos services IT.
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Rechercher dans la documentation..."
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
                <div className="space-y-3">
                  {docCategories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <button key={index} className="flex items-center space-x-3 w-full text-left p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <Icon className={`w-5 h-5 ${category.color}`} />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{category.title}</div>
                          <div className="text-xs text-gray-500">{category.count} documents</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Liens rapides */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Liens Rapides</h3>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <button className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="lg:col-span-3">
            {/* Documents populaires */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Documents Populaires
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {popularDocs.map((doc, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{doc.title}</CardTitle>
                          <CardDescription className="text-sm">{doc.description}</CardDescription>
                        </div>
                        <Badge variant="outline" className="text-xs">{doc.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center space-x-4">
                          <span>{doc.downloads} téléchargements</span>
                          <span>{doc.format}</span>
                          {doc.pages > 0 && <span>{doc.pages} pages</span>}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mb-3">
                        Mis à jour le {doc.lastUpdated}
                      </div>
                      <Button size="sm" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Télécharger
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Tutoriels vidéo */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Tutoriels Vidéo Récents
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {videoTutorials.map((video, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 h-32 flex items-center justify-center">
                        <Video className="w-12 h-12 text-primary" />
                      </div>
                      <Badge className="absolute top-2 right-2">{video.category}</Badge>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                        {video.duration}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{video.title}</h3>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{video.views} vues</span>
                        <Button size="sm" variant="outline">
                          Regarder
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Centre d'aide */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Besoin d'Aide Supplémentaire ?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Vous ne trouvez pas l'information recherchée ? Nos experts sont là pour vous aider. 
                Contactez notre support technique ou consultez notre FAQ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Users className="w-4 h-4 mr-2" />
                  Contacter le Support
                </Button>
                <Button size="lg" variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Consulter la FAQ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}