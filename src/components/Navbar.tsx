import { motion } from "framer-motion";

const links = [
  { label: "Studio", href: "#about", num: "01" },
  { label: "Work", href: "#projects", num: "02" },
  { label: "Craft", href: "#skills", num: "03" },
  { label: "Contact", href: "#contact", num: "04" },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-semibold tracking-tight text-foreground">
          Atelier <span className="italic text-primary">Nova</span>
        </a>
        <ul className="hidden md:flex items-center gap-10 text-sm">
          {links.map((l) => (
            <li key={l.href} className="flex items-baseline gap-1.5">
              <span className="font-mono-accent text-[10px] text-muted-foreground/70">{l.num}</span>
              <a
                href={l.href}
                className="relative text-foreground/70 hover:text-foreground transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="px-5 py-2 rounded-full text-sm font-medium bg-foreground text-background hover:bg-primary transition-colors"
        >
          Say hello →
        </a>
      </div>
    </motion.nav>
  );
}