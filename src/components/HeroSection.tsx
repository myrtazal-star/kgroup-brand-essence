import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroProperty from "@/assets/hero-corporate.jpg";

const StaggerText = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.4;

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax + slow zoom */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <img
          src={heroProperty}
          alt="Oficinas corporativas premium CDMX"
          className="w-full h-[120%] object-cover hero-zoom"
        />
      </div>

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[hsl(var(--background))]" />

      {/* Film grain */}
      <div className="absolute inset-0 film-grain pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Main title */}
        <h1 className="mb-2">
          <StaggerText
            text="KGROUP"
            className="block text-[clamp(4rem,12vw,7rem)] leading-[0.95] tracking-[0.08em] text-foreground"
            delay={0.3}
          />
        </h1>

        {/* Subtitle line */}
        <div className="overflow-hidden mb-8">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="text-caption tracking-[0.35em] text-muted-foreground"
          >
            COMMERCIAL REAL ESTATE
          </motion.p>
        </div>

        {/* Gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-24 h-px bg-primary mx-auto mb-10 origin-center"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Oficinas premium para empresas que operan desde arriba.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <Link
            to="/rent-catalog"
            className="btn-luxury px-10 py-4 text-nav text-foreground hover:text-primary-foreground hover:bg-primary/90 transition-all duration-500"
          >
            Explorar Oficinas
          </Link>
          <a
            href="https://wa.me/525560808129?text=Hola%2C%20quiero%20agendar%20una%20reunión%20para%20ver%20oficinas%20premium"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury px-10 py-4 text-nav text-foreground hover:text-primary-foreground hover:bg-primary/90 transition-all duration-500"
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
