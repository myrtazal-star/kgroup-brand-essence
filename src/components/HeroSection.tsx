import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroProperty from "@/assets/hero-corporate.jpg";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.img
          src={heroProperty}
          alt="Inversiones inmobiliarias CDMX"
          className="w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-[hsl(var(--background))]" />
      <div className="absolute inset-0 film-grain pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-caption tracking-[0.35em] text-primary mb-8"
        >
          KGROUP INMOBILIARIA
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[0.04em] text-foreground mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          Inversiones inmobiliarias{" "}
          <span className="italic text-primary">estratégicas</span>{" "}
          en Ciudad de México
        </motion.h1>

        {/* Gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="w-20 h-px bg-primary mx-auto mb-6 origin-center"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto mb-12"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Oficinas, departamentos e inversiones en las mejores zonas de CDMX.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/rent-catalog"
            className="px-10 py-4 text-nav text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-500"
            style={{ borderRadius: "14px" }}
          >
            Ver Propiedades
          </Link>
          <Link
            to="/consultation"
            className="btn-luxury px-10 py-4 text-nav text-foreground hover:text-primary-foreground hover:bg-primary/90 transition-all duration-500"
          >
            Agendar Asesoría
          </Link>
          <a
            href="https://wa.me/525560808129?text=Hola%2C%20quiero%20más%20información%20sobre%20sus%20propiedades"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury px-10 py-4 text-nav text-foreground hover:text-primary-foreground hover:bg-primary/90 transition-all duration-500"
          >
            Contactar por WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50" style={{ fontFamily: "'Inter', sans-serif" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};
