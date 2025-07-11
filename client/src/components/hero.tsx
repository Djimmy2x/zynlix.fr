import { Button } from "./simple-button";

export default function Hero() {
  return (
    <section id="accueil" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Votre Partenaire
            <span className="text-blue-600 dark:text-blue-400"> Informatique</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Zynlix vous accompagne dans la transformation numérique de votre entreprise avec des solutions d'infogérance sur mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => {
                const element = document.getElementById("services");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Découvrir nos services
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Contactez-nous
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">500+</div>
            <div className="text-gray-600 dark:text-gray-300">Clients satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">99.9%</div>
            <div className="text-gray-600 dark:text-gray-300">Disponibilité</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
            <div className="text-gray-600 dark:text-gray-300">Support technique</div>
          </div>
        </div>
      </div>
    </section>
  );
}
