interface WhatsAppMessage {
  to: string;
  message: string;
  propertyData?: {
    id: string;
    title: string;
    location: string;
    price: string;
    area: string;
    bedrooms: number;
    bathrooms: number;
  };
}

interface WhatsAppApiResponse {
  success: boolean;
  messageId?: string;
  error?: string;
}

class WhatsAppApiService {
  private baseUrl = 'https://nlgdpabuqiiqmarelntq.supabase.co/functions/v1/whatsapp-send';
  private apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sZ2RwYWJ1cWlpcW1hcmVsbnRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3NTEyNTMsImV4cCI6MjA3NDMyNzI1M30.3TleLzP2NN8dmxU24qZS6AEut39AzYXVUkYWyU6xeSQ';

  async sendMessage(data: WhatsAppMessage): Promise<WhatsAppApiResponse> {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
          'apikey': this.apiKey
        },
        body: JSON.stringify({
          phone: data.to,
          message: data.message,
          metadata: data.propertyData
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('WhatsApp API error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  async sendPropertyInquiry(propertyData: WhatsAppMessage['propertyData']): Promise<WhatsAppApiResponse> {
    const message = this.formatPropertyMessage(propertyData);
    return this.sendMessage({
      to: '+525560808129', // Updated phone number
      message,
      propertyData
    });
  }

  async sendGeneralInquiry(): Promise<WhatsAppApiResponse> {
    const message = "Hola Kira, quiero información sobre sus propiedades disponibles. ¿Podrían ayudarme?";
    return this.sendMessage({
      to: '+525560808129',
      message
    });
  }

  private formatPropertyMessage(propertyData?: WhatsAppMessage['propertyData']): string {
    if (!propertyData) {
      return "Hola Kira, quiero información sobre sus propiedades disponibles.";
    }

    return `Hola Kira, quiero info de: *${propertyData.title}*\n\n` +
           `📍 ${propertyData.location}\n` +
           `💰 ${propertyData.price}\n` +
           `📐 ${propertyData.area}\n` +
           `🛏️ ${propertyData.bedrooms} recámaras\n` +
           `🚿 ${propertyData.bathrooms} baños\n\n` +
           `¿Podrían darme más detalles?`;
  }

  // Fallback method for cases where API is not available
  openWhatsAppWeb(phone: string, message: string): void {
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}

export const whatsappApi = new WhatsAppApiService();
export type { WhatsAppMessage, WhatsAppApiResponse };