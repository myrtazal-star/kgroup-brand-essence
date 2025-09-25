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
  private baseUrl = '/api/whatsapp'; // Your backend API endpoint
  private apiKey = import.meta.env.VITE_WHATSAPP_API_KEY || '';

  async sendMessage(data: WhatsAppMessage): Promise<WhatsAppApiResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
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
      to: '5256808129', // K Group phone number
      message,
      propertyData
    });
  }

  async sendGeneralInquiry(): Promise<WhatsAppApiResponse> {
    const message = "Hola! Me interesa obtener más información sobre sus propiedades disponibles. ¿Podrían ayudarme?";
    return this.sendMessage({
      to: '5256808129',
      message
    });
  }

  private formatPropertyMessage(propertyData?: WhatsAppMessage['propertyData']): string {
    if (!propertyData) {
      return "Hola! Me interesa obtener más información sobre sus propiedades disponibles. ¿Podrían ayudarme?";
    }

    return `Hola! Me interesa la propiedad: *${propertyData.title}*\n\n` +
           `📍 Ubicación: ${propertyData.location}\n` +
           `💰 Precio: ${propertyData.price}\n` +
           `📐 Área: ${propertyData.area}\n` +
           `🛏️ Recámaras: ${propertyData.bedrooms}\n` +
           `🚿 Baños: ${propertyData.bathrooms}\n\n` +
           `¿Podrían proporcionarme más información?`;
  }

  // Fallback method for cases where API is not available
  openWhatsAppWeb(phone: string, message: string): void {
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}

export const whatsappApi = new WhatsAppApiService();
export type { WhatsAppMessage, WhatsAppApiResponse };