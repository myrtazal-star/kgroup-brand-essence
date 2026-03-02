import { motion } from "framer-motion";

interface GoldDividerProps {
  className?: string;
  width?: string;
}

export const GoldDivider = ({ className = "", width = "w-full" }: GoldDividerProps) => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`${width} h-px bg-primary/30 origin-left ${className}`}
    />
  );
};
