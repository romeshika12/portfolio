import React from "react";
import { projects } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        padding: "120px 0",
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "8px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(217, 247, 85, 0.3)",
              color: "#e8ff47",
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Portfolio
          </span>

          <h2
            className="section-title"
            style={{
              fontSize: "clamp(42px, 5vw, 72px)",
              marginBottom: "16px",
              fontWeight: "700",
            }}
          >
            Featured Design Projects
          </h2>

          <p
            style={{
              color: "#888",
              maxWidth: "650px",
              margin: "0 auto",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            A collection of UI/UX case studies showcasing my approach to
            creating intuitive, visually engaging, and user-centered digital
            experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
            gap: "28px",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;