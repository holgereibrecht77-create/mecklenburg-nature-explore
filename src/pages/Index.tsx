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
      <Hero />
      
      <main className="py-16" id="naturlandschaften">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Unsere{" "}
              <span className="bg-gradient-to-r from-forest to-lake bg-clip-text text-transparent">
                Naturlandschaften
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Mecklenburg-Vorpommern beherbergt eine einzigartige Vielfalt geschützter Naturräume. 
              Von den Kreidefelsen Rügens bis zur Mecklenburgischen Seenplatte - 
              entdecken Sie die Schätze unserer Heimat.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {naturelandschaften.map((park, index) => (
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
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-forest/10 to-lake/10 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Nachhaltig Erleben
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Alle Naturlandschaften in Mecklenburg-Vorpommern laden zum verantwortungsvollen 
                Naturerlebnis ein. Respektieren Sie die Schutzbestimmungen und helfen Sie mit, 
                diese einzigartigen Lebensräume für zukünftige Generationen zu bewahren.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;