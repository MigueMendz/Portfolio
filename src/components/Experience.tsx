import { motion } from "motion/react";
import { GraduationCap, Code2, Trophy, Heart, Folder, ExternalLink, Github } from "lucide-react";
import { FadeIn } from "./FadeIn";

const timelineData = [
  {
    year: "2025",
    title: "HIGHTECH PROCESS COUNSELORS",
    subtitle: "Desarrollador Full Stack · Remoto · CDMX",
    description: "Plataforma de contratación de servicios profesionales con sistema de verificación de documentos. A cargo del Backend (PHP Laravel, MVC, MySQL) y Frontend (ReactJS, Redux). Implementé autenticación JWT, integración AWS S3 y comunicación API RESTful.",
    type: "academic" as const,
    tags: ["PHP Laravel", "ReactJS", "MySQL", "Redis", "JWT", "AWS S3", "GitLab"],
  },
  {
    year: "2024",
    title: "UNIVERSIDAD POLITÉCNICA DE CHIAPAS",
    subtitle: "Desarrollador Backend · Hackathon Interno · Presencial",
    description: "App móvil de reportes ambientales para comunidades. Desarrollé APIs RESTful con microservicios y arquitectura hexagonal, API Gateway con JWT, seguridad OWASP y despliegue Dockerizado en AWS EC2.",
    type: "hackathon" as const,
    tags: ["TypeScript", "NodeJS", "Express", "Docker", "AWS EC2", "AWS S3", "MySQL"],
  },
  {
    year: "2023",
    title: "UNIVERSIDAD AUTÓNOMA DE CHIAPAS — UNACH",
    subtitle: "Desarrollador Frontend · Remoto",
    description: "Proyecto interno institucional. A cargo del desarrollo de vistas, lógica de conexión API RESTful, tablas interactivas y adaptativas para usuarios.",
    type: "academic" as const,
    tags: ["ReactJS", "JavaScript", "Bootstrap", "CSS", "Python", "FastAPI", "MySQL"],
  },
  {
    year: "2023",
    title: "CONSULTORIO DR. CHRISTIAN CANCINO",
    subtitle: "Desarrollador Full Stack · Remoto",
    description: "Página web y API RESTful con arquitectura MVC para consultorio médico. Sistema de citas con notificaciones al doctor, gestión de pacientes y modelado de base de datos.",
    type: "personal" as const,
    tags: ["ReactJS", "JavaScript", "Tailwind", "Redux", "Hooks", "Postman", "GitHub"],
    link: "https://github.com",
  },
];

const typeConfig = {
  academic: { icon: GraduationCap, label: "Académico", color: "#0071E3" },
  personal: { icon: Code2, label: "Personal", color: "#34C759" },
  hackathon: { icon: Trophy, label: "Hackathon", color: "#FF9500" },
  volunteer: { icon: Heart, label: "Voluntariado", color: "#FF2D55" },
};

export function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative" style={{ backgroundColor: "#FAFAFA" }}>
      <div
        className="absolute inset-0 opacity-40"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)", backgroundSize: "32px 32px" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full text-[12px] tracking-widest uppercase mb-4" style={{ fontWeight: 600, color: "#0071E3", backgroundColor: "rgba(0,113,227,0.08)" }}>
              Trayectoria
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] tracking-tight mb-4" style={{ fontWeight: 800, color: "#000" }}>Experiencia</h2>
            <p className="text-[15px] max-w-lg mx-auto" style={{ fontWeight: 400, color: "rgba(0,0,0,0.45)" }}>
              Proyectos académicos, personales, hackatones y voluntariado que han formado mi perfil profesional.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.entries(typeConfig).map(([key, config]) => (
              <div key={key} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: config.color }} />
                <span className="text-[12px]" style={{ fontWeight: 500, color: "rgba(0,0,0,0.45)" }}>{config.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="relative">
          <div
            className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px]"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.08) 10%, rgba(0,0,0,0.08) 90%, transparent)" }}
          />

          {timelineData.map((item, index) => {
            const config = typeConfig[item.type];
            const Icon = config.icon;
            const isLeft = index % 2 === 0;

            return (
              <FadeIn key={index} delay={0.1 * index}>
                <div className={`relative flex items-start mb-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}>
                  <div className={`flex-1 ${isLeft ? "md:pr-12" : "md:pl-12"} pl-16 md:pl-0`}>
                    <div className={`${isLeft ? "md:text-right" : "md:text-left"} text-left`}>
                      <span
                        className="inline-block px-3 py-1 rounded-full text-[11px] tracking-wider mb-3"
                        style={{ fontWeight: 600, color: config.color, backgroundColor: `${config.color}12`, border: `1px solid ${config.color}25` }}
                      >
                        {item.year}
                      </span>

                      <motion.div
                        whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
                        className="bg-white rounded-2xl border border-black/5 p-6 transition-all"
                        style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.03)" }}
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <Folder size={16} style={{ color: config.color, marginTop: 3, flexShrink: 0 }} />
                          <div>
                            <h4 className="text-[16px] text-left" style={{ fontWeight: 700, color: "#000" }}>{item.title}</h4>
                            <p className="text-[13px] text-left" style={{ fontWeight: 500, color: "rgba(0,0,0,0.4)" }}>{item.subtitle}</p>
                          </div>
                        </div>
                        <p className="text-[14px] leading-relaxed mb-4 text-left" style={{ fontWeight: 400, color: "rgba(0,0,0,0.55)" }}>{item.description}</p>
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {item.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1 rounded-lg text-[11px]" style={{ fontWeight: 500, color: "rgba(0,0,0,0.5)", backgroundColor: "rgba(0,0,0,0.04)" }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                        {item.link && (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[12px] mt-2 hover:gap-2.5 transition-all" style={{ fontWeight: 600, color: "#0071E3" }}>
                            <Github size={13} /> Ver en GitHub <ExternalLink size={11} />
                          </a>
                        )}
                      </motion.div>
                    </div>
                  </div>

                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="w-10 h-10 rounded-full flex items-center justify-center border-4 border-white"
                      style={{ backgroundColor: config.color, boxShadow: `0 0 0 3px ${config.color}20` }}
                    >
                      <Icon size={16} style={{ color: "#fff" }} />
                    </motion.div>
                  </div>

                  <div className="hidden md:block flex-1" />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
