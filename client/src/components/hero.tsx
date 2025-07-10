import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="bg-gradient-to-br from-[hsl(var(--light-blue))] to-white dark:from-gray-800 dark:to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Votre Partenaire de{" "}
              <span className="text-primary">Confiance</span> en Infogérance
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Nous gérons votre infrastructure IT pour que vous puissiez vous concentrer sur votre cœur de métier. Solutions sécurisées, innovantes et fiables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("services")}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-all duration-200 hover:scale-105"
              >
                Découvrir nos services
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200"
              >
                Demander un devis
              </Button>
            </div>
            <div className="mt-12 flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Support technique</div>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in-scale">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern IT office workspace"
              className="rounded-xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
