import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/40 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className="text-gradient-neon">&lt;NOVA/&gt;</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-muted-foreground hover:text-foreground transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="px-4 py-2 rounded-full text-sm font-medium border border-primary/50 text-foreground hover:bg-primary/10 hover:glow-border transition-all"
        >
          Hire me
        </a>
      </div>
    </motion.nav>
  );
}