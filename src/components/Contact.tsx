import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, Github, MapPin, ArrowUpRight, Copy, Check } from "lucide-react";
import { FadeIn } from "./FadeIn";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "Miguel",
    href: "miguemendz.dev@gmail.com",
    color: "#0071E3",
    description: "Respondo en menos de 24h",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Miguel Mendoza",
    href: "https://www.linkedin.com/in/miguemedz",
    color: "#0A66C2",
    description: "Conectemos profesionalmente",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@MigueMendz",
    href: "https://github.com/MigueMendz",
    color: "#171515",
    description: "Revisa mi código y proyectos",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Tuxtla Gtz, Chiapas, MX",
    href: "#",
    color: "#FF2D55",
    description: "Disponible remoto o presencial",
  },
];

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      {/* Background accents */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10"
        style={{ background: "#0071E3" }}
      />
      <div
        className="absolute top-20 -right-40 w-[400px] h-[400px] rounded-full blur-[120px] opacity-5"
        style={{ background: "#0071E3" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <FadeIn margin="-80px">
          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-[12px] tracking-widest uppercase mb-4"
              style={{ fontWeight: 600, color: "#0071E3", backgroundColor: "rgba(0,113,227,0.08)" }}
            >
              Hablemos
            </span>
            <h2
              className="text-[clamp(2rem,4vw,3rem)] tracking-tight mb-4"
              style={{ fontWeight: 800, color: "#000" }}
            >
              Contacto
            </h2>
            <p
              className="text-[15px] max-w-md mx-auto"
              style={{ fontWeight: 400, color: "rgba(0,0,0,0.45)" }}
            >
              ¿Tienes un proyecto en mente o quieres conectar? Aquí puedes encontrarme.
            </p>
          </div>
        </FadeIn>

        {/* Hero CTA Card */}
        <FadeIn delay={0.1} margin="-60px">
          <div
            className="relative overflow-hidden rounded-3xl p-8 md:p-12 mb-10 border border-black/5"
            style={{ background: "linear-gradient(135deg, #000 0%, #1a1a2e 100%)" }}
          >
            <div
              className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full blur-[100px] opacity-25"
              style={{ background: "#0071E3" }}
            />
            <div
              className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full blur-[80px] opacity-15"
              style={{ background: "#00C6FF" }}
            />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* Avatar placeholder */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(0,113,227,0.15)", border: "1px solid rgba(0,113,227,0.25)" }}
              >
                <span className="text-[32px]" style={{ fontWeight: 800, color: "#0071E3" }}>
                  TN
                </span>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3
                  className="text-[clamp(1.2rem,3vw,1.6rem)] text-white mb-1"
                  style={{ fontWeight: 700 }}
                >
                  Miguel Mendoza
                </h3>
                <p className="text-[14px] mb-4" style={{ fontWeight: 400, color: "rgba(255,255,255,0.5)" }}>
                  Ingeniero en Software · Backend Developer
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px]"
                    style={{
                      fontWeight: 500,
                      color: "#34C759",
                      backgroundColor: "rgba(52,199,89,0.1)",
                      border: "1px solid rgba(52,199,89,0.2)",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#34C759" }} />
                    Disponible para trabajar
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-[12px]"
                    style={{
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.4)",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    Remoto / CDMX
                  </span>
                </div>
              </div>

              <motion.a
                href="mailto:tu@email.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="shrink-0 px-7 py-3.5 rounded-full text-white text-[14px] flex items-center gap-2 transition-all"
                style={{
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #0071E3 0%, #005BB5 100%)",
                  boxShadow: "0 4px 20px rgba(0,113,227,0.4)",
                }}
              >
                <Mail size={16} />
                Escríbeme
              </motion.a>
            </div>
          </div>
        </FadeIn>

        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            const isLink = card.href !== "#" && card.href.startsWith("http");
            const isCopyable = card.label === "Email";

            return (
              <FadeIn key={card.label} delay={0.15 + i * 0.08} margin="-40px">
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
                  className="group relative bg-white rounded-2xl border border-black/5 p-6 h-full transition-all"
                  style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.03)" }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors group-hover:scale-105"
                    style={{ backgroundColor: `${card.color}0D` }}
                  >
                    <Icon size={22} style={{ color: card.color }} />
                  </div>

                  {/* Label */}
                  <p
                    className="text-[11px] uppercase tracking-widest mb-1.5"
                    style={{ fontWeight: 600, color: "rgba(0,0,0,0.3)" }}
                  >
                    {card.label}
                  </p>

                  {/* Value */}
                  <p
                    className="text-[15px] mb-2 break-all"
                    style={{ fontWeight: 600, color: "#000" }}
                  >
                    {card.value}
                  </p>

                  {/* Description */}
                  <p
                    className="text-[12px] mb-5"
                    style={{ fontWeight: 400, color: "rgba(0,0,0,0.35)" }}
                  >
                    {card.description}
                  </p>

                  {/* Action buttons */}
                  <div className="flex items-center gap-2 mt-auto">
                    {isLink && (
                      <a
                        href={card.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[12px] transition-all hover:gap-2"
                        style={{
                          fontWeight: 600,
                          color: card.color,
                          backgroundColor: `${card.color}0A`,
                          border: `1px solid ${card.color}18`,
                        }}
                      >
                        Abrir
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                    {card.label === "Email" && (
                      <a
                        href={card.href}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[12px] transition-all hover:gap-2"
                        style={{
                          fontWeight: 600,
                          color: card.color,
                          backgroundColor: `${card.color}0A`,
                          border: `1px solid ${card.color}18`,
                        }}
                      >
                        Enviar email
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                    {isCopyable && (
                      <button
                        onClick={() => copyToClipboard(card.value, card.label)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[12px] transition-all"
                        style={{
                          fontWeight: 500,
                          color: copied === card.label ? "#34C759" : "rgba(0,0,0,0.4)",
                          backgroundColor: copied === card.label ? "rgba(52,199,89,0.08)" : "rgba(0,0,0,0.03)",
                          border: `1px solid ${copied === card.label ? "rgba(52,199,89,0.2)" : "rgba(0,0,0,0.05)"}`,
                        }}
                      >
                        {copied === card.label ? (
                          <>
                            <Check size={12} /> Copiado
                          </>
                        ) : (
                          <>
                            <Copy size={12} /> Copiar
                          </>
                        )}
                      </button>
                    )}
                    {card.label === "Ubicación" && (
                      <span
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[12px]"
                        style={{
                          fontWeight: 500,
                          color: card.color,
                          backgroundColor: `${card.color}0A`,
                          border: `1px solid ${card.color}18`,
                        }}
                      >
                        <MapPin size={12} />
                        GMT-6
                      </span>
                    )}
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
