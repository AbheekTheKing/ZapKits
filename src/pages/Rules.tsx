import { Shield, MessageSquare, Gamepad2, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import zapkitsLogo from "@/assets/zapkits-logo.png";
import { Link } from "react-router-dom";

const Rules = () => {
  const discordRules = [
    { title: "Respect Everyone", description: "Treat all members with kindness and dignity. Bullying, harassment, or disrespectful behavior will not be tolerated." },
    { title: "Use Appropriate Language", description: "Limit profanity and avoid offensive language. Derogatory remarks are strictly prohibited. Casual swearing is permitted in designated channels, but keep all other channels clean." },
    { title: "Avoid Spamming", description: "Do not clutter the chat with rapid or repetitive messages. Keep your messages meaningful and at least 5 words long to maintain a smooth flow of conversation." },
    { title: "No NSFW Content", description: "This is a safe and welcoming space. Sharing adult, obscene, or any NSFW material is strictly forbidden." },
    { title: "No Unapproved Advertising", description: "Invasive promotions, whether for other servers, streams, or products, are not allowed. Relevant and valuable content may be shared in designated media channels." },
    { title: "Keep Names and Avatars Appropriate", description: "Your username and profile picture must adhere to community standards of appropriateness." },
    { title: "No Raiding", description: "Organizing or participating in server raids is against Discord's Terms of Service and will result in immediate removal." },
    { title: "No Threatening Behavior", description: "Threats of any kind will not be tolerated under any circumstances." },
    { title: "Respect Privacy", description: "Do not ask for or share personal information. Sending unsolicited direct messages (DMs) is also prohibited." },
    { title: "No Exploiting Vulnerabilities", description: "The abuse of bugs, glitches, or other exploits is forbidden. Report any issues to the admins immediately. Exploiters will face strict penalties, including bans." },
    { title: "Adhere to Discord's Terms of Service", description: "All members must comply with Discord's Terms of Service and Community Guidelines. Breaches will lead to severe consequences." },
  ];

  const gameplayRules = [
    { title: "No Cheating or Hacking", description: "Using unauthorized clients, modifications, or exploits will result in a permanent ban." },
    { title: "Anti-Cheat Compliance", description: "Refusing a request from staff to share your screen will lead to an immediate ban." },
    { title: "Fair Play", description: "No spawn killing is allowed; give players time to gear up before engaging in combat." },
    { title: "EULA Compliance", description: "All players must adhere to Minecraft's End User License Agreement." },
  ];

  const communityRules = [
    { title: "Keep Chat Clean", description: "Do not spam commands or messages in any chat channels." },
    { title: "Respectful Language", description: "Slurs, offensive language, and NSFW content are strictly prohibited." },
    { title: "Zero Tolerance Policy", description: "Racism, discrimination, hate speech, and harassment based on race, religion, gender, or identity will result in immediate action." },
    { title: "No Advertising", description: "Promoting other servers or products is not allowed." },
    { title: "Protect Privacy", description: "Doxxing or sharing personal information is forbidden and will lead to severe consequences." },
    { title: "No Threats", description: "Threatening other players or staff members will not be tolerated." },
  ];

  const staffRules = [
    { title: "Respect Authority", description: "Listen to and cooperate with staff members who are working to maintain a safe environment." },
    { title: "Professional Conduct", description: "Disrespecting or harassing staff is unacceptable." },
    { title: "Safe Links Only", description: "Sharing malicious or harmful links is prohibited." },
  ];

  const generalRules = [
    { title: "Use Common Sense", description: "If something feels wrong or questionable, don't do it." },
    { title: "Know the Rules", description: "Ignorance of these guidelines is not an excuse; you are expected to follow them at all times." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/30 border border-primary/30 rounded-full text-sm text-primary font-display tracking-wider mb-6">
            <Shield className="h-4 w-4" />
            <span>COMMUNITY GUIDELINES</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
            Server <span className="text-primary text-glow">Rules</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Please read and follow these rules to ensure a safe and enjoyable experience for everyone.
          </p>
        </div>
      </section>

      {/* Discord Rules */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="h-8 w-8 text-primary" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Discord Rules
            </h2>
          </div>
          <div className="grid gap-4">
            {discordRules.map((rule, index) => (
              <Card key={index} variant="feature" className="border-border/50">
                <CardContent className="p-4 flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{rule.title}</h3>
                    <p className="text-muted-foreground text-sm">{rule.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Minecraft Rules */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Gamepad2 className="h-8 w-8 text-secondary" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Minecraft Rules
            </h2>
          </div>

          {/* Gameplay Standards */}
          <div className="mb-8">
            <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Gameplay Standards
            </h3>
            <div className="grid gap-4">
              {gameplayRules.map((rule, index) => (
                <Card key={index} variant="feature" className="border-border/50">
                  <CardContent className="p-4 flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">{rule.title}</h3>
                      <p className="text-muted-foreground text-sm">{rule.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Community Conduct */}
          <div className="mb-8">
            <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Community Conduct
            </h3>
            <div className="grid gap-4">
              {communityRules.map((rule, index) => (
                <Card key={index} variant="feature" className="border-border/50">
                  <CardContent className="p-4 flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">{rule.title}</h3>
                      <p className="text-muted-foreground text-sm">{rule.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Staff Relations */}
          <div className="mb-8">
            <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Staff Relations
            </h3>
            <div className="grid gap-4">
              {staffRules.map((rule, index) => (
                <Card key={index} variant="feature" className="border-border/50">
                  <CardContent className="p-4 flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">{rule.title}</h3>
                      <p className="text-muted-foreground text-sm">{rule.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* General Expectations */}
          <div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              General Expectations
            </h3>
            <div className="grid gap-4">
              {generalRules.map((rule, index) => (
                <Card key={index} variant="feature" className="border-border/50">
                  <CardContent className="p-4 flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">{rule.title}</h3>
                      <p className="text-muted-foreground text-sm">{rule.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <img src={zapkitsLogo} alt="ZapKits" className="h-8" />
            <p className="text-muted-foreground text-sm">
              © 2024 ZapKits. Not affiliated with Mojang AB.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="https://zapkitsmc.tebex.io/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Store</a>
              <Link to="/rules" className="hover:text-primary transition-colors">Rules</Link>
              <a href="https://discord.gg/pfZ6VT6Rjj" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Rules;
