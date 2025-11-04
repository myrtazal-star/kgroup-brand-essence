# 🎙️ Configuración del Agente de Voz con IA

Tu aplicación ahora incluye un **Agente Inteligente con control por voz** que puede:
- ✅ Analizar oportunidades de negocio en tiempo real
- ✅ Entender factores y necesidades de clientes
- ✅ Proporcionar recomendaciones personalizadas
- ✅ Operar completamente por comando de voz

## 📋 Requisitos Previos

Para activar el agente de voz, necesitas:

1. **API Key de OpenAI** (GPT-4o Realtime)
   - Ve a: https://platform.openai.com/api-keys
   - Crea una nueva API key
   - Copia el valor

## 🔧 Configuración en 3 Pasos

### Paso 1: Agregar el Secret en Supabase

1. Ve a tu proyecto en Lovable
2. Haz clic en el icono de **Cloud** (nube) en la barra superior
3. Selecciona **Edge Functions**
4. Haz clic en **Secrets**
5. Agrega un nuevo secret:
   - **Nombre:** `OPENAI_API_KEY`
   - **Valor:** Tu API key de OpenAI
6. Guarda

### Paso 2: Desplegar la Edge Function

La función `realtime-token` ya está creada en `supabase/functions/realtime-token/index.ts`.

**¡Importante!** La función se desplegará automáticamente en el próximo deploy de tu proyecto.

### Paso 3: Probar el Agente

1. Accede a la ruta `/voice-agent` en tu aplicación
2. Presiona el botón **"Iniciar Conversación"**
3. Acepta los permisos del micrófono
4. ¡Comienza a hablar!

## 🎯 Cómo Funciona el Agente

El agente está **preconfigurado** con conocimiento sobre:

### Contexto de Negocio
- Empresa: KGroup - Bienes Raíces Comerciales
- Especialización: Oficinas, locales y terrenos en CDMX
- Zonas: Polanco, Reforma-Anzures, Santa Fe, Del Valle, Roma-Condesa
- Cartera: 50+ propiedades premium

### Capacidades del Agente
1. **Análisis de Oportunidades:** Identifica tendencias del mercado inmobiliario
2. **Perfilado de Clientes:** Entiende necesidades específicas (presupuesto, ubicación, m², giro)
3. **Recomendaciones:** Sugiere propiedades ideales
4. **Insights de Mercado:** Compara zonas, precios, ventajas
5. **Mejora Continua:** Aprende de cada conversación

### Proceso de Consulta Automático
El agente guía al cliente a través de:
1. Saludo profesional
2. Identificación del tipo de espacio (oficina/local/terreno)
3. Determinación de operación (renta/venta) y presupuesto
4. Análisis del giro del negocio
5. Detección de prioridades
6. Recomendación de 2-3 opciones específicas
7. Oferta de agendar visita o contacto por WhatsApp

### Datos de Mercado Integrados
- **Rangos de renta por zona:**
  - Polanco: $450-850/m²
  - Reforma-Anzures: $400-750/m²
  - Santa Fe: $350-650/m²
  - Del Valle: $300-500/m²
  - Roma-Condesa: $350-600/m²

## 📱 Optimización Móvil

El diseño está **completamente optimizado** para dispositivos móviles:
- ✅ Interfaz responsiva adaptada a cualquier pantalla
- ✅ Controles táctiles amigables (mínimo 44px)
- ✅ Tipografía escalable automáticamente
- ✅ Gestión inteligente de permisos de micrófono
- ✅ Transcripción en tiempo real visible

## 🎨 Estética Ultra Premium

El agente mantiene la estética premium del sitio:
- Tipografía: Cormorant Garamond (títulos) + Inter (cuerpo)
- Colores minimalistas en blanco, negro y grises
- Efectos glass morphism sutiles
- Animaciones suaves y profesionales

## 🔒 Seguridad

- ✅ El API Key **nunca** se expone al cliente
- ✅ Tokens efímeros generados por Edge Function segura
- ✅ Comunicación cifrada vía WebRTC
- ✅ Sesiones temporales que expiran automáticamente

## 🐛 Troubleshooting

### El agente no se conecta
- Verifica que agregaste el `OPENAI_API_KEY` en Supabase Secrets
- Asegúrate de que tu API key tiene créditos disponibles
- Revisa la consola del navegador para errores

### No se escucha el audio
- Verifica que aceptaste los permisos del micrófono
- Comprueba que tu navegador soporta WebRTC (Chrome, Safari, Firefox)
- Intenta en modo incógnito para descartar extensiones

### La transcripción no aparece
- Es normal, algunas respuestas del agente son solo por voz
- La transcripción se actualiza progresivamente durante la conversación

## 📊 Monitoreo

Puedes monitorear el uso del agente en:
- OpenAI Dashboard: https://platform.openai.com/usage
- Supabase Edge Functions Logs (en tu proyecto Lovable)

## 💰 Costos

El agente usa OpenAI GPT-4o Realtime API:
- Precio: ~$0.06 por minuto de audio
- Facturado directamente por OpenAI
- No hay costos adicionales en Lovable/Supabase

## 🚀 Próximos Pasos

1. Personaliza el prompt del agente en `supabase/functions/realtime-token/index.ts`
2. Ajusta la voz cambiando el parámetro `voice` (opciones: alloy, ash, ballad, coral, echo, sage, shimmer, verse)
3. Modifica la temperatura para controlar creatividad (0.0-1.0)
4. Agrega herramientas (tools) personalizadas para acciones específicas

---

**¿Necesitas ayuda?** El agente está listo para ayudarte a convertir leads en ventas. 🎯
