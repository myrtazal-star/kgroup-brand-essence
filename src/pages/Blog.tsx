import { KGroupLogo } from "@/components/KGroupLogo";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import { GoldDivider } from "@/components/GoldDivider";
import { motion } from "framer-motion";

import blogInversionCdmx from "@/assets/blog-inversion-cdmx.jpg";
import blogZonasCdmx from "@/assets/blog-zonas-cdmx.jpg";
import blogComprarVsRentar from "@/assets/blog-comprar-vs-rentar.jpg";
import blogPolanco from "@/assets/blog-polanco.jpg";
import blogInterlomas from "@/assets/blog-interlomas.jpg";

const articles = [
  {
    slug: "como-invertir-bienes-raices-cdmx",
    image: blogInversionCdmx,
    title: "Cómo invertir en bienes raíces en Ciudad de México",
    description:
      "Guía para inversionistas que buscan oportunidades inmobiliarias en zonas premium como Polanco, Santa Fe e Interlomas.",
  },
  {
    slug: "mejores-zonas-invertir-cdmx",
    image: blogZonasCdmx,
    title: "Mejores zonas para invertir en CDMX",
    description:
      "Análisis de las zonas con mayor plusvalía inmobiliaria en Ciudad de México.",
  },
  {
    slug: "comprar-vs-rentar-oficina-cdmx",
    image: blogComprarVsRentar,
    title: "Comprar vs rentar oficina en CDMX",
    description:
      "Factores clave para empresas e inversionistas al elegir entre comprar o rentar una oficina.",
  },
  {
    slug: "inversion-inmobiliaria-polanco",
    image: blogPolanco,
    title: "Inversión inmobiliaria en Polanco",
    description:
      "Por qué Polanco sigue siendo una de las zonas más atractivas para inversión.",
  },
  {
    slug: "interlomas-oportunidad-inversion",
    image: blogInterlomas,
    title: "Interlomas como oportunidad de inversión",
    description: "Crecimiento inmobiliario y demanda en Interlomas.",
  },
];

const ArticleCard = ({
  article,
  index,
}: {
  article: (typeof articles)[0];
  index: number;
}) => (
  <ScrollRevealSection delay={index * 0.1}>
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-2xl border border-border/50 bg-card/80 backdrop-blur-md overflow-hidden shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.08)]"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 space-y-4">
        <h3
          className="text-xl md:text-2xl font-light tracking-wide text-foreground leading-snug"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {article.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {article.description}
        </p>
        <Link
          to={`/blog/${article.slug}`}
          className="inline-block text-caption text-accent hover:text-foreground transition-colors duration-300 pt-2"
        >
          Leer artículo →
        </Link>
      </div>
    </motion.div>
  </ScrollRevealSection>
);

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <WhatsAppButton />

      {/* Header */}
      <header className="relative z-10 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <KGroupLogo variant="full" size="md" />
            <Link to="/">
              <Button variant="outline" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Volver al Inicio
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-32 md:py-44">
        <div className="container mx-auto px-6">
          <ScrollRevealSection>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-accent font-medium">
                KGroup Inmobiliaria
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight font-serif uppercase">
                Blog Inmobiliario
              </h1>
              <GoldDivider width="w-24" className="mx-auto" />
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed tracking-wide max-w-2xl mx-auto">
                Insights y estrategias sobre inversión inmobiliaria en Ciudad de
                México.
              </p>
            </div>
          </ScrollRevealSection>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {articles.map((article, i) => (
              <ArticleCard key={article.title} article={article} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <ScrollRevealSection>
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <GoldDivider width="w-16" className="mx-auto" />
              <h2 className="text-3xl md:text-4xl font-light font-serif">
                ¿Buscas oportunidades de inversión inmobiliaria?
              </h2>
              <a
                href="https://wa.me/525560808129?text=Hola%2C%20quiero%20agendar%20una%20asesoría%20inmobiliaria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-primary text-primary-foreground uppercase text-caption font-medium tracking-[0.2em] rounded-xl border border-primary/60 hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
              >
                Agendar Asesoría
              </a>
            </div>
          </ScrollRevealSection>
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

export default Blog;
