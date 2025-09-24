import { useState } from 'react';
import { whatsappApi, type WhatsAppMessage } from '@/services/whatsappApi';
import { useToast } from '@/hooks/use-toast';

interface UseWhatsAppOptions {
  fallbackToWeb?: boolean;
}

export const useWhatsApp = ({ fallbackToWeb = true }: UseWhatsAppOptions = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sendPropertyInquiry = async (propertyData: WhatsAppMessage['propertyData']) => {
    setIsLoading(true);
    
    try {
      const result = await whatsappApi.sendPropertyInquiry(propertyData);
      
      if (result.success) {
        toast({
          title: "Mensaje enviado",
          description: "Tu consulta ha sido enviada exitosamente. Te contactaremos pronto.",
        });
        return true;
      } else {
        throw new Error(result.error || 'Error al enviar mensaje');
      }
    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
      
      if (fallbackToWeb && propertyData) {
        // Fallback to web WhatsApp
        const message = `Hola! Me interesa la propiedad: *${propertyData.title}*\n\n` +
                       `📍 ${propertyData.location}\n` +
                       `💰 ${propertyData.price}\n` +
                       `📐 ${propertyData.area}\n` +
                       `🛏️ ${propertyData.bedrooms} recámaras\n` +
                       `🚿 ${propertyData.bathrooms} baños\n\n` +
                       `¿Podrían proporcionarme más información?`;
        
        whatsappApi.openWhatsAppWeb('5256808129', message);
        
        toast({
          title: "Redirigiendo a WhatsApp",
          description: "Se abrirá WhatsApp Web con tu mensaje preparado.",
        });
        return true;
      } else {
        toast({
          title: "Error al enviar mensaje",
          description: "No se pudo enviar el mensaje. Por favor intenta nuevamente.",
          variant: "destructive",
        });
        return false;
      }
    } finally {
      setIsLoading(false);
    }
  };

  const sendGeneralInquiry = async () => {
    setIsLoading(true);
    
    try {
      const result = await whatsappApi.sendGeneralInquiry();
      
      if (result.success) {
        toast({
          title: "Mensaje enviado",
          description: "Tu consulta ha sido enviada exitosamente. Te contactaremos pronto.",
        });
        return true;
      } else {
        throw new Error(result.error || 'Error al enviar mensaje');
      }
    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
      
      if (fallbackToWeb) {
        // Fallback to web WhatsApp
        const message = "Hola! Me interesa obtener más información sobre sus propiedades disponibles. ¿Podrían ayudarme?";
        whatsappApi.openWhatsAppWeb('5256808129', message);
        
        toast({
          title: "Redirigiendo a WhatsApp",
          description: "Se abrirá WhatsApp Web con tu mensaje preparado.",
        });
        return true;
      } else {
        toast({
          title: "Error al enviar mensaje",
          description: "No se pudo enviar el mensaje. Por favor intenta nuevamente.",
          variant: "destructive",
        });
        return false;
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendPropertyInquiry,
    sendGeneralInquiry,
    isLoading
  };
};