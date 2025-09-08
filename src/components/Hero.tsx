import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-mecklenburg-vorpommern.jpg";

export const Hero = () => {
  const scrollToContent = () => {
    document.getElementById('naturlandschaften')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Nationale{" "}
          <span className="bg-gradient-to-r from-nature to-lake-light bg-clip-text text-transparent">
            Naturlandschaften
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl text-white/90 mb-8 font-light">
          Mecklenburg-Vorpommern
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Entdecken Sie die unberührte Schönheit der Nationalparks, Naturparks und 
          Biosphärenreservate in Deutschlands Nordosten
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="hero"
            className="px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            onClick={scrollToContent}
          >
            Naturlandschaften entdecken
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="sm"
          className="text-white/70 hover:text-white p-2"
          onClick={scrollToContent}
        >
          <ArrowDown className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};