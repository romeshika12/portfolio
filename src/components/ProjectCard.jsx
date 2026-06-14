import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: hovered
          ? "1px solid rgba(232,255,71,0.3)"
          : "1px solid rgba(255,255,255,0.08)",
        borderRadius: "24px",
        overflow: "hidden",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Project Image */}
      <div
        style={{
          height: "260px",
          overflow: "hidden",
          background: "#111",
        }}
      >
        {!imgError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease",
              transform: hovered ? "scale(1.08)" : "scale(1)",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#666",
              fontSize: "14px",
            }}
          >
            Image Not Found
          </div>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          padding: "28px",
        }}
      >
        {/* Category */}
        <div
          style={{
            fontSize: "12px",
            color: "#e8ff47",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "14px",
            fontWeight: "600",
          }}
        >
          {project.category}
        </div>

        {/* Title */}
        <h3
          style={{
            color: "#fff",
            fontSize: "28px",
            fontWeight: "700",
            lineHeight: "1.3",
            marginBottom: "16px",
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            color: "#888",
            fontSize: "15px",
            lineHeight: "1.8",
            marginBottom: "28px",
          }}
        >
          {project.description}
        </p>

        {/* View Project */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: hovered ? "#e8ff47" : "#aaa",
            textDecoration: "none",
            fontWeight: "500",
            transition: "all 0.3s ease",
          }}
        >
          <FiExternalLink />
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;