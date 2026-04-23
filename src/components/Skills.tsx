import { motion } from "framer-motion";

const skills = [
  { name: "React / Next", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "Three.js / WebGL", level: 88 },
  { name: "Node / Bun", level: 85 },
  { name: "GLSL Shaders", level: 78 },
  { name: "Rust / WASM", level: 70 },
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
          <p className="text-sm tracking-[0.3em] text-secondary mb-4 uppercase">// 03 — Stack</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Technical <span className="text-gradient-neon">arsenal</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex justify-between mb-3">
                <span className="text-foreground font-medium">{s.name}</span>
                <span className="text-muted-foreground text-sm">{s.level}%</span>
              </div>
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_10px_oklch(0.72_0.21_265/0.8)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}