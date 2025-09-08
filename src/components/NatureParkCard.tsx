import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Trees, Waves } from "lucide-react";

interface NatureParkCardProps {
  name: string;
  type: "Nationalpark" | "Naturpark" | "Biosphärenreservat";
  location: string;
  description: string;
  highlights: string[];
  area: string;
  established: string;
}

const typeIcons = {
  "Nationalpark": Trees,
  "Naturpark": MapPin,
  "Biosphärenreservat": Waves,
};

const typeColors = {
  "Nationalpark": "bg-mv-green text-primary-foreground",
  "Naturpark": "bg-mv-blue text-primary-foreground", 
  "Biosphärenreservat": "bg-mv-teal text-primary-foreground",
};

export const NatureParkCard = ({ 
  name, 
  type, 
  location, 
  description, 
  highlights, 
  area, 
  established 
}: NatureParkCardProps) => {
  const Icon = typeIcons[type];
  
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-white">
      <CardHeader className="pb-3 border-b border-border/30">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-bold text-foreground mb-2 group-hover:text-mv-blue transition-colors">
              {name}
            </CardTitle>
            <div className="flex items-center gap-2 mb-2">
              <Icon className="w-4 h-4 text-mv-blue" />
              <Badge className={typeColors[type]} variant="secondary">
                {type}
              </Badge>
            </div>
            <CardDescription className="text-muted-foreground flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {location}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-4">
        <p className="text-sm text-foreground/80 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-mv-blue text-sm">Besondere Highlights:</h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-mv-teal font-bold">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex justify-between text-xs text-muted-foreground pt-3 border-t border-border/30">
          <span className="font-medium">Fläche: {area}</span>
          <span className="font-medium">Gegründet: {established}</span>
        </div>
      </CardContent>
    </Card>
  );
};