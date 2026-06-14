import React, { useEffect, useState } from "react";

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const skills = [
    "UI/UX Designer",
    "Software Engineer",
    "Freelancer",
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        background: "#050505",
      }}
    >
      {/* Purple Glow */}
      <div
        style={{
          position: "absolute",
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
          top: "-400px",
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: "3px",
            height: "3px",
            borderRadius: "50%",
            background: "#e8ff47",
            opacity: 0.7,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: "0 0 12px #e8ff47",
          }}
        />
      ))}

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1100px",
          width: "100%",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateY(0px)"
              : "translateY(30px)",
            transition: "all .8s ease",
          }}
        >
          {/* Availability Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
              borderRadius: "999px",
              background: "rgba(230, 255, 183, 0.08)",
              border: "1px solid #e8ff47",
              backdropFilter: "blur(12px)",
              color: "#d1d5db",
              marginBottom: "40px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#e8ff47",
                animation: "pulse 2s infinite",
              }}
            />
            Available for freelance work
          </div>

          {/* Heading */}
          <h1
            style={{
              fontSize: "clamp(60px, 9vw, 80px)",
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: "-3px",
              marginBottom: "28px",
              color: "#fff",
            }}
          >
            Hey, I'm
            <br />
            <span
              style={{
                background:
                  "linear-gradient(90deg,#ffffff 0%,#e8ff47 40%,#e8ff47 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
            Romeshika Abeygunarathna
            </span>
          </h1>

          {/* Skills */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "35px",
            }}
          >
            {skills.map((skill, i) => (
              <span
                key={skill}
                style={{
                  padding: "10px 18px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#d4d4d8",
                  fontSize: "14px",
                  backdropFilter: "blur(10px)",
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? "translateY(0)"
                    : "translateY(15px)",
                  transition: `all .6s ease ${i * 0.1}s`,
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Description */}
          <p
            style={{
              maxWidth: "750px",
              margin: "0 auto",
              color: "#a1a1aa",
              fontSize: "20px",
              lineHeight: 1.8,
              marginBottom: "50px",
            }}
          >
            Turning ideas into intuitive digital experiences through thoughtful 
            design, usability, and a strong focus on user satisfaction.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#projects"
              style={{
                padding: "18px 50px",
                borderRadius: "999px",
                background:
                  "#e8ff47",
                color: "#000",
                textDecoration: "none",
                fontWeight: 600,
                boxShadow:
                  "0 2px 40px #e8ff47",
                transition: "0.3s",
              }}
            >
              View My Work
            </a>

            <a
              href="#contact"
              style={{
                padding: "18px 50px",
                borderRadius: "999px",
                border: "1px solid #e8ff47",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(10px)",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                transition: "0.3s",
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%,100%{
            opacity:1;
            transform:scale(1);
          }
          50%{
            opacity:.5;
            transform:scale(1.4);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;