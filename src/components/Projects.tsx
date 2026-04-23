import { motion } from "framer-motion";

const projects = [
  {
    title: "Maison Lune",
    year: "2024",
    role: "Design & Development",
    desc: "A boutique perfumery brand and commerce platform — editorial layouts, slow scroll, custom typography.",
    tags: ["Next.js", "Shopify", "Type"],
  },
  {
    title: "Field Notes Journal",
    year: "2024",
    role: "Full-stack",
    desc: "A long-form writing tool for naturalists. Markdown-first, sketch attachments, offline-ready.",
    tags: ["React", "SQLite", "PWA"],
  },
  {
    title: "Atrium Gallery",
    year: "2023",
    role: "Frontend & WebGL",
    desc: "A virtual exhibition space for a contemporary art gallery — quiet 3D, soft motion, archival index.",
    tags: ["Three.js", "Astro", "CMS"],
  },
  {
    title: "Slow Coffee Co.",
    year: "2023",
    role: "Brand site",
    desc: "A subscription site for single-origin roasters. Hand-set type, generous whitespace, honest copy.",
    tags: ["Remix", "Stripe", "Sanity"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 bg-muted/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex items-end justify-between flex-wrap gap-6"
        >
          <div>
            <p className="font-mono-accent text-xs tracking-[0.3em] text-secondary mb-5 uppercase">02 — Work</p>
            <h2 className="font-display text-5xl md:text-6xl font-light tracking-tight leading-[1.05]">
              A handful of <span className="italic text-primary">recent</span> things.
            </h2>
          </div>
          <p className="font-script text-2xl text-secondary">— ask me about the rest</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative p-8 md:p-10 rounded-3xl bg-card border border-border overflow-hidden cursor-pointer shadow-soft hover:shadow-lift transition-shadow"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-accent/30 blur-3xl group-hover:bg-accent/50 transition-colors" />
              <div className="relative">
                <div className="flex items-center justify-between mb-6 font-mono-accent text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span>0{i + 1} / 0{projects.length}</span>
                  <span>{p.year} · {p.role}</span>
                </div>
                <h3 className="font-display text-4xl md:text-5xl font-light mb-4 group-hover:text-primary transition-colors leading-tight">
                  {p.title}
                </h3>
                <p className="text-foreground/70 mb-7 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono-accent text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-foreground/15 text-foreground/70"
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