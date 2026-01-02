import { Link, useLocation } from "react-router-dom";
import zapkitsLogo from "@/assets/zapkits-logo.png";

const Navigation = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Store", path: "https://zapkitsmc.tebex.io/", external: true },
    { name: "Rules", path: "/rules" },
    { name: "Voting", path: "/voting" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={zapkitsLogo} alt="ZapKits" className="h-8" />
          </Link>

          <nav className="flex items-center gap-8">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
