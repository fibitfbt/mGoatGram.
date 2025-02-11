
import { useCallback } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface WorldIDWidgetProps {
  onSuccess: () => void;
}

export const WorldIDWidget = ({ onSuccess }: WorldIDWidgetProps) => {
  const handleLogin = useCallback(async () => {
    try {
      // Redirect to World ID login
      const clientId = "app_0cb3ee4cf388a7d41c9401e1fe0b950a";
      const redirectUri = encodeURIComponent("https://visual-society-sharer.lovable.app/");
      const scope = encodeURIComponent("openid");
      const responseType = "code";
      const state = crypto.randomUUID();
      
      const url = `https://id.worldcoin.org/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&state=${state}`;
      
      window.location.href = url;
    } catch (error) {
      console.error("World ID login error:", error);
      toast.error("Failed to initialize World ID login");
    }
  }, [onSuccess]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <Button
        onClick={handleLogin}
        className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
      >
        Continue with World ID
      </Button>
      <p className="text-sm text-muted-foreground">
        Secure, private, and uniquely human.
      </p>
    </div>
  );
};
