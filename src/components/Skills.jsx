import React from "react";
import {
  FaFigma,
  FaReact,
  FaHtml5,
  FaJs,
  FaPython,
  FaGithub,
  FaPhp,
} from "react-icons/fa";

import {
  SiMysql,
  SiPostman,
  SiTailwindcss,
  SiFramer,
  SiSketch,
} from "react-icons/si";

const technologies = [
  { name: "Figma", icon: FaFigma, color: "#ff5e1f" },
  { name: "React JS", icon: FaReact, color: "#61dafb" },
  { name: "MySQL", icon: SiMysql, color: "#4d93d9" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
  { name: "HTML & CSS", icon: FaHtml5, color: "#ff6a32" },

  { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
  { name: "Python", icon: FaPython, color: "#4b8bbe" },
  { name: "PHP", icon: FaPhp, color: "#8892bf" },
  { name: "Postman", icon: SiPostman, color: "#ff6c37" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },

  { name: "Framer", icon: SiFramer, color: "#0055ff" },
  { name: "Sketch", icon: SiSketch, color: "#ffb400" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        padding: "90px 0",
        background: "#050505",
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "8px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(223, 247, 85, 0.3)",
              color: "#e8ff47",
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "18px",
            }}
          >
            Skills update
          </span>

          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: "700",
              color: "#fff",
              marginBottom: "16px",
              lineHeight: 1.1,
            }}
          >
            Design & Development Stack
          </h2>

          <p
            style={{
              color: "#888",
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "17px",
              lineHeight: "1.8",
            }}
          >
            Technologies and tools I use to design, develop, and deliver
            impactful digital experiences.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "18px",
          }}
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div
                key={index}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  padding: "28px 18px",
                  textAlign: "center",
                  backdropFilter: "blur(10px)",
                  transition: "all .3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-5px)";
                  e.currentTarget.style.borderColor =
                    tech.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.08)";
                }}
              >
                <div
                  style={{
                    fontSize: "42px",
                    color: tech.color,
                    marginBottom: "18px",
                  }}
                >
                  <Icon />
                </div>

                <h3
                  style={{
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "12px",
                  }}
                >
                  {tech.name}
                </h3>

                <div
                  style={{
                    width: "35px",
                    height: "2px",
                    background: tech.color,
                    margin: "0 auto",
                    borderRadius: "999px",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;