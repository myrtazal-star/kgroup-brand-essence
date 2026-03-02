import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const whatsappURL = "https://wa.me/525560808129?text=Hola%2C%20quiero%20información%20sobre%20propiedades%20premium%20en%20CDMX";

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 group"
    >
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_hsl(40,45%,56%,0.1)]">
        <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
      </div>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-secondary border border-border text-foreground px-3 py-2 rounded text-xs tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ fontFamily: "'Inter', sans-serif" }}>
        WhatsApp
      </span>
    </a>
  );
};
