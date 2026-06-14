import React from "react";
import profileImage from "../images/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: "120px 0",
        background: "#050505",
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "8px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(212, 247, 85, 0.3)",
              color: "#e8ff47",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "20px",
            }}
          >
            About Me
          </span>

          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: "700",
              color: "#fff",
              marginBottom: "20px",
              lineHeight: 1.1,
            }}
          >
            Turning Complex Ideas Into Seamless Experiences
          </h2>

          <p
            style={{
              color: "#888",
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "20px",
              lineHeight: 1.8,
            }}
          >
            Driven by technology, inspired by design, and focused on delivering
            experiences that create real-world impact.
          </p>
        </div>

        {/* Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* Left Image */}
          <div>
            <div
              style={{
                width: "100%",
                aspectRatio: "4/5",
                borderRadius: "30px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(135deg, #121212 0%, #191919 100%)",
              }}
            >
              <img
                src={profileImage}
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <p
              style={{
                color: "#b0b0b0",
                fontSize: "18px",
                lineHeight: "1.9",
                marginBottom: "28px",
              }}
            >
              I am a UI/UX Designer and Software Engineering graduate
              passionate about creating intuitive and engaging digital
              experiences. I combine creative design thinking with technical
              expertise to build user-centered solutions.
            </p>

            <p
              style={{
                color: "#b0b0b0",
                fontSize: "18px",
                lineHeight: "1.9",
                marginBottom: "28px",
              }}
            >
              Through my experience at Gamage Recruiters and SLTMobitel Digital
              Lab, I have worked on designing interfaces and developing modern
              web applications, strengthening my skills in both design and
              development.
            </p>

            <p
              style={{
                color: "#b0b0b0",
                fontSize: "18px",
                lineHeight: "1.9",
                marginBottom: "40px",
              }}
            >
              Skilled in React, JavaScript, HTML, CSS, Python, Node.js, MySQL,
              and Figma, I enjoy transforming ideas into seamless, functional,
              and impactful digital products.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="/cv/Romeshika's New.pdf"
                download
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px 20px",
                  background: "#e8ff47",
                  color: "#000",
                  fontWeight: "500",
                  fontSize: "15px",
                  borderRadius: "30px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow =
                    "0 10px 25px rgba(232,255,71,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                Download CV ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;