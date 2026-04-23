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
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 paper-grid opacity-60" />
      <motion.div style={{ scale }} className="absolute inset-0 opacity-90">
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
          className="font-mono-accent text-xs tracking-[0.3em] text-primary mb-6 uppercase"
        >
          Est. 2018 — Independent Studio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-6xl md:text-8xl lg:text-[9rem] font-light leading-[0.95] tracking-[-0.03em] mb-6 text-foreground"
        >
          Designing
          <br />
          <span className="italic font-medium text-primary">quiet</span> interfaces
          <br />
          for loud <span className="font-script text-secondary text-7xl md:text-9xl">ideas.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
        >
          I'm a full-stack developer & designer working with founders and studios
          to build products that feel handmade — fast, considered, and a little warm.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex gap-4 pointer-events-auto"
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-full font-medium text-primary-foreground bg-primary hover:bg-foreground transition-colors shadow-soft"
          >
            See selected work
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full font-medium border border-foreground/20 text-foreground hover:border-foreground transition-all"
          >
            Start a project →
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono-accent text-[10px] tracking-[0.3em] text-muted-foreground"
      >
        SCROLL TO EXPLORE ↓
      </motion.div>
    </section>
  );
}