import { useState } from "react";
import AnimatedLine from "../AnimatedLine";
import { PROJECTS } from "../../data/portfolioContent";

export default function ProyectosSection() {
  // Estado para saber qué proyecto está abierto en el modal
  const [activeProj, setActiveProj] = useState(null);

  return (
    <section
      id="proyectos"
      style={{
        padding: "120px 48px",
        width: "100%",
        background: "#001f36",
        borderTop: "1px solid rgba(111,139,148,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        {/* ENCABEZADO */}
        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            marginBottom: 64,
          }}
        >
          <span className="section-num">05 —</span>

          <AnimatedLine>
            <span
              className="section-heading-syne"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 42,
                fontWeight: 800,
              }}
            >
              Proyectos
            </span>
          </AnimatedLine>
        </div>

        {/* 1. LOS CUADROS PEQUEÑOS (GRID DE MINIATURAS) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "32px",
          }}
        >
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="soft-panel"
              onClick={() => setActiveProj(proj)}
              style={{
                cursor: "pointer",
                overflow: "hidden",
                transition:
                  "transform 0.3s ease, box-shadow 0.3s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 14px 35px rgba(0,0,0,0.18)";
              }}
            >
              {/* IMAGEN DE LA MINIATURA */}
              <div
                style={{
                  height: "200px",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={proj.image}
                  alt={proj.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.75)",
                  }}
                />
              </div>

              {/* TÍTULO DE LA MINIATURA */}
              <div
                style={{
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 18,
                    color: "#fff",
                    margin: "0 0 8px 0",
                  }}
                >
                  {proj.name}
                </h3>

                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10,
                    color: "#9fe8ca",
                  }}
                >
                  VER DETALLES ↗
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. EL CUADRO AMARILLO (MODAL SPLIT-SCREEN) */}
      {activeProj && (
        <div
          className="cert-modal"
          onClick={() => setActiveProj(null)}
        >
          <div
            className="cert-modal-panel proj-modal-grid"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "1000px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              background: "rgba(0, 31, 54, 0.95)",
              backdropFilter: "blur(20px)",
              position: "relative",
              animation: "fadeUp 0.4s ease",
              overflow: "hidden",
            }}
          >
            {/* BOTÓN DE CERRAR 'X' */}
            <button
              onClick={() => setActiveProj(null)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "rgba(255,255,255,0.05)",
                border:
                  "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                cursor: "pointer",
                zIndex: 10,
                fontFamily: "'Space Mono', monospace",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "rgba(255,255,255,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "rgba(255,255,255,0.05)";
              }}
            >
              ✕
            </button>

            {/* LADO IZQUIERDO: LA FOTO */}
            <div
              className="proj-modal-img-side"
              style={{
                height: "100%",
                minHeight: "450px",
                borderRight:
                  "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <img
                src={activeProj.image}
                alt={activeProj.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* LADO DERECHO: LA INFORMACIÓN */}
            <div
              className="proj-modal-info"
              style={{
                padding: "50px 40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 16,
                }}
              >
                <span
                  className={`status-badge ${
                    activeProj.status === "FINISHED"
                      ? "sb-finished"
                      : "sb-live"
                  }`}
                >
                  {activeProj.status}
                </span>

                <span
                  style={{
                    fontFamily:
                      "'Space Mono', monospace",
                    fontSize: 12,
                    color: "#6f8b94",
                  }}
                >
                  {activeProj.year}
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 32,
                  color: "#fff",
                  margin: "0 0 12px 0",
                  lineHeight: 1.1,
                }}
              >
                {activeProj.name}
              </h2>

              <div
                style={{
                  fontFamily:
                    "'Space Mono', monospace",
                  fontSize: 12,
                  color: "#9fe8ca",
                  marginBottom: 24,
                  letterSpacing: "0.1em",
                }}
              >
                {activeProj.type}
              </div>

              <p
                style={{
                  color: "#9db0bc",
                  fontSize: 15,
                  lineHeight: 1.7,
                  marginBottom: 32,
                }}
              >
                {activeProj.desc}
              </p>

              {/* TECNOLOGÍAS */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                  marginTop: "auto",
                }}
              >
                {activeProj.stack.map((tech) => (
                  <span
                    key={tech}
                    className="tag-chip"
                    style={{
                      fontSize: 11,
                      padding: "6px 14px",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}