import { KGroupLogo } from "@/components/KGroupLogo";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import { GoldDivider } from "@/components/GoldDivider";
import { motion } from "framer-motion";

const executives = [
  {
    name: "Kira Kellar",
    title: "CEO",
    initials: "KK",
    description: [
      "Especialista en bienes raíces corporativos con enfoque estratégico en oficinas e inmuebles industriales.",
      "Lidera la firma con visión empresarial, negociación inteligente y posicionamiento de alto nivel.",
    ],
  },
  {
    name: "Santiago Mendoza",
    title: "Director Jurídico",
    initials: "SM",
    description: [
      "Abogado especializado en operaciones inmobiliarias con más de 10 años de experiencia en real estate.",
      "Encargado de blindar cada operación con estructura legal sólida y procesos seguros.",
    ],
  },
];

const ExecutiveCard = ({ exec, index }: { exec: typeof executives[0]; index: number }) => (
  <ScrollRevealSection delay={index * 0.15}>
    <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-center">
      {/* Portrait */}
      <motion.div
        whileHover={{ scale: 1.03, y: -4 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto md:mx-0"
      >
        <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl bg-card shadow-premium flex items-center justify-center overflow-hidden border border-border/50">
          <span className="text-5xl md:text-6xl font-light tracking-wider text-accent font-serif">
            {exec.initials}
          </span>
        </div>
      </motion.div>

      {/* Text */}
      <div className="text-center md:text-left space-y-4">
        <div>
          <h3 className="text-3xl md:text-4xl font-light tracking-wide font-serif">{exec.name}</h3>
          <div className="w-12 h-px bg-accent mt-3 mb-2 mx-auto md:mx-0" />
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">{exec.title}</p>
        </div>
        <div className="space-y-3 pt-2">
          {exec.description.map((line, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed text-base md:text-lg">{line}</p>
          ))}
        </div>
      </div>
    </div>
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

      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <ScrollRevealSection>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-accent font-medium">KGroup Real Estate</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight font-serif">
                Quiénes Somos
              </h1>
              <GoldDivider width="w-24" className="mx-auto" />
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                Estrategia. Experiencia. Crecimiento empresarial.
              </p>
            </div>
          </ScrollRevealSection>
        </div>
      </section>

      {/* Executives */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16 md:space-y-20">
            {executives.map((exec, i) => (
              <div key={exec.name}>
                <ExecutiveCard exec={exec} index={i} />
                {i < executives.length - 1 && (
                  <div className="pt-16 md:pt-20">
                    <GoldDivider width="w-48" className="mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Statement */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <ScrollRevealSection>
            <div className="max-w-3xl mx-auto">
              <div className="relative rounded-2xl border border-border/50 bg-card shadow-premium p-10 md:p-14 text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px w-24 h-px bg-accent" />
                <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground font-serif">
                  Más de <span className="text-accent font-medium">10 años</span> de experiencia combinada en el sector inmobiliario industrial y corporativo.
                </p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-px w-24 h-px bg-accent" />
              </div>
            </div>
          </ScrollRevealSection>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <ScrollRevealSection>
              <div className="rounded-2xl border border-border/50 bg-card shadow-refined p-10 md:p-14 text-center space-y-10">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold uppercase tracking-[0.25em]">Visión</h3>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    Ser la firma inmobiliaria industrial y corporativa más influyente de México, reconocida por conectar empresas con espacios que potencien su operación, posicionamiento y expansión a largo plazo.
                  </p>
                </div>
                <GoldDivider width="w-48" className="mx-auto" />
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold uppercase tracking-[0.25em]">Misión</h3>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    Impulsar el crecimiento de empresas a través de espacios corporativos e industriales estratégicamente ubicados, ofreciendo asesoría experta, negociación inteligente y soluciones inmobiliarias que generen valor real para cada negocio.
                  </p>
                </div>
              </div>
            </ScrollRevealSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <ScrollRevealSection>
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-light font-serif">
                ¿Listo para encontrar tu espacio ideal?
              </h2>
              <p className="text-lg text-muted-foreground">
                Agenda una consulta y descubre cómo podemos ayudarte a crecer
              </p>
              <Button variant="luxury" asChild>
                <a href="https://wa.me/525560808129?text=Hola%20Kira%2C%20quiero%20agendar%20una%20consulta" target="_blank" rel="noopener noreferrer">
                  Agendar Consulta
                </a>
              </Button>
            </div>
          </ScrollRevealSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-xl">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <KGroupLogo variant="full" size="sm" />
            <div className="text-sm text-muted-foreground">
              © 2024 KGroup Real Estate – Comercial. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Nosotros;
