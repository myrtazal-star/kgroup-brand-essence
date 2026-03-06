import { KGroupLogo } from "@/components/KGroupLogo";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import { GoldDivider } from "@/components/GoldDivider";
import { motion } from "framer-motion";
import cdmxSkyline from "@/assets/cdmx-skyline.jpg";

const executives = [
  {
    name: "Kira Kellar",
    title: "CEO",
    initials: "KK",
    description:
      "Especialista en inversiones inmobiliarias y estrategias de compra y renta en zonas premium de Ciudad de México. Su enfoque está en identificar oportunidades de alto valor para inversionistas y empresas.",
  },
  {
    name: "Santiago Montez",
    title: "Director Jurídico",
    initials: "SM",
    description:
      "Experto en contratos inmobiliarios, estructuración legal y seguridad jurídica en operaciones de compraventa y arrendamiento.",
  },
];

const ExecutiveCard = ({ exec, index }: { exec: (typeof executives)[0]; index: number }) => (
  <ScrollRevealSection delay={index * 0.2}>
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-md shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.12)] overflow-hidden"
    >
      <div className="p-8 md:p-10 flex flex-col items-center text-center space-y-6">
        {/* Portrait placeholder */}
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-secondary border border-border/60 flex items-center justify-center shadow-[0_0_30px_hsl(var(--primary)/0.08)]">
          <span className="text-4xl md:text-5xl font-light tracking-wider text-accent font-serif">
            {exec.initials}
          </span>
        </div>

        {/* Info */}
        <div className="space-y-3">
          <h3 className="text-2xl md:text-3xl font-light tracking-wide font-serif text-foreground">
            {exec.name}
          </h3>
          <div className="w-10 h-px bg-accent mx-auto" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {exec.title}
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-sm">
          {exec.description}
        </p>
      </div>
    </motion.div>
  </ScrollRevealSection>
);

const Nosotros = () => {
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

      {/* Hero with skyline background */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cdmxSkyline}
            alt="Ciudad de México skyline"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        </div>

        <div className="relative container mx-auto px-6">
          <ScrollRevealSection>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-accent font-medium">
                KGroup Inmobiliaria
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight font-serif uppercase">
                Quiénes Somos
              </h1>
              <GoldDivider width="w-24" className="mx-auto" />
            </div>
          </ScrollRevealSection>
        </div>
      </section>

      {/* Intro paragraph */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <ScrollRevealSection>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed tracking-wide">
                KGroup Inmobiliaria es una firma especializada en bienes raíces en Ciudad de México
                con más de <span className="text-accent font-medium">10 años de experiencia</span>{" "}
                en el mercado inmobiliario.
              </p>
              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                Nuestro enfoque combina estrategia de inversión, asesoría legal y análisis de
                mercado para ayudar a inversionistas, empresas y compradores a tomar decisiones
                inteligentes en el sector inmobiliario.
              </p>
            </div>
          </ScrollRevealSection>
        </div>
      </section>

      <GoldDivider width="w-48" className="mx-auto" />

      {/* Visión & Misión */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <ScrollRevealSection>
              <div className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-md p-10 md:p-14 space-y-10 text-center">
                <div className="space-y-5">
                  <h3 className="text-heading uppercase tracking-[0.2em] text-foreground">Visión</h3>
                  <p className="text-muted-foreground font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Ser la firma inmobiliaria industrial y corporativa más influyente de México, reconocida por conectar empresas con espacios que potencien su operación, posicionamiento y expansión a largo plazo.
                  </p>
                </div>

                <div className="w-48 h-px bg-border/60 mx-auto" />

                <div className="space-y-5">
                  <h3 className="text-heading uppercase tracking-[0.2em] text-foreground">Misión</h3>
                  <p className="text-muted-foreground font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Impulsar el crecimiento de empresas a través de espacios corporativos e industriales estratégicamente ubicados, ofreciendo asesoría experta, negociación inteligente y soluciones inmobiliarias que generen valor real para cada negocio.
                  </p>
                </div>
              </div>
            </ScrollRevealSection>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <ScrollRevealSection>
            <p className="text-xs uppercase tracking-[0.4em] text-accent font-medium text-center mb-4">
              Liderazgo
            </p>
            <h2 className="text-3xl md:text-4xl font-light font-serif text-center mb-16">
              Nuestro Equipo
            </h2>
          </ScrollRevealSection>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
            {executives.map((exec, i) => (
              <ExecutiveCard key={exec.name} exec={exec} index={i} />
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
                ¿Listo para invertir en tu próximo espacio?
              </h2>
              <p className="text-lg text-muted-foreground">
                Agenda una asesoría y descubre las mejores oportunidades en CDMX
              </p>
              <Button variant="luxury" asChild>
                <a
                  href="https://wa.me/525560808129?text=Hola%2C%20quiero%20agendar%20una%20asesoría%20inmobiliaria"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agenda una Asesoría
                </a>
              </Button>
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

export default Nosotros;
