import { Suspense, lazy } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import TrustBadges from "@/components/trust-badges";
import Services from "@/components/services";

// Lazy loading des composants non critiques
const About = lazy(() => import("@/components/about"));
const ROICalculator = lazy(() => import("@/components/roi-calculator"));
const References = lazy(() => import("@/components/references"));
const Contact = lazy(() => import("@/components/contact"));
const Footer = lazy(() => import("@/components/footer"));

// Composant de fallback pour le lazy loading
function LazyFallback({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-pulse">
      <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-lg mb-8"></div>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      {/* Composants critiques - chargement immédiat */}
      <Navigation />
      <Hero />
      <TrustBadges />
      <Services />
      
      {/* Composants non critiques - lazy loading */}
      <Suspense fallback={<LazyFallback><div className="h-96"></div></LazyFallback>}>
        <About />
      </Suspense>
      
      <Suspense fallback={<LazyFallback><div className="h-64"></div></LazyFallback>}>
        <ROICalculator />
      </Suspense>
      
      <Suspense fallback={<LazyFallback><div className="h-96"></div></LazyFallback>}>
        <References />
      </Suspense>
      
      <Suspense fallback={<LazyFallback><div className="h-96"></div></LazyFallback>}>
        <Contact />
      </Suspense>
      
      <Suspense fallback={<div className="h-32 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
