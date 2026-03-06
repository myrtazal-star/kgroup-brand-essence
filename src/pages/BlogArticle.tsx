import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KGroupLogo } from "@/components/KGroupLogo";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import { GoldDivider } from "@/components/GoldDivider";

import blogInversionCdmx from "@/assets/blog-inversion-cdmx.jpg";
import blogZonasCdmx from "@/assets/blog-zonas-cdmx.jpg";
import blogComprarVsRentar from "@/assets/blog-comprar-vs-rentar.jpg";
import blogPolanco from "@/assets/blog-polanco.jpg";
import blogInterlomas from "@/assets/blog-interlomas.jpg";

const articlesData: Record<string, { title: string; image: string; content: string[] }> = {
  "como-invertir-bienes-raices-cdmx": {
    title: "Cómo invertir en bienes raíces en Ciudad de México",
    image: blogInversionCdmx,
    content: [
      "Ciudad de México se ha consolidado como uno de los mercados inmobiliarios más dinámicos y rentables de América Latina. Con una demanda creciente de espacios corporativos, comerciales e industriales, la capital mexicana ofrece oportunidades excepcionales para inversionistas que buscan rendimientos sólidos y plusvalía a largo plazo.",
      "El primer paso para invertir en bienes raíces en CDMX es definir tu estrategia: ¿buscas ingresos por renta mensual, plusvalía por revalorización del inmueble, o una combinación de ambos? Las zonas premium como Polanco, Reforma, Lomas de Chapultepec y Santa Fe ofrecen los rendimientos más estables, con tasas de capitalización que oscilan entre el 6% y el 9% anual.",
      "Una de las ventajas más significativas del mercado inmobiliario en CDMX es su resiliencia. A diferencia de otros activos financieros, los bienes raíces en zonas consolidadas mantienen su valor incluso en periodos de incertidumbre económica. Además, la demanda de oficinas corporativas y espacios comerciales sigue en aumento, impulsada por el nearshoring y la llegada de empresas internacionales.",
      "Para maximizar tu inversión, es fundamental contar con asesoría especializada que te permita identificar las mejores oportunidades, negociar condiciones favorables y estructurar la operación de manera eficiente desde el punto de vista fiscal y legal.",
      "En KGroup, analizamos cada oportunidad con un enfoque integral: ubicación estratégica, potencial de plusvalía, perfil de inquilinos y condiciones del mercado. Nuestro objetivo es que cada inversión genere valor real y sostenible para nuestros clientes.",
      "Factores clave a considerar antes de invertir:",
      "• Ubicación y conectividad: Zonas con acceso a transporte, servicios y vías principales tienen mayor demanda y plusvalía.",
      "• Tipo de inmueble: Oficinas corporativas, locales comerciales y espacios industriales tienen dinámicas de mercado diferentes.",
      "• Marco legal: Asegúrate de que la propiedad cuente con toda la documentación en regla y que la operación esté protegida legalmente.",
      "• Análisis financiero: Evalúa el retorno de inversión esperado, costos de mantenimiento y potencial de revalorización.",
      "• Tendencias del mercado: El nearshoring, la digitalización y los cambios en modelos de trabajo están redefiniendo la demanda inmobiliaria en CDMX.",
    ],
  },
  "mejores-zonas-invertir-cdmx": {
    title: "Mejores zonas para invertir en CDMX",
    image: blogZonasCdmx,
    content: [
      "Ciudad de México cuenta con diversas zonas que ofrecen excelentes oportunidades de inversión inmobiliaria. Conocer las características de cada una es clave para tomar decisiones informadas y maximizar el retorno de tu inversión.",
      "Polanco: Considerada la zona más exclusiva de CDMX, Polanco combina una ubicación privilegiada con una demanda constante de espacios corporativos y comerciales. Las rentas por metro cuadrado son de las más altas de la ciudad, y la plusvalía se mantiene en crecimiento sostenido. Es ideal para oficinas corporativas de alto nivel y locales comerciales premium.",
      "Reforma: El corredor financiero más importante de México. Los edificios corporativos sobre Paseo de la Reforma albergan a las principales empresas nacionales e internacionales. La inversión en esta zona ofrece rendimientos estables y alta liquidez, con una tasa de ocupación que supera el 90%.",
      "Lomas de Chapultepec: Una de las zonas residenciales y corporativas más prestigiosas de la ciudad. Ofrece un entorno exclusivo con excelente conectividad y servicios de primer nivel. Ideal para oficinas que buscan proyectar una imagen de alto nivel.",
      "Santa Fe: El distrito de negocios más moderno de CDMX, con torres corporativas de clase mundial. Ha experimentado un crecimiento exponencial en los últimos años y continúa atrayendo inversión nacional e internacional. Los precios son competitivos en comparación con Polanco y Reforma.",
      "Interlomas: Zona en plena expansión con un crecimiento inmobiliario acelerado. Ofrece precios más accesibles que las zonas consolidadas con un alto potencial de plusvalía. La llegada de nuevos desarrollos comerciales y corporativos está transformando esta zona en un polo de inversión estratégico.",
      "Condesa e Hipódromo: Zonas con una identidad cultural única que atraen a empresas creativas, startups y negocios gastronómicos. Las rentas son competitivas y la demanda sigue en aumento, especialmente para espacios de oficinas boutique y locales comerciales.",
      "La elección de zona depende de tu perfil de inversión, horizonte temporal y tipo de inmueble. En KGroup te asesoramos para encontrar la ubicación que mejor se adapte a tus objetivos.",
    ],
  },
  "comprar-vs-rentar-oficina-cdmx": {
    title: "Comprar vs rentar oficina en CDMX",
    image: blogComprarVsRentar,
    content: [
      "Una de las decisiones más importantes para empresas e inversionistas es determinar si conviene comprar o rentar una oficina. Ambas opciones tienen ventajas y consideraciones que deben evaluarse cuidadosamente según el perfil y objetivos de cada negocio.",
      "Comprar una oficina: Adquirir un inmueble comercial ofrece estabilidad a largo plazo y la posibilidad de generar plusvalía. El propietario tiene control total sobre el espacio, puede personalizarlo sin restricciones y no depende de aumentos de renta. Además, el inmueble se convierte en un activo patrimonial que puede utilizarse como garantía financiera.",
      "Sin embargo, la compra requiere una inversión inicial significativa y compromete capital que podría destinarse a la operación del negocio. Los costos de mantenimiento y administración también son responsabilidad del propietario.",
      "Rentar una oficina: El arrendamiento ofrece mayor flexibilidad y menor compromiso de capital. Permite a las empresas adaptarse rápidamente a cambios en el mercado, escalar o reducir su espacio según las necesidades del negocio. Los costos de mantenimiento generalmente están incluidos o son compartidos.",
      "La renta es ideal para empresas en crecimiento, startups o negocios que priorizan la liquidez sobre la acumulación de activos. También permite acceder a ubicaciones premium que podrían estar fuera del alcance en una compra.",
      "Factores clave para decidir:",
      "• Horizonte temporal: Si planeas permanecer más de 7-10 años, la compra suele ser más conveniente. Para periodos más cortos, la renta ofrece mejor relación costo-beneficio.",
      "• Flujo de caja: Evalúa si tu empresa puede asumir el desembolso inicial de una compra sin afectar su operación.",
      "• Crecimiento proyectado: Si tu empresa está en fase de expansión rápida, la flexibilidad de la renta puede ser más valiosa.",
      "• Beneficios fiscales: Tanto la compra como la renta ofrecen deducciones fiscales, pero de diferente naturaleza. Consulta con tu asesor fiscal.",
      "• Ubicación: En zonas como Polanco o Reforma, las rentas son elevadas pero la compra requiere inversiones millonarias. Analiza el costo de oportunidad.",
      "En KGroup te ayudamos a evaluar ambas opciones con un análisis financiero personalizado, para que tomes la decisión que mejor se adapte a tu negocio.",
    ],
  },
  "inversion-inmobiliaria-polanco": {
    title: "Inversión inmobiliaria en Polanco",
    image: blogPolanco,
    content: [
      "Polanco es, sin duda, la zona más exclusiva y codiciada para inversión inmobiliaria en Ciudad de México. Su combinación de ubicación estratégica, infraestructura de primer nivel y una oferta comercial y gastronómica inigualable la convierten en el destino preferido de inversionistas nacionales e internacionales.",
      "La demanda de oficinas en Polanco se mantiene consistentemente alta. Empresas de los sectores financiero, tecnológico, legal y de consultoría buscan establecerse en esta zona por el prestigio que proyecta y la calidad de vida que ofrece a sus colaboradores. Las tasas de ocupación superan el 92%, una de las más altas de la ciudad.",
      "En términos de plusvalía, Polanco ha mostrado un crecimiento sostenido del 8-12% anual en los últimos cinco años. Los precios por metro cuadrado para oficinas oscilan entre $45,000 y $85,000 MXN en venta, y entre $350 y $650 MXN mensuales en renta, dependiendo de la ubicación exacta y las características del inmueble.",
      "Las principales avenidas corporativas de Polanco incluyen Av. Presidente Masaryk, Av. Moliere, Av. Homero y Ejercito Nacional. Cada una ofrece un perfil diferente de inmuebles y rentas, desde oficinas boutique hasta pisos corporativos completos en torres de clase A.",
      "El nearshoring ha intensificado la demanda en Polanco. Empresas internacionales que están relocalizando operaciones a México buscan ubicaciones que proyecten confianza y profesionalismo, y Polanco cumple con esos requisitos a la perfección.",
      "Ventajas de invertir en Polanco:",
      "• Alta demanda y baja vacancia: Garantiza ocupación constante y flujo de rentas estable.",
      "• Plusvalía sostenida: El valor de los inmuebles en Polanco crece de manera consistente.",
      "• Perfil de inquilinos AAA: Empresas sólidas con capacidad financiera comprobada.",
      "• Infraestructura y servicios: Restaurantes, hoteles, centros comerciales y transporte de primer nivel.",
      "• Liquidez: Los inmuebles en Polanco son altamente líquidos y se venden con relativa rapidez.",
      "En KGroup somos especialistas en el mercado de Polanco. Contamos con un portafolio exclusivo de oficinas en las mejores ubicaciones de la zona. Contáctanos para conocer las oportunidades disponibles.",
    ],
  },
  "interlomas-oportunidad-inversion": {
    title: "Interlomas como oportunidad de inversión",
    image: blogInterlomas,
    content: [
      "Interlomas se ha posicionado como una de las zonas con mayor potencial de crecimiento inmobiliario en la Zona Metropolitana de Ciudad de México. Su desarrollo acelerado, combinado con precios aún accesibles en comparación con zonas consolidadas, la convierte en una oportunidad excepcional para inversionistas con visión a mediano y largo plazo.",
      "Ubicada en el municipio de Huixquilucan, Estado de México, Interlomas ofrece una calidad de vida superior con áreas verdes, seguridad y una infraestructura moderna. La conectividad ha mejorado significativamente con nuevas vialidades y el túnel Bosque Real-Interlomas, que reduce los tiempos de traslado hacia Santa Fe y otras zonas del poniente.",
      "El mercado de oficinas en Interlomas está en plena expansión. Nuevos desarrollos corporativos de clase A están llegando a la zona, atrayendo a empresas que buscan espacios modernos a precios más competitivos que Polanco o Reforma. Las rentas por metro cuadrado son aproximadamente 30-40% menores que en las zonas más consolidadas.",
      "La plusvalía en Interlomas ha crecido entre 10-15% anual en los últimos años, superando a muchas zonas tradicionales. Este crecimiento se debe a la llegada de nuevos desarrollos residenciales, comerciales y corporativos, así como a la mejora continua de la infraestructura vial.",
      "Proyectos emblemáticos como Torre Designo by Pininfarina están redefiniendo el perfil corporativo de la zona, atrayendo a empresas e inversionistas que reconocen el potencial de crecimiento a largo plazo.",
      "¿Por qué invertir en Interlomas?",
      "• Precios accesibles con alto potencial de plusvalía: El punto de entrada es significativamente menor que en zonas consolidadas.",
      "• Crecimiento acelerado: La transformación urbana de Interlomas apenas comienza.",
      "• Demanda creciente: Cada vez más empresas eligen Interlomas por su relación calidad-precio.",
      "• Calidad de vida: Áreas verdes, seguridad y servicios de primer nivel.",
      "• Conectividad mejorada: Nuevas vialidades y proyectos de movilidad en desarrollo.",
      "En KGroup identificamos las mejores oportunidades de inversión en Interlomas. Si buscas un activo con alto potencial de crecimiento, esta zona merece tu atención.",
    ],
  },
};

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articlesData[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-serif text-foreground">Artículo no encontrado</h1>
          <Link to="/blog">
            <Button variant="outline">Volver al Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <WhatsAppButton />

      {/* Header */}
      <header className="relative z-10 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <KGroupLogo variant="full" size="md" />
            <Link to="/blog">
              <Button variant="outline" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Volver al Blog
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Article Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <ScrollRevealSection>
              <div className="space-y-6 -mt-32 md:-mt-40 relative z-10">
                <p className="text-xs uppercase tracking-[0.4em] text-accent font-medium">
                  Blog Inmobiliario
                </p>
                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {article.title}
                </h1>
                <GoldDivider width="w-16" />
              </div>
            </ScrollRevealSection>

            <ScrollRevealSection delay={0.2}>
              <div className="mt-12 space-y-6">
                {article.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className={`leading-relaxed ${
                      paragraph.startsWith("•")
                        ? "text-muted-foreground pl-4 text-sm md:text-base"
                        : "text-muted-foreground text-base md:text-lg font-light"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollRevealSection>

            {/* CTA */}
            <ScrollRevealSection delay={0.3}>
              <div className="mt-20 text-center space-y-6 border-t border-border/50 pt-16">
                <h2 className="text-2xl md:text-3xl font-light font-serif">
                  ¿Te interesa invertir en bienes raíces?
                </h2>
                <a
                  href="https://wa.me/525560808129?text=Hola%2C%20leí%20el%20artículo%20del%20blog%20y%20me%20interesa%20una%20asesoría"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-4 bg-primary text-primary-foreground uppercase text-caption font-medium tracking-[0.2em] rounded-xl border border-primary/60 hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                >
                  Agendar Asesoría
                </a>
              </div>
            </ScrollRevealSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <KGroupLogo variant="full" size="sm" />
            <div className="text-sm text-muted-foreground">
              © 2024 KGroup Inmobiliaria. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogArticle;
