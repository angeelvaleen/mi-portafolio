import AnimatedLine from "../AnimatedLine";

const PROCESS_STEPS = [
  {
    id: "01",
    title: "Arquitectura & AI Planning",
    subtitle: "Planificación Estratégica",
    desc: "Análisis de requerimientos y diseño de bases de datos. Me apoyo en modelos de IA para estructurar arquitecturas escalables y generar prototipos rápidos antes de codificar.",
  },
  {
    id: "02",
    title: "AI-Augmented Frontend",
    subtitle: "React & Desarrollo Ágil",
    desc: "Construcción de interfaces modernas. Utilizo la IA como copiloto para generar estructuras de componentes, refactorizar código y acelerar la implementación de la UI.",
  },
  {
    id: "03",
    title: "Lógica Backend",
    subtitle: "APIs & Debugging Inteligente",
    desc: "Desarrollo del motor con Node.js o PHP. Empleo herramientas de inteligencia artificial para optimizar consultas, generar algoritmos complejos y resolver bugs en tiempo récord.",
  },
  {
    id: "04",
    title: "Seguridad Defensiva",
    subtitle: "Auditoría & Prevención",
    desc: "Configuración de entornos seguros en Linux. Integro análisis asistido por IA para auditar el código, detectar vulnerabilidades tempranas y proteger los endpoints.",
  },
];

export default function ProcesoSection() {
  return (
    <section
      id="proceso"
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
          <span className="section-num">03 —</span>

          <AnimatedLine>
            <span
              className="section-heading-syne"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 42,
                fontWeight: 800,
              }}
            >
              Flujo de Trabajo
            </span>
          </AnimatedLine>
        </div>

        {/* CUADRÍCULA DEL PROCESO */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.id}
              className="soft-panel"
              style={{
                padding: "40px 32px",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition:
                  "transform 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor =
                  "rgba(159, 232, 202, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor =
                  "rgba(255,255,255,0.08)";
              }}
            >
              {/* NÚMERO GIGANTE DE FONDO (MARCA DE AGUA) */}
              <div
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "-10px",
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "120px",
                  fontWeight: 800,
                  color: "rgba(255,255,255,0.03)",
                  pointerEvents: "none",
                  lineHeight: 1,
                }}
              >
                {step.id}
              </div>

              {/* CONTENIDO */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 11,
                    color: "#9fe8ca",
                    marginBottom: 12,
                    letterSpacing: "0.1em",
                  }}
                >
                  PASO {step.id}
                </div>

                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 22,
                    color: "#fff",
                    margin: "0 0 4px 0",
                  }}
                >
                  {step.title}
                </h3>

                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10,
                    color: "#6f8b94",
                    marginBottom: 20,
                  }}
                >
                  {step.subtitle}
                </div>

                <p
                  style={{
                    color: "#9db0bc",
                    fontSize: 14,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}