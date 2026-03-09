import { useState, useEffect } from "react";
import { motion } from "motion/react";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Educación", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];

const Logo = () => (
  <span className="text-[15px]" style={{ fontWeight: 700, color: "#000" }}>
    {"<"}<span style={{ color: "#0071E3" }}>Software</span>{" />"}
  </span>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = ["hero", "education", "skills", "experience", "contact"];
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 shadow-lg shadow-black/5 backdrop-blur-xl border border-black/5"
          : "bg-white/40 backdrop-blur-md border border-white/20"
      } rounded-full px-2 py-2`}
    >
      {/* Desktop */}
      <div className="hidden md:flex items-center gap-1">
        <div className="px-4 py-1"><Logo /></div>
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace("#", "");
          return (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`relative px-4 py-2 rounded-full text-[13px] transition-all duration-300 ${
                isActive ? "text-white" : "text-black/70 hover:text-black"
              }`}
              style={{ fontWeight: 500 }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: "#0071E3" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-center gap-2 px-3">
        <Logo />
        <button onClick={() => setMobileOpen(!mobileOpen)} className="p-1 ml-2">
          <div className="flex flex-col gap-1">
            <span className={`block w-5 h-0.5 bg-black transition-all ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-5 h-0.5 bg-black transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-black transition-all ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-xl rounded-2xl border border-black/5 shadow-xl p-4 md:hidden"
        >
          {navLinks.map((link) => (
            <button 
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left px-4 py-3 rounded-xl text-[14px] transition-colors hover:bg-black/5"
              style={{
                fontWeight: 500,
                color: activeSection === link.href.replace("#", "") ? "#0071E3" : "#000",
              }}
            >
              {link.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}