import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-mv-light-blue/30 border-b border-border/50">
        <div className="container mx-auto px-4 py-1">
          <div className="flex justify-between items-center text-xs">
            <div className="text-muted-foreground">
              Direkt zum Inhalt
            </div>
            <div className="flex gap-4 text-muted-foreground">
              <span>DE</span>
              <span>|</span>
              <span>EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-mv-blue text-white px-3 py-2 rounded font-bold text-xl">
              MV
            </div>
            <div className="bg-mv-teal text-white px-2 py-1 rounded text-sm font-medium">
              Natur
            </div>
            <div className="text-mv-blue font-light text-sm">
              tut gut.
            </div>
          </div>

          {/* Search */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Suchbegriff..."
                className="pl-3 pr-10 py-2 border border-input rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button
                size="sm"
                variant="ghost"
                className="absolute right-1 top-1/2 -translate-y-1/2 p-1 h-auto"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-mv-blue text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-8 py-3">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              🏠 Start
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              Nationalparks
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              Naturparks
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              Biosphärenreservate
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              Aktuelles
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              Service
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};