import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ServerIPProps {
  ip: string;
}

const ServerIP = ({ ip }: ServerIPProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(ip);
      setCopied(true);
      toast.success("Server IP copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy IP");
    }
  };

  return (
    <div className="flex items-center gap-3 bg-muted/50 border border-primary/30 rounded-lg px-6 py-4 animate-pulse-glow">
      <span className="font-display text-xl md:text-2xl text-primary tracking-widest">
        {ip}
      </span>
      <Button
        variant="ghost"
        size="icon"
        onClick={copyToClipboard}
        className="text-primary hover:text-primary hover:bg-primary/20"
      >
        {copied ? (
          <Check className="h-5 w-5" />
        ) : (
          <Copy className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
};

export default ServerIP;
