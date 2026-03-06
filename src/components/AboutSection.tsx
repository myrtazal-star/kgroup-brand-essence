import { ScrollRevealSection } from "./ScrollRevealSection";
import { GoldDivider } from "./GoldDivider";
import { Building2, Scale, TrendingUp } from "lucide-react";
import teamKira from "@/assets/team-kira.png";
import teamSantiago from "@/assets/team-santiago.png";

const teamMembers = [
  {
    name: "Kira Kellar",
    role: "CEO",
    photo: teamKira,
    description: "Especialista en inversión inmobiliaria en zonas premium de Ciudad de México.",
  },
  {
    name: "Santiago Montez",
    role: "Director Jurídico",
    photo: teamSantiago,
    description: "Experto en contratos inmobiliarios y seguridad jurídica en operaciones inmobiliarias.",
  },
];

const stats = [
  { icon: Building2, value: "200+", label: "Propiedades gestionadas" },
  { icon: TrendingUp, value: "10+", label: "Años de experiencia" },
  { icon: Scale, value: "98%", label: "Clientes satisfechos" },
];

export const AboutSection = () => {
  return (
    <section className="py-[120px] border-t border-border/20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <ScrollRevealSection>
          <p className="text-caption tracking-[0.35em] text-primary mb-4">NUESTRA FIRMA</p>
          <h2 className="text-display text-foreground uppercase mb-4">Quiénes Somos</h2>
          <GoldDivider className="mb-10" />
        </ScrollRevealSection>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <ScrollRevealSection delay={0.1}>
            <p className="text-muted-foreground font-light leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              KGroup Inmobiliaria es una firma especializada en bienes raíces en Ciudad de México con más de 10 años de experiencia en el mercado inmobiliario.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Nuestro enfoque combina estrategia de inversión, asesoría legal y análisis de mercado para ayudar a inversionistas, empresas y compradores a tomar decisiones inteligentes.
            </p>
          </ScrollRevealSection>

          <ScrollRevealSection delay={0.2}>
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-2xl border border-border/30"
                  style={{ background: "hsl(var(--card))" }}
                >
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-3" />
                  <p className="text-2xl md:text-3xl text-foreground mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
                    {stat.value}
                  </p>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollRevealSection>
        </div>

        {/* Team */}
        <ScrollRevealSection delay={0.15}>
          <p className="text-caption tracking-[0.35em] text-primary mb-8">EQUIPO DIRECTIVO</p>
        </ScrollRevealSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
          {teamMembers.map((member, i) => (
            <ScrollRevealSection key={member.name} delay={0.2 + i * 0.1}>
              <div
                className="p-8 rounded-2xl border border-border/30 hover:border-primary/20 transition-all duration-500"
                style={{ background: "hsl(var(--card))" }}
              >
                <div className="flex items-center gap-5 mb-5">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-lg"
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--primary) / 0.05))",
                      border: "1px solid hsl(var(--primary) / 0.3)",
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "hsl(var(--primary))",
                    }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-heading text-foreground" style={{ fontSize: "1.25rem" }}>{member.name}</h3>
                    <p className="text-xs tracking-[0.2em] uppercase text-primary" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {member.role}
                    </p>
                  </div>
                </div>
                <GoldDivider className="mb-4" width="w-12" />
                <p className="text-sm text-muted-foreground font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {member.description}
                </p>
              </div>
            </ScrollRevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};
