import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="md:col-span-5"
        >
          <p className="font-mono-accent text-xs tracking-[0.3em] text-secondary mb-5 uppercase">01 — Studio</p>
          <h2 className="font-display text-5xl md:text-6xl font-light tracking-tight leading-[1.05]">
            A small studio with a <span className="italic text-primary">long</span> attention span.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-7 space-y-5 text-foreground/75 text-lg leading-relaxed"
        >
          <p>
            I've spent the last six years building interfaces for founders, agencies,
            and the occasional museum. My work sits at the seam between
            <span className="underline-wavy"> engineering and editorial design</span>.
          </p>
          <p>
            I care about typography, restraint, and the small frictions that make
            software feel human. Most projects are quiet on the surface and quite
            opinionated underneath.
          </p>
          <div className="flex gap-8 pt-4 border-t border-border">
            {[
              { n: "60+", l: "Projects shipped" },
              { n: "6 yr", l: "In practice" },
              { n: "12", l: "Cities visited" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl font-medium text-primary">{s.n}</div>
                <div className="font-mono-accent text-[10px] uppercase tracking-widest text-muted-foreground mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}