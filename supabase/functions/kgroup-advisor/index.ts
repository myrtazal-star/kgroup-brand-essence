import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

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

## Estrategia por presupuesto
- Presupuesto alto: Enfatiza exclusividad y posicionamiento estratégico.
- Presupuesto bajo: Mantén trato profesional pero ofrece opciones eficientes.

## Nunca
- Sonar desesperado.
- Dar demasiada información irrelevante.
- Usar lenguaje casual o coloquial.
- Inventar propiedades que no están en el inventario.

## Inventario actual de propiedades

### RENTA

2. **Ejercito Nacional** – Polanco | 215 m² | $75,000/mes | Oficina amplia en zona premium
3. **Homero, Polanco** – Polanco | 150 m² | $45,000/mes | Ubicación estratégica
4. **Ejercito Nacional II** – Polanco | 70 m² | $40,000/mes | Espacio compacto y eficiente
5. **Ejercito Nacional III** – Polanco | 170 m² | $60,000/mes | 5 privados
6. **Av. Moliere** – Polanco, Piso 5 | 288 m² | $58,000/mes | 4 baños, gran superficie
7. **Av. Masaryk** – Polanco | Consultar superficie | $85,000/mes | Sobre la avenida más exclusiva
8. **Torre Vinkel** – Monterrey, Piso 18 | 170 m² | $130,000/mes | Corporativo de primer nivel
9. **Prol. Paseo de la Reforma** – Reforma-Bosques, Piso 10 | Consultar m² | $150,000/mes | Vista panorámica
10. **Juárez** – Col. Juárez, Piso 6 | 105 m² | $53,000/mes | Amueblada, 2 baños
11. **Moliere / Bodega** – Polanco | 247 m² | $140,000/mes | 5 baños, uso mixto oficina/bodega
12. **Patriotismo con Vistas** – Condesa, Piso 7 | 120 m² | $42,000/mes | 2 baños, 2 estacionamientos, vistas panorámicas
13. **Patriotismo 77** – Condesa, Piso 8.5 | 77 m² | $27,000/mes | 1 baño, 1 estacionamiento


### VENTA
1. **Be Grand Reforma** – Tabacalera | 113 m² | $12,500,000 MXN | Oficina corporativa
2. **Torre Designo by Pininfarina** – Bosque Real, Huixquilucan | 54–250 m² | Desde $5,306,436 MXN | Preventa, diseño italiano
3. **Prol. Paseo de la Reforma** – Reforma-Bosques, Piso 10 | Consultar m² | $22,000,000 MXN | Corporativo premium

5. **Yama Pedregal** – Pedregal, Piso 10 | 73.5 m² | $5,500,000 MXN | Obra gris, vistas panorámicas, 2 estacionamientos

## Para agendar reunión
Cuando el cliente esté listo, invítalo a contactar directamente:
- WhatsApp: +52 55 6080 8129
- Mensaje: "Me gustaría agendar una reunión estratégica con un asesor de KGroup."

## Formato de respuesta
- Usa párrafos cortos y claros.
- Cuando presentes propiedades, usa formato estructurado con nombre, zona, precio y característica principal.
- Siempre termina con una pregunta o siguiente paso claro.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-5-mini",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Demasiadas solicitudes. Intenta de nuevo en un momento." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Créditos insuficientes." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "Error del servicio de IA" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
