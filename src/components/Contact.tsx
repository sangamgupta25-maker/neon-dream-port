import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 bg-muted/40">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono-accent text-xs tracking-[0.3em] text-secondary mb-5 uppercase"
        >
          04 — Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl md:text-7xl font-light tracking-tight mb-8 leading-[1.05]"
        >
          Let's make something <span className="italic text-primary">considered</span>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-foreground/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed"
        >
          I'm taking on a small number of projects this season.
          Send a few lines about what you're working on — I read every email.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          href="mailto:hello@ateliernova.studio"
          className="inline-block font-display text-4xl md:text-5xl italic text-primary border-b-2 border-primary/40 hover:border-primary pb-2 transition-colors"
        >
          hello@ateliernova.studio
        </motion.a>

        <div className="mt-20 flex justify-center gap-8 font-mono-accent text-xs uppercase tracking-widest text-muted-foreground">
          {["GitHub", "Are.na", "Read.cv", "Letterboxd"].map((s) => (
            <a key={s} href="#" className="hover:text-foreground transition-colors">
              {s}
            </a>
          ))}
        </div>
      </div>

      <footer className="mt-32 pt-8 border-t border-border text-center font-mono-accent text-[10px] uppercase tracking-widest text-muted-foreground">
        © {new Date().getFullYear()} Atelier Nova — Set in Fraunces, Inter Tight & Caveat
      </footer>
    </section>
  );
}