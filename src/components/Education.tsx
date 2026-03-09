import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen, ExternalLink } from "lucide-react";
import { FadeIn } from "./FadeIn";

const certifications = [
  { platform: "Coursera", title: "Programa especializado: Ciberseguridad de Google", year: "2024", color: "#0056D2" },
  { platform: "Cisco", title: "Introduction to Cybersecurity", year: "2024", color: "#A435F0" },
  { platform: "Aws", title: "AWS Academy Graduate - AWS Academy Cloud Operations", year: "2023", color: "#0A0A23" },
  { platform: "Aws", title: "AWS Academy Graduate - AWS Academy Cloud Foundations", year: "2023", color: "#A435F0" },
];

const courses = [
  "Desarrollo Web Full Stack", "Bases de Datos Avanzadas", "Arquitectura de Software",
  "Ingeniería de Requisitos", "DevOps & CI/CD", "Inteligencia Artificial",
  "Diseño de APIs RESTful", "Testing & QA",
];

export function Education() {
  return (
    <section id="education" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <FadeIn margin="-80px">
          <div className="text-center mb-20">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-[12px] tracking-widest uppercase mb-4"
              style={{ fontWeight: 600, color: "#0071E3", backgroundColor: "rgba(0,113,227,0.08)" }}
            >
              Formación
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] tracking-tight" style={{ fontWeight: 800, color: "#000" }}>
              Educación
            </h2>
          </div>
        </FadeIn>

        {/* University Card */}
        <FadeIn delay={0.1} margin="-80px">
          <div
            className="relative overflow-hidden rounded-3xl p-8 md:p-12 mb-12 border border-black/5"
            style={{ background: "linear-gradient(135deg, #000 0%, #1a1a2e 100%)" }}
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[100px] opacity-30" style={{ background: "#0071E3" }} />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(0,113,227,0.2)" }}>
                <GraduationCap size={28} style={{ color: "#0071E3" }} />
              </div>
              <div className="flex-1">
                <p className="text-[13px] mb-1" style={{ fontWeight: 500, color: "rgba(255,255,255,0.5)" }}>2020 — 2025</p>
                <h3 className="text-[clamp(1.3rem,3vw,1.8rem)] text-white mb-2" style={{ fontWeight: 700 }}>Ingeniería en Software</h3>
                <p className="text-[15px]" style={{ fontWeight: 400, color: "rgba(255,255,255,0.6)" }}>Universidad Politécnica de Chiapas</p>
              </div>
              <div className="hidden md:block">
                <div
                  className="px-5 py-2 rounded-full text-[13px]"
                  style={{ fontWeight: 600, color: "#34C759", backgroundColor: "rgba(52,199,89,0.1)", border: "1px solid rgba(52,199,89,0.2)" }}
                >
                  Egresado 2025
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Certifications */}
          <FadeIn delay={0.2} margin="-80px">
            <div className="bg-white rounded-3xl border border-black/5 p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(0,113,227,0.08)" }}>
                  <Award size={20} style={{ color: "#0071E3" }} />
                </div>
                <h3 className="text-[18px]" style={{ fontWeight: 700, color: "#000" }}>Certificaciones</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-black/[0.02] transition-colors cursor-pointer"
                  >
                    <div className="w-1 h-10 rounded-full shrink-0" style={{ backgroundColor: cert.color }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] uppercase tracking-wider mb-0.5" style={{ fontWeight: 600, color: cert.color }}>{cert.platform}</p>
                      <p className="text-[14px] truncate" style={{ fontWeight: 500, color: "#000" }}>{cert.title}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[12px]" style={{ fontWeight: 500, color: "rgba(0,0,0,0.35)" }}>{cert.year}</span>
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#0071E3" }} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Courses */}
          <FadeIn delay={0.3} margin="-80px">
            <div className="bg-white rounded-3xl border border-black/5 p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(0,113,227,0.08)" }}>
                  <BookOpen size={20} style={{ color: "#0071E3" }} />
                </div>
                <h3 className="text-[18px]" style={{ fontWeight: 700, color: "#000" }}>Cursos Destacados</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {courses.map((course, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * i }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2.5 rounded-xl text-[13px] border border-black/5 hover:border-[#0071E3]/30 hover:bg-[#0071E3]/5 transition-all duration-300 cursor-default"
                    style={{ fontWeight: 500, color: "#000", backgroundColor: "rgba(0,0,0,0.02)" }}
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
