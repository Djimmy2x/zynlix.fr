import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navigateToPage = (path: string) => {
    window.location.href = path;
    setIsMenuOpen(false);
  };

  const navigateToHome = () => {
    // Si on est déjà sur la page d'accueil, on scroll vers le haut
    if (window.location.pathname === '/') {
      scrollToSection("accueil");
    } else {
      // Sinon on navigue vers la page d'accueil
      navigateToPage("/");
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={navigateToHome}
              className="flex items-center hover:opacity-80 transition-opacity duration-200"
              title="Retour à l'accueil"
            >
              <img
                src="./src/assets/logo.png"
                alt="Zynlix"
                className="h-8 w-8 filter brightness-0 dark:brightness-0 dark:invert"
              />
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Accueil
              </button>

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium">
                    Services
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => navigateToPage("/services")}>
                    Vue d'ensemble
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigateToPage("/services/infrastructure-cloud")}>
                    Infrastructure & Cloud
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigateToPage("/services/security-backup")}>
                    Sécurité & Sauvegarde
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigateToPage("/services/user-support")}>
                    Support Utilisateurs
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigateToPage("/services/network-telecom")}>
                    Réseau & Télécoms
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Entreprise Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium">
                    Entreprise
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => navigateToPage("/company/about")}>
                    À Propos
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigateToPage("/company/team")}>
                    Équipe
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigateToPage("/company/careers")}>
                    Carrières
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigateToPage("/company/news")}>
                    Actualités
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <button
                onClick={() => scrollToSection("references")}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Références
              </button>

              {/* Support Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium">
                    Support
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => navigateToPage("/support/contact")}>
                    Contact
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigateToPage("/support/documentation")}>
                    Documentation
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigateToPage("/support/faq")}>
                    FAQ
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigateToPage("/support/legal")}>
                    Mentions Légales
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <ThemeToggle />
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-accent transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("accueil")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("apropos")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              À Propos
            </button>
            <button
              onClick={() => scrollToSection("references")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              Références
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-primary"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
