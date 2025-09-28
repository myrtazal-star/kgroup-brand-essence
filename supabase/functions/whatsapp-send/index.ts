import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

interface WhatsAppRequest {
  phone: string;
  message: string;
  metadata?: any;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { phone, message, metadata } = await req.json() as WhatsAppRequest;
    
    console.log('WhatsApp API request:', { phone, message, metadata });

    // Get secrets from environment
    const accessToken = Deno.env.get('WHATSAPP_ACCESS_TOKEN');
    const phoneNumberId = Deno.env.get('WHATSAPP_PHONE_NUMBER_ID');

    if (!accessToken || !phoneNumberId) {
      console.error('Missing WhatsApp credentials');
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'WhatsApp credentials not configured' 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Validate input
    if (!phone || !message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Phone number and message are required' 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Clean phone number (remove any + prefix for the API)
    const cleanPhone = phone.replace(/^\+/, '');

    // WhatsApp Business API endpoint
    const whatsappUrl = `https://graph.facebook.com/v17.0/${phoneNumberId}/messages`;

    const whatsappPayload = {
      messaging_product: "whatsapp",
      to: cleanPhone,
      type: "text",
      text: {
        body: message
      }
    };

    console.log('Sending to WhatsApp API:', whatsappPayload);

    const response = await fetch(whatsappUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(whatsappPayload),
    });

    const responseData = await response.json();
    console.log('WhatsApp API response:', responseData);

    if (!response.ok) {
      console.error('WhatsApp API error:', responseData);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: responseData.error?.message || 'Failed to send WhatsApp message',
          details: responseData
        }),
        { 
          status: response.status, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        messageId: responseData.messages?.[0]?.id || 'unknown'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error in whatsapp-send function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: errorMessage
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});