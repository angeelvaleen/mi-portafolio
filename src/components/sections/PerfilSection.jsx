import AnimatedLine from "../AnimatedLine";
import {
  PROFILE_FACTS,
  PROFILE_PHOTO,
  SOCIAL_LINKS,
} from "../../data/portfolioContent";

export default function PerfilSection() {
  return (
    <section
      id="perfil"
      style={{
        padding: "60px 48px",
        width: "100%",
        background: "#001f36",
        borderTop: "1px solid rgba(111,139,148,0.08)",
        scrollMarginTop: "80px",
      }}
    >
      <div
        className="perfil-main-grid"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(280px, 0.9fr) minmax(0, 1.1fr)",
          gap: 60,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="glass-card photo-frame">
            <img
              src={PROFILE_PHOTO}
              alt="Angélica"
              style={{
                width: "min(100%, 340px)",
                height: "360px",
                borderRadius: 24,
                border: "1px solid rgba(111,139,148,0.18)",
                filter: "brightness(96%) contrast(1.02) saturate(0.95)",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>

        <div>
          <div
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <span className="section-num">01 —</span>

            <AnimatedLine>
              <span
                className="section-heading-syne"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 42,
                  fontWeight: 800,
                }}
              >
                Sobre mí
              </span>
            </AnimatedLine>
          </div>

          <p
            style={{
              fontSize: 15,
              color: "#6f8b94",
              lineHeight: 1.9,
              marginBottom: 24,
            }}
          >
            Ingeniera en Sistemas Computacionales en formación.
            Especializada en el desarrollo de arquitecturas de software
            completas, desde el diseño de bases de datos hasta la creación de
            interfaces de usuario bajo entornos Linux Fedora KDE Plasma.
            Cofundador de un proyecto de software enfocado en soluciones
            escalables, con un firme compromiso hacia la ciberseguridad
            defensiva y la excelencia técnica.
          </p>

          {/* Mantenemos todos tus enlaces originales */}
          <div
            style={{
              display: "flex",
              gap: 15,
              marginBottom: 32,
              flexWrap: "wrap",
            }}
          >
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 18,
            }}
          >
            {PROFILE_FACTS.map(([label, value]) => (
              <div
                key={label}
                className="skill-card"
                style={{
                  borderLeft: "2px solid #204b5e",
                  paddingLeft: 16,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: 10,
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#ffffff",
                    marginBottom: 3,
                  }}
                >
                  {label}
                </div>

                {/* Nota: Asegúrate de que en PROFILE_FACTS tus datos ya no incluyan la edad exacta o ubicación precisa */}
                <div
                  style={{
                    fontSize: 9,
                    color: "#6f8b94",
                    fontFamily: "'Space Mono', monospace",
                    letterSpacing: "0.1em",
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}