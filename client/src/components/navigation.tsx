import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">TechnoGarde</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("apropos")}
                className="text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                À Propos
              </button>
              <button
                onClick={() => scrollToSection("references")}
                className="text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Références
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-accent transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("accueil")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("apropos")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
            >
              À Propos
            </button>
            <button
              onClick={() => scrollToSection("references")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
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
