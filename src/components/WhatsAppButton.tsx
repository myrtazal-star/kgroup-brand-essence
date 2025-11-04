import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const whatsappURL = "https://wa.me/525560808129?text=Hola%20Kira%2C%20quiero%20un%20espacio%20comercial%20en%20CDMX";

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <Button
        size="lg"
        className="rounded-full w-16 h-16 shadow-glow hover:shadow-luxury transition-all hover:scale-110 bg-[#25D366] hover:bg-[#128C7E] text-white border-0 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <MessageCircle className="w-8 h-8 relative z-10" />
      </Button>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-premium">
        Contactar por WhatsApp
      </span>
    </a>
  );
};
