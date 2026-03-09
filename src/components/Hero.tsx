import { motion } from "motion/react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/MigueMendz", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/miguemedz", label: "LinkedIn" },
  { icon: Mail, href: "miguemendz.dev@gmail.com", label: "Email" },
];

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20" style={{ background: "#0071E3" }} />
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10" style={{ background: "#0071E3" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border border-black/10"
          style={{ backgroundColor: "rgba(0,113,227,0.06)" }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#34C759" }} />
          <span className="text-[13px]" style={{ fontWeight: 500, color: "#0071E3" }}>Disponible para trabajar</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] tracking-tight mb-6"
          style={{ fontWeight: 800, color: "#000" }}
        >
          Miguel{" "}
          <span style={{ background: "linear-gradient(135deg, #0071E3 0%, #00C6FF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Mendoza 
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[clamp(1rem,2.5vw,1.35rem)] max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontWeight: 400, color: "rgba(0,0,0,0.55)" }}
        >
          Ingeniero en Software · Desarrollador Full Stack
          <br />
          Creando experiencias digitales con código limpio y diseño intencional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-3.5 rounded-full text-white text-[15px] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-95"
            style={{ fontWeight: 600, backgroundColor: "#0071E3" }}
          >
            Contáctame
          </button>
          <button
            onClick={() => scrollTo("experience")}
            className="px-8 py-3.5 rounded-full text-[15px] border border-black/15 bg-white hover:bg-black/5 transition-all duration-300 hover:scale-105 active:scale-95"
            style={{ fontWeight: 600, color: "#000" }}
          >
            Ver Proyectos
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center justify-center gap-3"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-black/10 bg-white flex items-center justify-center text-black/50 hover:text-[#0071E3] hover:border-[#0071E3]/30 hover:shadow-md transition-all duration-300 hover:scale-110"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollTo("education")}
        >
          <span className="text-[11px] tracking-widest uppercase" style={{ fontWeight: 500, color: "rgba(0,0,0,0.3)" }}>Scroll</span>
          <ChevronDown size={16} style={{ color: "rgba(0,0,0,0.3)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
