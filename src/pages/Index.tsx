import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NatureParkCard } from "@/components/NatureParkCard";

const naturelandschaften = [
  {
    name: "Nationalpark Jasmund",
    type: "Nationalpark" as const,
    location: "Rügen",
    description: "Der kleinste Nationalpark Deutschlands beherbergt die berühmten Kreidefelsen und einen der letzten Urwälder Mitteleuropas. Die UNESCO-Welterbe Buchenwälder bilden eine einzigartige Kulisse.",
    highlights: [
      "Kreidefelsen mit Königsstuhl", 
      "Unesco-Welterbe Buchenwälder",
      "Stubnitz - alter Buchenwald",
      "Nationalpark-Zentrum Königsstuhl"
    ],
    area: "30 km²",
    established: "1990"
  },
  {
    name: "Nationalpark Vorpommersche Boddenlandschaft", 
    type: "Nationalpark" as const,
    location: "Fischland-Darß-Zingst",
    description: "Deutschlands größter Küstennationalpark vereint Ostseestrände, Lagunen und Dünenlandschaften. Ein Paradies für Zugvögel und seltene Meerestiere.",
    highlights: [
      "Kranichrastplätze im Herbst",
      "Weststrand Darß - wilder Ostseestrand", 
      "Boddengewässer mit reicher Vogelwelt",
      "Leuchtturm Darßer Ort"
    ],
    area: "786 km²",
    established: "1990"
  },
  {
    name: "Nationalpark Müritz",
    type: "Nationalpark" as const, 
    location: "Mecklenburgische Seenplatte",
    description: "Das Land der tausend Seen mit der größten Binnenwasserfläche Deutschlands. Unberührte Wälder, kristallklare Seen und eine vielfältige Tierwelt.",
    highlights: [
      "Müritz - größter Binnensee",
      "Seeadler und Fischadler", 
      "Alte Buchenwälder",
      "Müritzeum Waren"
    ],
    area: "322 km²",
    established: "1990"
  },
  {
    name: "Naturpark Sternberger Seenland",
    type: "Naturpark" as const,
    location: "Westmecklenburg", 
    description: "Eine von der Eiszeit geprägte Landschaft mit glasklaren Seen, sanften Hügeln und historischen Gutshöfen inmitten unberührter Natur.",
    highlights: [
      "Sternberger See mit klarstem Wasser",
      "Eiszeittäler und Endmoränen",
      "Historische Gutslandschaft", 
      "Wanderwege durch Buchenwälder"
    ],
    area: "537 km²",
    established: "1994"
  },
  {
    name: "Naturpark Feldberger Seenlandschaft",
    type: "Naturpark" as const,
    location: "Mecklenburgische Seeplatte",
    description: "Ein Mosaik aus über 50 Seen, Mooren und Wäldern. Die Heimat seltener Tiere wie Seeadler, Kranich und Biber in ungestörter Naturlandschaft.",
    highlights: [
      "Schmaler Luzin - tiefster See MVs",
      "Heilige Hallen - Buchenkathedrale",
      "Biber und Fischotter",
      "Hansestädte Neubrandenburg"
    ],
    area: "345 km²", 
    established: "1997"
  },
  {
    name: "Biosphärenreservat Schaalsee",
    type: "Biosphärenreservat" as const,
    location: "Westmecklenburg",
    description: "Ein grenzüberschreitendes Schutzgebiet mit dem Schaalsee als Herzstück. Hier verbinden sich Naturschutz und nachhaltige Regionalentwicklung.",
    highlights: [
      "Schaalsee - einer der tiefsten Norddeutschlands",
      "Grünes Band entlang ehemaliger Grenze",
      "Seltene Wasservögel und Amphibien", 
      "PAHLHUUS Biosphärenreservat"
    ],
    area: "309 km²",
    established: "2000"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <main id="naturlandschaften" className="bg-white">
        {/* Main content section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-mv-blue mb-4 border-b-2 border-mv-blue pb-2">
                  Naturlandschaften im Blick
                </h2>
                <p className="text-foreground leading-relaxed mb-6">
                  Von der rauen Schönheit der Kreidefelsen bis zu den stillen Wassern der Seenplatte – 
                  entdecken Sie sechs einzigartige Schutzgebiete, die das natürliche Erbe unseres Landes bewahren.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {naturelandschaften.slice(0, 4).map((park, index) => (
                  <NatureParkCard
                    key={index}
                    name={park.name}
                    type={park.type}
                    location={park.location}
                    description={park.description}
                    highlights={park.highlights}
                    area={park.area}
                    established={park.established}
                  />
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-mv-light-blue/20 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-mv-blue mb-4 border-b border-mv-blue/30 pb-2">
                  Unsere Themen
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded hover:bg-mv-light-blue/30 transition-colors cursor-pointer">
                    <div className="w-8 h-8 bg-mv-blue rounded flex items-center justify-center text-white text-sm">🏞️</div>
                    <span className="font-medium text-foreground">Nationalparks</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded hover:bg-mv-light-blue/30 transition-colors cursor-pointer">
                    <div className="w-8 h-8 bg-mv-teal rounded flex items-center justify-center text-white text-sm">🌲</div>
                    <span className="font-medium text-foreground">Naturparks</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded hover:bg-mv-light-blue/30 transition-colors cursor-pointer">
                    <div className="w-8 h-8 bg-mv-green rounded flex items-center justify-center text-white text-sm">🌊</div>
                    <span className="font-medium text-foreground">Biosphärenreservate</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-mv-blue mb-4">
                  Aktuelle Meldungen
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="border-b border-border/30 pb-3">
                    <h4 className="font-semibold text-foreground mb-1">Neue Wanderwege im Nationalpark Jasmund</h4>
                    <p className="text-muted-foreground">Entdecken Sie die neuen barrierefreien Wanderwege...</p>
                  </div>
                  <div className="border-b border-border/30 pb-3">
                    <h4 className="font-semibold text-foreground mb-1">Kranichbeobachtung in der Vorpommerschen Boddenlandschaft</h4>
                    <p className="text-muted-foreground">Die besten Plätze für die Kranichbeobachtung...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional nature areas */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-mv-blue mb-8 border-b-2 border-mv-blue pb-2">
              Weitere Schutzgebiete
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {naturelandschaften.slice(4).map((park, index) => (
                <NatureParkCard
                  key={index + 4}
                  name={park.name}
                  type={park.type}
                  location={park.location}
                  description={park.description}
                  highlights={park.highlights}
                  area={park.area}
                  established={park.established}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;