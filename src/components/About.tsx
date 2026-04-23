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
          <p className="text-sm tracking-[0.3em] text-secondary mb-4 uppercase">// 01 — About</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Code meets <span className="text-gradient-neon">cosmos</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-7 space-y-5 text-muted-foreground text-lg leading-relaxed"
        >
          <p>
            I'm a developer obsessed with the edges of the web — where physics, shaders,
            and 3D collide with thoughtful interaction design.
          </p>
          <p>
            For 6+ years I've been shipping production interfaces for startups and studios,
            blending React, WebGL, and a relentless eye for motion.
          </p>
          <div className="flex gap-8 pt-4 border-t border-border">
            {[
              { n: "60+", l: "Projects shipped" },
              { n: "6yr", l: "Experience" },
              { n: "∞", l: "Cups of coffee" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-bold text-gradient-neon">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}