import Navigation from "@/components/Navigation";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Voting = () => {
  const votingSites = [
    {
      name: "Minecraft Server List",
      url: "#",
    },
    {
      name: "Planet Minecraft",
      url: "#",
    },
    {
      name: "Minecraft-MP",
      url: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Vote for <span className="text-primary text-glow">ZapKits</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Support our server by voting daily! You'll receive in-game rewards for each vote.
            </p>
          </div>

          <div className="max-w-md mx-auto space-y-4">
            {votingSites.map((site) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-between"
                >
                  {site.name}
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Voting;
