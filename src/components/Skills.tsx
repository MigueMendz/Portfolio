import { motion } from "motion/react";
import { FadeIn } from "./FadeIn";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    title: "TypeScript",
    color: "#3178C6",
    skills: [
      { name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg` },
      { name: "Nest.js", icon: `${DEVICON}/nestjs/nestjs-original.svg` },
      { name: "Express.js", icon: `${DEVICON}/express/express-original.svg` },
      { name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
    ],
  },
  {
    title: "JavaScript",
    color: "#F7DF1E",
    skills: [
      { name: "JavaScript", icon: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "React.js", icon: `${DEVICON}/react/react-original.svg` },
      { name: "Angular", icon: `${DEVICON}/angular/angular-original.svg` },
      { name: "Vue.js", icon: `${DEVICON}/vuejs/vuejs-original.svg` },
    ],
  },
  {
    title: "Backend",
    color: "#777BB4",
    skills: [
      { name: "PHP", icon: `${DEVICON}/php/php-original.svg` },
      { name: "Laravel", icon: `${DEVICON}/laravel/laravel-original.svg` },
      { name: "C#", icon: `${DEVICON}/csharp/csharp-original.svg` },
      { name: ".NET", icon: `${DEVICON}/dot-net/dot-net-original.svg` },
    ],
  },
  {
    title: "Python & Mobile",
    color: "#3776AB",
    skills: [
      { name: "Python", icon: `${DEVICON}/python/python-original.svg` },
      { name: "FastAPI", icon: `${DEVICON}/fastapi/fastapi-original.svg` },
      { name: "Django", icon: `${DEVICON}/django/django-plain.svg` },
      { name: "Dart", icon: `${DEVICON}/dart/dart-original.svg` },
      { name: "Flutter", icon: `${DEVICON}/flutter/flutter-original.svg` },
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "#FF9900",
    skills: [
      { name: "AWS", icon: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Docker", icon: `${DEVICON}/docker/docker-original.svg` },
      { name: "Kubernetes", icon: `${DEVICON}/kubernetes/kubernetes-original.svg` },
      { name: "Jenkins", icon: `${DEVICON}/jenkins/jenkins-original.svg` },
    ],
  },
  {
    title: "Bases de Datos",
    color: "#336791",
    skills: [
      { name: "MySQL", icon: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
    ],
  },
];

function Skill({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.05 * index }}
      whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
      className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-black/5 cursor-default transition-all"
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-black/[0.02] group-hover:bg-[#0071E3]/5 transition-colors">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <span
        className="text-[13px] text-center"
        style={{ fontWeight: 500, color: "rgba(0,0,0,0.7)" }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 relative"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn margin="-80px">
          <div className="text-center mb-20">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-[12px] tracking-widest uppercase mb-4"
              style={{ fontWeight: 600, color: "#0071E3", backgroundColor: "rgba(0,113,227,0.08)" }}
            >
              Tech Stack
            </span>
            <h2
              className="text-[clamp(2rem,4vw,3rem)] tracking-tight mb-4"
              style={{ fontWeight: 800, color: "#000" }}
            >
              Skills & Herramientas
            </h2>
            <p
              className="text-[15px] max-w-lg mx-auto"
              style={{ fontWeight: 400, color: "rgba(0,0,0,0.45)" }}
            >
              Tecnologías con las que trabajo día a día para construir soluciones robustas y escalables.
            </p>
          </div>
        </FadeIn>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, catIndex) => (
            <FadeIn key={category.title} delay={0.1 * catIndex} margin="-60px">
              <div className="bg-white rounded-3xl border border-black/5 p-7 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-1.5 h-8 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <h3
                    className="text-[16px]"
                    style={{ fontWeight: 700, color: "#000" }}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, i) => (
                    <Skill key={skill.name} skill={skill} index={i + catIndex * 2} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Focus Badge */}
        <FadeIn delay={0.4} margin="-40px">
          <div className="mt-16 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl border border-black/5"
              style={{
                background: "linear-gradient(135deg, #000 0%, #1a1a2e 100%)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
              }}
            >
              <div className="flex -space-x-2">
                <img
                  src={`${DEVICON}/typescript/typescript-original.svg`}
                  alt="TypeScript"
                  className="w-8 h-8 rounded-lg bg-white/10 p-1"
                />
                <img
                  src={`${DEVICON}/nestjs/nestjs-original.svg`}
                  alt="Nest.js"
                  className="w-8 h-8 rounded-lg bg-white/10 p-1"
                />
                <img
                  src={`${DEVICON}/nodejs/nodejs-original.svg`}
                  alt="Node.js"
                  className="w-8 h-8 rounded-lg bg-white/10 p-1"
                />
                <img
                  src={`${DEVICON}/docker/docker-original.svg`}
                  alt="Docker"
                  className="w-8 h-8 rounded-lg bg-white/10 p-1"
                />
              </div>
              <div>
                <p className="text-[14px] text-white" style={{ fontWeight: 600 }}>
                  Enfoque principal
                </p>
                <p className="text-[12px]" style={{ fontWeight: 400, color: "rgba(255,255,255,0.5)" }}>
                  TypeScript · Backend · DevOps
                </p>
              </div>
              <div
                className="w-2 h-2 rounded-full animate-pulse ml-2"
                style={{ backgroundColor: "#0071E3" }}
              />
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
