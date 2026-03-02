import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const WHATSAPP_API = "https://graph.facebook.com/v21.0";

const SYSTEM_PROMPT = `Eres el asesor comercial digital de KGroup, una firma especializada en oficinas corporativas premium en Ciudad de México.

## Tu objetivo
1. Calificar al cliente.
2. Identificar si busca oficina para operar o para inversión.
3. Obtener presupuesto, zona y tamaño deseado.
4. Ofrecer opciones relevantes del inventario.
5. Invitar a agendar una reunión estratégica.

## Tono
- Profesional, corporativo, elegante.
- No informal, no emojis excesivos.
- Hablar como asesor de inversión, no como vendedor.
- Hacer preguntas claras y directas.
- No mostrar demasiadas opciones a la vez (máximo 2-3).
- Mantener sensación premium.
- Si el cliente está listo, dirigir a agendar reunión.

## Nunca
- Sonar desesperado.
- Dar demasiada información irrelevante.
- Usar lenguaje casual o coloquial.
- Inventar propiedades que no están en el inventario.

## Inventario actual de propiedades

### RENTA
1. Torre Porsche – Santa Fe, Piso 22 | 130 m² | $52,000/mes | Corporativo AAA
2. Ejercito Nacional – Polanco | 215 m² | $75,000/mes | Oficina amplia en zona premium
3. Homero, Polanco – Polanco | 150 m² | $45,000/mes | Ubicación estratégica
4. Ejercito Nacional II – Polanco | 70 m² | $40,000/mes | Espacio compacto
5. Ejercito Nacional III – Polanco | 170 m² | $60,000/mes | 5 privados
6. Av. Moliere – Polanco, Piso 5 | 288 m² | $58,000/mes | 4 baños
7. Av. Masaryk – Polanco | $85,000/mes | Sobre la avenida más exclusiva
8. Torre Vinkel – Monterrey, Piso 18 | 170 m² | $130,000/mes | Corporativo premier
9. Prol. Paseo de la Reforma – Reforma-Bosques, Piso 10 | $150,000/mes | Vista panorámica
10. Juárez – Col. Juárez, Piso 6 | 105 m² | $53,000/mes | Amueblada, 2 baños
11. Moliere / Bodega – Polanco | 247 m² | $140,000/mes | Uso mixto oficina/bodega
12. Patriotismo con Vistas – Condesa, Piso 7 | 120 m² | $42,000/mes | Vistas panorámicas
13. Patriotismo 77 – Condesa, Piso 8.5 | 77 m² | $27,000/mes
14. Lomas de Chapultepec – Lomas | $85,000/mes | Zona residencial premium

### VENTA
1. Be Grand Reforma – Tabacalera | 113 m² | $12,500,000 MXN
2. Torre Designo by Pininfarina – Bosque Real | 54–250 m² | Desde $5,306,436 MXN | Preventa
3. Prol. Paseo de la Reforma – Reforma-Bosques, Piso 10 | $22,000,000 MXN
4. Nauma Interlomas – Interlomas | Desde $5,306,436 MXN | Desarrollo residencial nuevo
5. Yama Pedregal – Pedregal, Piso 10 | 73.5 m² | $5,500,000 MXN

## Para agendar reunión
Cuando el cliente esté listo, invítalo a contactar directamente:
- WhatsApp: +52 55 6080 8129
- Mensaje: "Me gustaría agendar una reunión estratégica con un asesor de KGroup."

## Formato de respuesta
- Usa párrafos cortos y claros.
- Cuando presentes propiedades, usa formato estructurado.
- Siempre termina con una pregunta o siguiente paso claro.
- NO uses markdown (negritas, cursivas, etc.) ya que estás en WhatsApp y el formato no se renderiza igual.`;

// In-memory conversation store (per function invocation conversations reset)
// For production, use a database table
const conversations = new Map<string, Array<{ role: string; content: string }>>();

async function getAIResponse(userMessage: string, phoneNumber: string): Promise<string> {
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

  // Get or create conversation history
  let history = conversations.get(phoneNumber) || [];
  history.push({ role: "user", content: userMessage });

  // Keep last 20 messages to stay within token limits
  if (history.length > 20) {
    history = history.slice(-20);
  }

  const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openai/gpt-5-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...history,
      ],
      stream: false,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("AI gateway error:", response.status, text);
    throw new Error(`AI error: ${response.status}`);
  }

  const data = await response.json();
  const assistantMessage = data.choices?.[0]?.message?.content || "Disculpe, no pude procesar su consulta. Por favor, intente nuevamente.";

  history.push({ role: "assistant", content: assistantMessage });
  conversations.set(phoneNumber, history);

  return assistantMessage;
}

async function sendWhatsAppMessage(to: string, message: string) {
  const ACCESS_TOKEN = Deno.env.get("WHATSAPP_ACCESS_TOKEN");
  const PHONE_NUMBER_ID = Deno.env.get("WHATSAPP_PHONE_NUMBER_ID");

  if (!ACCESS_TOKEN) throw new Error("WHATSAPP_ACCESS_TOKEN is not configured");
  if (!PHONE_NUMBER_ID) throw new Error("WHATSAPP_PHONE_NUMBER_ID is not configured");

  // WhatsApp has a 4096 character limit per message
  const chunks: string[] = [];
  if (message.length > 4000) {
    const sentences = message.split(". ");
    let chunk = "";
    for (const sentence of sentences) {
      if ((chunk + sentence).length > 3900) {
        chunks.push(chunk.trim());
        chunk = "";
      }
      chunk += sentence + ". ";
    }
    if (chunk.trim()) chunks.push(chunk.trim());
  } else {
    chunks.push(message);
  }

  for (const chunk of chunks) {
    const resp = await fetch(`${WHATSAPP_API}/${PHONE_NUMBER_ID}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "text",
        text: { body: chunk },
      }),
    });

    if (!resp.ok) {
      const errorText = await resp.text();
      console.error(`WhatsApp send error [${resp.status}]:`, errorText);
      throw new Error(`WhatsApp API error: ${resp.status}`);
    } else {
      await resp.json(); // consume body
    }
  }
}

serve(async (req) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Webhook verification (GET) - Meta sends this when you register the webhook
  if (req.method === "GET") {
    const url = new URL(req.url);
    const mode = url.searchParams.get("hub.mode");
    const token = url.searchParams.get("hub.verify_token");
    const challenge = url.searchParams.get("hub.challenge");

    const VERIFY_TOKEN = Deno.env.get("WHATSAPP_VERIFY_TOKEN");

    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("Webhook verified successfully");
      return new Response(challenge, { status: 200, headers: corsHeaders });
    }

    return new Response("Forbidden", { status: 403, headers: corsHeaders });
  }

  // Incoming messages (POST)
  if (req.method === "POST") {
    try {
      const body = await req.json();

      // Meta sends various webhook events; we only care about messages
      const entry = body.entry?.[0];
      const changes = entry?.changes?.[0];
      const value = changes?.value;

      // Check if it's a message event
      if (value?.messages && value.messages.length > 0) {
        const message = value.messages[0];
        const from = message.from; // sender phone number
        const contactName = value.contacts?.[0]?.profile?.name || "Cliente";

        // Only handle text messages
        if (message.type === "text" && message.text?.body) {
          const userText = message.text.body;
          console.log(`Message from ${contactName} (${from}): ${userText}`);

          try {
            const aiResponse = await getAIResponse(userText, from);
            await sendWhatsAppMessage(from, aiResponse);
            console.log(`Reply sent to ${from}`);
          } catch (err) {
            console.error("Error processing message:", err);
            await sendWhatsAppMessage(
              from,
              "Disculpe, estamos experimentando dificultades técnicas. Por favor, contáctenos directamente al +52 55 6080 8129."
            ).catch((e) => console.error("Failed to send error message:", e));
          }
        }
      }

      // Always return 200 to Meta to acknowledge receipt
      return new Response(JSON.stringify({ status: "ok" }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error("Webhook error:", err);
      return new Response(JSON.stringify({ error: "Internal error" }), {
        status: 200, // Still return 200 so Meta doesn't retry
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  }

  return new Response("Method not allowed", { status: 405, headers: corsHeaders });
});
