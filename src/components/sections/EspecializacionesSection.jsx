import AnimatedLine from "../AnimatedLine";

const SKILLS = [
  {
    category: "Seguridad Informática",
    items: [
      "Seguridad Defensiva y Perimetral",
      "Seguridad de Host (Escritorio)",
      "Seguridad en Servidores",
      "Gobernanza TI",
    ],
  },
  {
    category: "Redes y Conectividad",
    items: [
      "Arquitectura de Redes",
      "Fundamentos CCNA",
      "Protocolos de Seguridad",
    ],
  },
  {
    category: "Desarrollo Web",
    items: [
      "React & Vite",
      "Node.js",
      "Arquitectura Full-Stack",
    ],
  },
  {
    category: "Sistemas y Operaciones",
    items: [
      "Administración Linux",
      "Gestión de Particiones",
      "Mantenimiento Técnico",
    ],
  },
];

export default function EspecializacionesSection() {
  return (
    <section
      id="stack-competencias"
      style={{
        padding: "20px 24px",
        width: "100%",
        height: "100vh",
        background: "#001f36",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        scrollMarginTop: "80px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        {/* Título de sección con tu estilo solicitado */}
        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <span className="section-num">04 —</span>

          <AnimatedLine>
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(32px, 4vw, 42px)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.1,
              }}
            >
              Toolkit
            </span>
          </AnimatedLine>
        </div>

        {/* Grid de 2x2 para que todo esté en pantalla */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
            width: "100%",
          }}
        >
          {SKILLS.map((skill) => (
            <div
              key={skill.category}
              className="skill-card"
              style={{
                padding: "20px 24px",
                background: "rgba(255,255,255,0.03)",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.06)",
                boxSizing: "border-box",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            >
              <h3
                style={{
                  color: "#5bcea8",
                  marginBottom: 12,
                  fontSize: 16,
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                {skill.category}
              </h3>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {skill.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      color: "#a0b3bd",
                      marginBottom: 8,
                      fontSize: 14,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        marginRight: 8,
                        color: "#5bcea8",
                      }}
                    >
                      ▸
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}