import { useState } from "react";
import { ScrollRevealSection } from "./ScrollRevealSection";
import { GoldDivider } from "./GoldDivider";
import { Send } from "lucide-react";
import { z } from "zod";

const leadSchema = z.object({
  nombre: z.string().trim().min(1, "Nombre requerido").max(100),
  telefono: z.string().trim().min(8, "Teléfono inválido").max(20),
  email: z.string().trim().email("Email inválido").max(255),
  tipo: z.string().min(1, "Selecciona un tipo"),
});

const propertyTypes = ["Oficina", "Departamento", "Local Comercial", "Bodega / Industrial", "Inversión"];

export const LeadCaptureSection = () => {
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", tipo: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = leadSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    const msg = encodeURIComponent(
      `Hola, soy ${result.data.nombre}.\nTeléfono: ${result.data.telefono}\nEmail: ${result.data.email}\nMe interesa: ${result.data.tipo}`
    );
    window.open(`https://wa.me/525560808129?text=${msg}`, "_blank");
    setSent(true);
  };

  const inputStyle = "w-full px-5 py-4 rounded-xl text-sm bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 transition-colors";

  return (
    <section className="py-[120px] border-t border-border/20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollRevealSection>
            <p className="text-caption tracking-[0.35em] text-primary mb-4">CONTACTO</p>
            <h2 className="text-display text-foreground uppercase mb-4">Solicita Información</h2>
            <GoldDivider className="mb-6" />
            <p className="text-muted-foreground font-light leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
              Déjanos tus datos y un asesor especializado te contactará para ayudarte a encontrar la propiedad ideal para tus necesidades.
            </p>
            <div className="flex items-center gap-4 p-5 rounded-xl border border-primary/20" style={{ background: "hsl(var(--primary) / 0.05)" }}>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Send className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>Respuesta en menos de 24 horas</p>
                <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>Atención personalizada garantizada</p>
              </div>
            </div>
          </ScrollRevealSection>

          <ScrollRevealSection delay={0.15}>
            {sent ? (
              <div className="text-center p-12 rounded-2xl border border-primary/20" style={{ background: "hsl(var(--card))" }}>
                <p className="text-heading text-foreground mb-2">¡Mensaje enviado!</p>
                <p className="text-sm text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Serás redirigido a WhatsApp para completar tu solicitud.
                </p>
                <button onClick={() => setSent(false)} className="mt-6 text-xs text-primary tracking-[0.15em] uppercase hover:underline">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 p-8 rounded-2xl border border-border/30" style={{ background: "hsl(var(--card))" }}>
                <div>
                  <input
                    className={inputStyle}
                    placeholder="Nombre completo"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                  {errors.nombre && <p className="text-xs text-destructive mt-1">{errors.nombre}</p>}
                </div>
                <div>
                  <input
                    className={inputStyle}
                    placeholder="Teléfono"
                    type="tel"
                    value={form.telefono}
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                  {errors.telefono && <p className="text-xs text-destructive mt-1">{errors.telefono}</p>}
                </div>
                <div>
                  <input
                    className={inputStyle}
                    placeholder="Email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <select
                    className={`${inputStyle} appearance-none`}
                    value={form.tipo}
                    onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <option value="" disabled>Tipo de propiedad</option>
                    {propertyTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.tipo && <p className="text-xs text-destructive mt-1">{errors.tipo}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-nav text-primary-foreground transition-all duration-500 hover:opacity-90 mt-2"
                  style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(40 35% 48%))" }}
                >
                  Solicitar Información
                </button>
              </form>
            )}
          </ScrollRevealSection>
        </div>
      </div>
    </section>
  );
};
