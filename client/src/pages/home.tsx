import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import TrustBadges from "@/components/trust-badges";
import Services from "@/components/services";
import About from "@/components/about";
import References from "@/components/references";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <Navigation />
      <Hero />
      <TrustBadges />
      <Services />
      <About />
      <References />
      <Contact />
      <Footer />
    </div>
  );
}
