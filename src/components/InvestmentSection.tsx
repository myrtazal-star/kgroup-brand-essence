import { ScrollRevealSection } from "./ScrollRevealSection";
import { GoldDivider } from "./GoldDivider";
import { TrendingUp, MapPin } from "lucide-react";

const zones = [
  {
    name: "Polanco",
    description: "La zona con mayor plusvalía corporativa de México. Demanda constante de oficinas premium y espacios comerciales de lujo.",
    growth: "+12% anual",
  },
  {
    name: "Santa Fe",
    description: "Centro financiero y empresarial con alta concentración de corporativos internacionales y rendimientos atractivos.",
    growth: "+9% anual",
  },
  {
    name: "Interlomas",
    description: "Zona emergente con desarrollos de alta gama, ideal para inversiones residenciales y de uso mixto con alto retorno.",
    growth: "+11% anual",
  },
  {
    name: "Lomas de Chapultepec",
    description: "Exclusividad y prestigio. Propiedades con demanda estable y valores que se mantienen al alza año con año.",
    growth: "+8% anual",
  },
];

export const InvestmentSection = () => {
  return (
    <section className="py-[120px] border-t border-border/20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <ScrollRevealSection>
          <p className="text-caption tracking-[0.35em] text-primary mb-4">OPORTUNIDADES</p>
          <h2 className="text-display text-foreground uppercase mb-4">Inversión Inmobiliaria</h2>
          <GoldDivider className="mb-4" />
          <p className="text-muted-foreground font-light text-sm tracking-wide max-w-lg mb-16" style={{ fontFamily: "'Inter', sans-serif" }}>
            Las zonas con mayor potencial de inversión en Ciudad de México.
          </p>
        </ScrollRevealSection>

        <div className="grid md:grid-cols-2 gap-6">
          {zones.map((zone, i) => (
            <ScrollRevealSection key={zone.name} delay={i * 0.1}>
              <div
                className="group p-8 rounded-2xl border border-border/30 hover:border-primary/30 transition-all duration-500 h-full"
                style={{ background: "hsl(var(--card))" }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <h3 className="text-heading text-foreground">{zone.name}</h3>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                    <TrendingUp className="w-3 h-3 text-primary" />
                    <span className="text-[11px] tracking-[0.1em] text-primary" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {zone.growth}
                    </span>
                  </div>
                </div>
                <GoldDivider className="mb-4" width="w-10" />
                <p className="text-sm text-muted-foreground font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {zone.description}
                </p>
              </div>
            </ScrollRevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};
