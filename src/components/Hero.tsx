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
    <section className="relative bg-mv-red text-white overflow-hidden">
      {/* Background pattern/image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Nationale Naturlandschaften
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 font-light opacity-90">
              Mecklenburg-Vorpommern
            </h2>
            <p className="text-lg mb-8 leading-relaxed opacity-90">
              Entdecken Sie die unberührte Schönheit der Nationalparks, Naturparks und 
              Biosphärenreservate in Deutschlands Nordosten. Erleben Sie einzigartige 
              Landschaften zwischen Ostsee und Seenplatte.
            </p>
            
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-3 text-lg bg-white text-mv-red hover:bg-white/90"
              onClick={scrollToContent}
            >
              mehr zu den Naturlandschaften →
            </Button>
          </div>
        </div>
        
        {/* Additional info or image on the right side could go here */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="w-96 h-64 bg-white/10 backdrop-blur-sm rounded-lg"></div>
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