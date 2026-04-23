import { motion } from "framer-motion";

const projects = [
  {
    title: "Nebula UI",
    desc: "A WebGL component library for spatial interfaces. Used by 12k+ developers.",
    tags: ["React", "Three.js", "GLSL"],
    accent: "from-primary to-secondary",
  },
  {
    title: "Quantum Dash",
    desc: "Real-time analytics dashboard streaming millions of events per second.",
    tags: ["TypeScript", "Rust", "WebSockets"],
    accent: "from-secondary to-primary",
  },
  {
    title: "Orbit OS",
    desc: "Experimental browser-based OS with a 3D spatial window manager.",
    tags: ["WebGPU", "React", "Zustand"],
    accent: "from-primary via-secondary to-primary",
  },
  {
    title: "Synth Engine",
    desc: "Modular audio synthesizer running entirely in the browser via WebAudio.",
    tags: ["WebAudio", "Canvas", "Workers"],
    accent: "from-secondary to-primary",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-secondary mb-4 uppercase">// 02 — Projects</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Selected <span className="text-gradient-neon">work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-2xl bg-card backdrop-blur-md border border-border overflow-hidden cursor-pointer"
            >
              <div
                className={`absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`}
              />
              <div className="relative">
                <div className="text-xs text-muted-foreground mb-3">0{i + 1} / 0{projects.length}</div>
                <h3 className="text-3xl font-bold mb-3 group-hover:text-gradient-neon transition-all">
                  {p.title}
                </h3>
                <p className="text-muted-foreground mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}