export default function InicioSection({ typed, highlights }) {
  return (
    <section
      id="inicio"
      className="grid-bg"
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "48px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="hero-main-grid"
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* LADO IZQUIERDO */}
        <div
          style={{
            marginTop: "1vh",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 28,
            }}
          >
            <span className="section-num">00 —</span>

            <span
              style={{
                fontSize: 10,
                color: "#6f8b94",
                fontFamily: "'Space Mono', monospace",
              }}
            >
              ANGÉLICA VALENCIA LÓPEZ
            </span>
          </div>

          <div
            className="hero-typed-title"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(52px, 8vw, 90px)",
              fontWeight: 800,
              lineHeight: 0.84,
            }}
          >
            {typed.split("\n").map((line, index) => (
              <div
                key={index}
                style={{
                  color: index === 0 ? "#ffffff" : "#6f8b94",
                }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>

        {/* LADO DERECHO */}
        <div
          style={{
            alignSelf: "center",
            width: "100%",
          }}
        >
          <div
            className="glass-card hero-card"
            style={{
              borderLeft: "4px solid rgba(159, 232, 202, 0.5)",
            }}
          >
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                color: "#9fe8ca",
                letterSpacing: "0.2em",
                marginBottom: 16,
              }}
            >
              ENFOQUE ACTUAL
            </div>

            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 24,
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Soluciones web claras y escalables
            </div>

            <div
              style={{
                color: "#9db0bc",
                lineHeight: 1.6,
                fontSize: 13,
                marginBottom: 24,
              }}
            >
              Arquitectura, diseño UI, backend y una base sólida en
              seguridad defensiva para que cada producto se vea
              profesional y funcione bien.
            </div>

            {/* STACK / HIGHLIGHTS */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginTop: 10,
              }}
            >
              {highlights.map((item) => (
                <span
                  key={item}
                  style={{
                    color: "#ffffff",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 13,
                    letterSpacing: "0.04em",
                  }}
                >
                  ▸ {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TEXTO DECORATIVO */}
      <div className="diagonal-text">AVL</div>
    </section>
  );
}