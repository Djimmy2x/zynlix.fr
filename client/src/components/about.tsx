import { useState, useEffect, useRef } from "react";
import { DecorativeGif } from "@/components/ui/animated-background";

// Hook pour l'intersection observer
function useIntersectionObserver(threshold = 0.5) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// Hook pour l'animation des nombres
function useCountAnimation(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const startAnimation = () => {
    if (hasAnimated) return;
    setHasAnimated(true);
    
    const start = Date.now();
    const animate = () => {
      const now = Date.now();
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      
      // Fonction d'easing pour un effet plus naturel
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(target * easeOut * 100) / 100);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    animate();
  };

  return { count, startAnimation };
}

export default function About() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver(0.3);
  const { count: uptimeCount, startAnimation: startUptimeAnimation } = useCountAnimation(99.9, 2500);
  const { count: savingsCount, startAnimation: startSavingsAnimation } = useCountAnimation(30, 2000);

  useEffect(() => {
    if (isVisible) {
      // Délai légèrement différent pour chaque animation
      setTimeout(startUptimeAnimation, 200);
      setTimeout(startSavingsAnimation, 400);
    }
  }, [isVisible, startUptimeAnimation, startSavingsAnimation]);

  return (
    <section id="apropos" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Pourquoi choisir <span className="text-primary">Zynlix</span> ?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Forte de 15 années d'expérience, notre équipe d'experts accompagne plus de 500 entreprises 
              dans leur transformation digitale. Nous mettons notre expertise au service de votre réussite.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Années d'expertise</div>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Clients satisfaits</div>
              </div>
            </div>

            {/* Statistiques animées */}
            <div ref={sectionRef} className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">
                  {uptimeCount.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Disponibilité garantie</div>
                <div className="text-xs text-primary mt-1">SLA respecté</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg border border-secondary/20">
                <div className="text-4xl font-bold text-secondary mb-2">
                  -{Math.round(savingsCount)}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Réduction des coûts IT</div>
                <div className="text-xs text-secondary mt-1">En moyenne</div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                <span className="text-gray-700 dark:text-gray-300">Équipe certifiée et formée en permanence</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-secondary rounded-full mr-4"></div>
                <span className="text-gray-700 dark:text-gray-300">Support 24/7 avec des temps de réponse garantis</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                <span className="text-gray-700 dark:text-gray-300">Solutions sur-mesure adaptées à votre secteur</span>
              </div>
            </div>
          </div>
          
          <div className="relative flex flex-col items-center space-y-8">
            {/* GIF décoratif À Propos */}
            <DecorativeGif
              gifSrc="apropos.gif"
              alt="Animation représentant l'expertise Zynlix"
              size="large"
              className="mb-6"
            />
            
            <div className="w-full max-w-md">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Équipe Zynlix au travail"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              <div className="bg-primary/10 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">ISO 27001</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Certifié</div>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-secondary">GDPR</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Conforme</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
