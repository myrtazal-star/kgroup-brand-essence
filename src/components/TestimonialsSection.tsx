import { ScrollRevealSection } from "./ScrollRevealSection";
import { GoldDivider } from "./GoldDivider";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Director General, Grupo Altus",
    text: "KGroup nos ayudó a encontrar la oficina perfecta en Polanco en tiempo récord. Su conocimiento del mercado y atención personalizada superaron nuestras expectativas.",
    rating: 5,
  },
  {
    name: "María Elena Torres",
    role: "Inversionista Privada",
    text: "Gracias a la asesoría de KGroup, logré una inversión inmobiliaria con un retorno excepcional. Su equipo jurídico me dio total confianza en el proceso.",
    rating: 5,
  },
  {
    name: "Roberto Fernández",
    role: "CFO, Innovatech México",
    text: "Profesionalismo de primer nivel. Nos presentaron opciones que se ajustaban exactamente a lo que buscábamos. Sin duda, la mejor firma de bienes raíces con la que hemos trabajado.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-[120px] border-t border-border/20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <ScrollRevealSection>
          <p className="text-caption tracking-[0.35em] text-primary mb-4">TESTIMONIOS</p>
          <h2 className="text-display text-foreground uppercase mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <GoldDivider className="mb-16" />
        </ScrollRevealSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollRevealSection key={t.name} delay={i * 0.1}>
              <div
                className="p-8 rounded-2xl border border-border/30 h-full flex flex-col"
                style={{ background: "hsl(var(--card))" }}
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground font-light leading-relaxed flex-1 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  "{t.text}"
                </p>
                <GoldDivider className="mb-4" width="w-8" />
                <div>
                  <p className="text-foreground text-sm" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: "1.1rem" }}>
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground tracking-wide mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </ScrollRevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};
