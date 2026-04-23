import { motion, useScroll, useTransform } from "framer-motion";
import { HeroScene } from "./HeroScene";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <motion.div style={{ scale }} className="absolute inset-0">
        <HeroScene />
      </motion.div>
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full pointer-events-none"
      >
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm tracking-[0.3em] text-primary mb-6 uppercase"
        >
          // Full-Stack Developer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.95] tracking-tighter mb-6"
        >
          Building
          <br />
          <span className="text-gradient-neon glow-text">digital worlds</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10"
        >
          I craft immersive, performant interfaces at the intersection of design,
          engineering, and motion.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex gap-4 pointer-events-auto"
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-full font-medium text-primary-foreground bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform shadow-[0_0_30px_oklch(0.72_0.21_265/0.6)]"
          >
            View work →
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full font-medium border border-border hover:border-primary hover:bg-primary/10 transition-all"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-widest text-muted-foreground"
      >
        SCROLL ↓
      </motion.div>
    </section>
  );
}