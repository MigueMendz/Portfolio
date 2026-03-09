import { Github, Linkedin, Mail} from "lucide-react";

export function Footer() {
  return (
    <footer
      className="py-10 px-6 border-t border-black/5"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[14px]" style={{ fontWeight: 700, color: "#000" }}>
            {"<"}
            <span style={{ color: "#0071E3" }}>Dev</span>
            {" />"}
          </span>
          <span className="text-[13px]" style={{ fontWeight: 400, color: "rgba(0,0,0,0.35)" }}>
            · © 2025
          </span>
        </div>

        <p className="flex items-center gap-1.5 text-[13px]" style={{ fontWeight: 400, color: "rgba(0,0,0,0.35)" }}>
          Ingeniero en Software
        </p>

        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: "https://github.com/MigueMendz" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/miguemedz" },
            { icon: Mail, href: "miguemendz.dev@gmail.com" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center text-black/30 hover:text-[#0071E3] hover:bg-[#0071E3]/5 transition-all"
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
