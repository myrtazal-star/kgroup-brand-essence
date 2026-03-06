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
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(3rem,8vw,5.5rem)] leading-[1.05] tracking-[0.06em] text-foreground mb-4 uppercase"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          KGROUP
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-caption tracking-[0.4em] text-muted-foreground mb-8"
        >
          COMMERCIAL REAL ESTATE
        </motion.p>

        {/* Gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="w-20 h-px bg-primary mx-auto mb-10 origin-center"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto mb-14"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          Oficinas premium para empresas que operan desde arriba.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 max-w-lg mx-auto"
        >
          <Link
            to="/rent-catalog"
            className="btn-luxury px-10 py-5 text-nav text-foreground hover:text-primary-foreground hover:bg-primary/90 transition-all duration-500 text-center"
          >
            Explorar Oficinas
          </Link>
          <a
            href="https://wa.me/525560808129?text=Hola%2C%20quiero%20agendar%20una%20reunión"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury px-10 py-5 text-nav text-foreground hover:text-primary-foreground hover:bg-primary/90 transition-all duration-500 text-center"
          >
            Agendar Reunión
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
