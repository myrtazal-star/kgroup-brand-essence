import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWhatsApp } from "@/hooks/useWhatsApp";

const WhatsAppFloat = () => {
  const { sendGeneralInquiry, isLoading } = useWhatsApp();
  
  const handleWhatsAppClick = async () => {
    await sendGeneralInquiry();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        disabled={isLoading}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse disabled:opacity-50"
        size="icon"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;