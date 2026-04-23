import { motion } from "framer-motion";

const skills = [
  { name: "React, Next & Remix", level: 95, note: "daily driver" },
  { name: "TypeScript", level: 92, note: "strict, always" },
  { name: "Design systems & type", level: 90, note: "tokens, scales" },
  { name: "Node, Bun & Postgres", level: 85, note: "boring is good" },
  { name: "Three.js & motion", level: 78, note: "used sparingly" },
  { name: "Writing & editing", level: 82, note: "yes, really" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono-accent text-xs tracking-[0.3em] text-secondary mb-5 uppercase">03 — Craft</p>
          <h2 className="font-display text-5xl md:text-6xl font-light tracking-tight leading-[1.05]">
            Tools I reach for <span className="italic text-primary">often</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-10">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex justify-between items-baseline mb-3">
                <span className="font-display text-2xl font-normal text-foreground">{s.name}</span>
                <span className="font-mono-accent text-xs text-muted-foreground">{s.level}%</span>
              </div>
              <div className="font-script text-lg text-secondary mb-3">{s.note}</div>
              <div className="h-px bg-foreground/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                  className="h-[2px] -mt-px bg-primary"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}