import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.3em] text-secondary mb-4 uppercase"
        >
          // 04 — Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-8"
        >
          Let's build something <span className="text-gradient-neon glow-text">unreal</span>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto"
        >
          Available for freelance & full-time roles. Drop a line and let's talk pixels, polygons, and possibilities.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          href="mailto:hello@nova.dev"
          className="inline-block px-10 py-4 rounded-full font-medium text-primary-foreground bg-gradient-to-r from-primary to-secondary shadow-[0_0_40px_oklch(0.65_0.25_305/0.6)] hover:shadow-[0_0_60px_oklch(0.65_0.25_305/0.9)] transition-shadow"
        >
          hello@nova.dev →
        </motion.a>

        <div className="mt-20 flex justify-center gap-8 text-sm text-muted-foreground">
          {["GitHub", "Twitter", "LinkedIn", "Dribbble"].map((s) => (
            <a key={s} href="#" className="hover:text-foreground transition-colors">
              {s}
            </a>
          ))}
        </div>
      </div>

      <footer className="mt-32 pt-8 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} NOVA — Crafted with neon & three.js
      </footer>
    </section>
  );
}