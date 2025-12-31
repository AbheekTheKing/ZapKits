import { Box, Sparkles, Users, Zap, Gift, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServerIP from "@/components/ServerIP";
import FeatureCard from "@/components/FeatureCard";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const features = [
    {
      icon: Box,
      title: "Random Loot Boxes",
      description: "Open mystery boxes filled with rare items, powerful gear, and exclusive treasures you won't find anywhere else.",
    },
    {
      icon: Sparkles,
      title: "Unique Kits",
      description: "Discover randomized kits that give you an exciting advantage. Every kit is a new surprise!",
    },
    {
      icon: Users,
      title: "Active Community",
      description: "Join thousands of players in an engaging, friendly community with regular events and competitions.",
    },
    {
      icon: Zap,
      title: "No Lag Experience",
      description: "Enjoy smooth gameplay on our high-performance servers optimized for the best Minecraft experience.",
    },
    {
      icon: Gift,
      title: "Daily Rewards",
      description: "Log in daily to claim free rewards, bonus boxes, and exclusive items for loyal players.",
    },
    {
      icon: Shield,
      title: "Fair Play",
      description: "Our advanced anti-cheat system ensures everyone has a fair and fun experience on the server.",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        </div>

        {/* Animated Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full opacity-60 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Server Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/30 border border-primary/30 rounded-full text-sm text-primary font-display tracking-wider opacity-0 animate-fade-in">
              <Sparkles className="h-4 w-4" />
              <span>MINECRAFT RANDOM BOX SERVER</span>
            </div>

            {/* Main Title */}
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-glow opacity-0 animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              <span className="text-foreground">ZAP</span>
              <span className="text-primary">KITS</span>
            </h1>

            {/* Tagline */}
            <p 
              className="text-xl md:text-2xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              Unlock the mystery. Open random loot boxes packed with epic rewards. 
              Every box is a new adventure!
            </p>

            {/* Server IP */}
            <div 
              className="flex justify-center opacity-0 animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              <ServerIP ip="play.zapkits.net" />
            </div>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <Button variant="hero" size="xl">
                <Box className="h-5 w-5" />
                Join Now
              </Button>
              <Button variant="outline" size="xl">
                View Store
              </Button>
            </div>

            {/* Stats */}
            <div 
              className="grid grid-cols-3 gap-8 max-w-lg mx-auto pt-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "500ms" }}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary text-glow">
                  5K+
                </div>
                <div className="text-sm text-muted-foreground mt-1">Players</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-secondary text-glow-gold">
                  100+
                </div>
                <div className="text-sm text-muted-foreground mt-1">Unique Boxes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-accent">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground mt-1">Uptime</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Why Choose <span className="text-primary text-glow">ZapKits</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the ultimate random box Minecraft server with features designed for maximum fun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={100 * (index + 1)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10" />
        <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
              Ready to <span className="text-secondary text-glow-gold">Unbox</span> Your Destiny?
            </h2>
            <p className="text-muted-foreground text-lg">
              Join thousands of players already enjoying the thrill of random loot boxes. 
              Your next legendary item awaits!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl">
                <Gift className="h-5 w-5" />
                Start Playing Free
              </Button>
              <Button variant="outline" size="xl">
                Join Discord
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-display text-xl">
              <span className="text-foreground">ZAP</span>
              <span className="text-primary">KITS</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 ZapKits. Not affiliated with Mojang AB.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Store</a>
              <a href="#" className="hover:text-primary transition-colors">Rules</a>
              <a href="#" className="hover:text-primary transition-colors">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
