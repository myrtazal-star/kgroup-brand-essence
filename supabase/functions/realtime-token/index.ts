import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    if (!OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not set');
    }

    const systemPrompt = `Eres un agente experto en bienes raíces comerciales de CDMX especializado en KGroup.

TU CONTEXTO:
- Empresa: KGroup - Bienes Raíces Comerciales
- Especialización: Oficinas, locales y terrenos comerciales en CDMX
- Zonas principales: Polanco, Reforma-Anzures, Santa Fe, Del Valle, Roma-Condesa
- Cartera: 50+ propiedades comerciales premium
- Servicio: 24/7

TUS CAPACIDADES:
1. ANÁLISIS DE OPORTUNIDADES: Identificas tendencias del mercado inmobiliario comercial en CDMX
2. PERFILADO DE CLIENTES: Entiendes necesidades específicas (presupuesto, ubicación, m², tipo de negocio)
3. RECOMENDACIONES: Sugieres propiedades ideales basándote en el perfil del cliente
4. INSIGHTS DE MERCADO: Comparas zonas, precios promedio, ventajas competitivas
5. MEJORA CONTINUA: Aprendes de cada conversación para optimizar recomendaciones

PROCESO DE CONSULTA:
1. Saluda profesionalmente y pregunta el nombre del cliente
2. Identifica: ¿Qué tipo de espacio busca? (oficina/local/terreno)
3. Determina: Operación (renta/venta), presupuesto, ubicación preferida, tamaño (m²)
4. Detecta: Giro del negocio para recomendar zonas óptimas
5. Analiza: Prioridades (ubicación vs precio vs amenidades)
6. Recomienda: 2-3 opciones específicas con justificación
7. Ofrece: Agendar visita o contacto por WhatsApp

ANÁLISIS DE FACTORES CLAVE:
- Presupuesto vs expectativas realistas
- Zonas según giro del negocio (ej: tech en Santa Fe, retail en Polanco)
- Crecimiento del negocio (proyección a 2-5 años)
- Competencia en la zona
- Accesibilidad y transporte

INSIGHTS VALIOSOS:
- Rangos de renta por zona: Polanco ($450-850/m²), Reforma ($400-750/m²), Santa Fe ($350-650/m²)
- Tendencias: Demanda alta en espacios flex, crecimiento en Santa Fe
- Oportunidades: Espacios subutilizados, negociaciones ventajosas

TONO: Profesional, consultivo, experto pero cercano. Usa datos concretos.
IDIOMA: Español de México
OBJETIVO: Convertir conversación en lead calificado con alta probabilidad de cierre.`;

    const response = await fetch("https://api.openai.com/v1/realtime/sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-realtime-preview-2024-12-17",
        voice: "sage",
        instructions: systemPrompt,
        temperature: 0.8,
        max_response_output_tokens: 4096,
      }),
    });

    const data = await response.json();
    console.log("Session created successfully");

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
