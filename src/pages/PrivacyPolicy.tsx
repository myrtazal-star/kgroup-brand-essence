import { Link } from "react-router-dom";
import { KGroupLogo } from "@/components/KGroupLogo";
import { GoldDivider } from "@/components/GoldDivider";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const PrivacyPolicy = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <WhatsAppButton />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-20">
            <Link to="/"><KGroupLogo variant="full" size="md" /></Link>
            <div className="hidden md:flex items-center gap-14">
              <Link to="/rent-catalog" className="text-nav text-muted-foreground hover:text-foreground transition-colors duration-300">Renta</Link>
              <Link to="/sale-catalog" className="text-nav text-muted-foreground hover:text-foreground transition-colors duration-300">Venta</Link>
              <Link to="/nosotros" className="text-nav text-muted-foreground hover:text-foreground transition-colors duration-300">Nosotros</Link>
              <Link to="/services" className="text-nav text-muted-foreground hover:text-foreground transition-colors duration-300">Servicios</Link>
              <Link to="/blog" className="text-nav text-muted-foreground hover:text-foreground transition-colors duration-300">Blog</Link>
              <a href="https://wa.me/525560808129" target="_blank" rel="noopener noreferrer" className="text-nav text-muted-foreground hover:text-foreground transition-colors duration-300">Contacto</a>
            </div>
            <button className="md:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden py-8 border-t border-border/50 animate-fade-in">
              <div className="flex flex-col gap-8">
                <Link to="/rent-catalog" className="text-nav text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>Renta</Link>
                <Link to="/sale-catalog" className="text-nav text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>Venta</Link>
                <Link to="/nosotros" className="text-nav text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>Nosotros</Link>
                <Link to="/services" className="text-nav text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>Servicios</Link>
                <Link to="/blog" className="text-nav text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                <a href="https://wa.me/525560808129" target="_blank" rel="noopener noreferrer" className="text-nav text-muted-foreground">Contacto</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <p className="text-caption tracking-[0.35em] text-primary mb-4">LEGAL</p>
          <h1 className="text-display text-foreground uppercase mb-4">Aviso de Privacidad</h1>
          <GoldDivider className="my-6" />

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground font-light text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            <p className="text-foreground font-medium">KGroup Real Estate</p>
            <p>Última actualización: Marzo 2026</p>

            <h2 className="text-foreground text-lg font-semibold mt-8 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>1. Responsable del tratamiento de datos</h2>
            <p>KGroup Real Estate (en adelante "KGroup"), con domicilio en Ciudad de México, México, es responsable del tratamiento de sus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).</p>

            <h2 className="text-foreground text-lg font-semibold mt-8 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>2. Datos personales que recabamos</h2>
            <p>Podemos recabar los siguientes datos personales:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Datos de contacto proporcionados a través de WhatsApp</li>
              <li>Información sobre sus preferencias de búsqueda de inmuebles</li>
              <li>Datos de navegación en nuestro sitio web (cookies y tecnologías similares)</li>
            </ul>

            <h2 className="text-foreground text-lg font-semibold mt-8 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>3. Finalidades del tratamiento</h2>
            <p>Sus datos personales serán utilizados para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Atender solicitudes de información sobre propiedades</li>
              <li>Brindar asesoría inmobiliaria personalizada</li>
              <li>Enviar información sobre propiedades que coincidan con sus preferencias</li>
              <li>Gestionar citas y visitas a inmuebles</li>
              <li>Dar seguimiento a consultas y solicitudes</li>
              <li>Mejorar nuestros servicios y experiencia de usuario</li>
              <li>Cumplir con obligaciones legales aplicables</li>
            </ul>

            <h2 className="text-foreground text-lg font-semibold mt-8 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>4. Transferencia de datos</h2>
            <p>KGroup no transferirá sus datos personales a terceros sin su consentimiento, salvo en los casos previstos por la LFPDPPP y su Reglamento.</p>

            <h2 className="text-foreground text-lg font-semibold mt-8 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>5. Derechos ARCO</h2>
            <p>Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (derechos ARCO). Para ejercer estos derechos, puede contactarnos a través de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Correo electrónico: groupkellar@gmail.com</li>
              <li>WhatsApp: +52 55 6080 8129</li>
            </ul>

            <h2 className="text-foreground text-lg font-semibold mt-8 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>6. Uso de cookies y tecnologías de rastreo</h2>
            <p>Nuestro sitio web utiliza cookies y tecnologías similares, incluyendo el Meta Pixel de Facebook, para mejorar su experiencia de navegación y con fines publicitarios. Usted puede deshabilitar estas tecnologías a través de la configuración de su navegador.</p>

            <h2 className="text-foreground text-lg font-semibold mt-8 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>7. Cambios al aviso de privacidad</h2>
            <p>KGroup se reserva el derecho de modificar este aviso de privacidad. Cualquier cambio será publicado en esta página y, en caso de ser significativo, se le notificará por los medios de contacto disponibles.</p>

            <h2 className="text-foreground text-lg font-semibold mt-8 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>8. Contacto</h2>
            <p>Para cualquier duda o aclaración sobre este aviso de privacidad, puede contactarnos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Correo: groupkellar@gmail.com</li>
              <li>WhatsApp: <a href="https://wa.me/525560808129" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">+52 55 6080 8129</a></li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="border-t border-border/30 py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <GoldDivider className="mb-6" />
          <p className="text-caption text-muted-foreground/60 text-center">
            © 2024 KGroup Inmobiliaria. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
