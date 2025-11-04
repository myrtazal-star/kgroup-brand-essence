import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const whatsappURL = "https://wa.me/525560808129?text=Hola%2C%20quiero%20información%20sobre%20espacios%20comerciales%20en%20CDMX";

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <Button
        size="lg"
        className="rounded-full w-16 h-16 shadow-premium hover:shadow-refined transition-all hover:scale-105 bg-[#25D366] hover:bg-[#1ea952] text-white border-0"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-2 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        WhatsApp
      </span>
    </a>
  );
};
