import { useState } from "react";
import AnimatedLine from "../AnimatedLine";
import { CONTACT_EMAIL } from "../../data/portfolioContent";

export default function ContactoSection() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    subject: "",
    msg: "",
  });

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async () => {
    // Validamos solo los campos necesarios
    if (
      !form.name ||
      !form.email ||
      !form.msg ||
      !form.subject
    ) {
      alert("Por favor, completa los campos obligatorios");
      return;
    }

    setSending(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSent(true);
      } else {
        console.error("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error de red:", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contacto"
      style={{
        padding: "120px 48px",
        width: "100%",
        background: "#001f36",
        borderTop: "1px solid rgba(111,139,148,0.08)",
      }}
    >
      <div
        className="contacto-main-grid"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "0.95fr 1.05fr",
          gap: 60,
        }}
      >
        <div
          className="soft-panel"
          style={{
            padding: "34px 30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                gap: 16,
                alignItems: "center",
                marginBottom: 28,
              }}
            >
              <span className="section-num">06 —</span>

              <AnimatedLine>
                <span
                  className="section-heading-syne"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 42,
                    fontWeight: 800,
                  }}
                >
                  Contacto
                </span>
              </AnimatedLine>
            </div>

            <p
              style={{
                color: "#8fa3ae",
                lineHeight: 1.8,
                marginBottom: 24,
              }}
            >
              ¿Tienes un proyecto? Me encantaría conversar
              sobre ideas, desarrollo y soluciones más claras
              para cada etapa del producto.
            </p>

            <div
              style={{
                color: "#fff",
                fontFamily: "'Space Mono', monospace",
                fontSize: 13,
                letterSpacing: "0.08em",
              }}
            >
              {CONTACT_EMAIL}
            </div>
          </div>

          <div
            style={{
              marginTop: 24,
              fontSize: 12,
              color: "#6f8b94",
              fontFamily: "'Space Mono', monospace",
              letterSpacing: "0.15em",
            }}
          >
            DISPONIBLE PARA COLABORACIONES Y PROYECTOS
          </div>
        </div>

        <div
          className="soft-panel"
          style={{
            padding: "34px 30px",
          }}
        >
          {sent ? (
            <div
              style={{
                textAlign: "center",
                padding: "60px 0",
                color: "#9fe8ca",
                fontFamily: "'Space Mono', monospace",
                letterSpacing: "0.2em",
              }}
            >
              ✓ MENSAJE ENVIADO
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* 1. Nombre */}
              <input
                className="contact-input"
                placeholder="Nombre completo"
                onChange={(event) =>
                  setForm({
                    ...form,
                    name: event.target.value,
                  })
                }
                style={{
                  marginBottom: 28,
                }}
              />

              {/* 2. Empresa (NUEVO CAMPO) */}
              <input
                className="contact-input"
                placeholder="Empresa / Organización (Opcional)"
                onChange={(event) =>
                  setForm({
                    ...form,
                    company: event.target.value,
                  })
                }
                style={{
                  marginBottom: 28,
                }}
              />

              {/* 3. Correo */}
              <input
                className="contact-input"
                placeholder="Correo electrónico"
                onChange={(event) =>
                  setForm({
                    ...form,
                    email: event.target.value,
                  })
                }
                style={{
                  marginBottom: 28,
                }}
              />

              {/* 4. Motivo (NUEVO SELECTOR) */}
              <select
                className="contact-input"
                defaultValue=""
                onChange={(event) =>
                  setForm({
                    ...form,
                    subject: event.target.value,
                  })
                }
                style={{
                  marginBottom: 28,
                  color: "#6f8b94",
                  background: "transparent",
                  outline: "none",
                  cursor: "pointer",
                  appearance: "none",
                }}
              >
                <option value="" disabled>
                  Selecciona el motivo...
                </option>

                <option
                  value="Oportunidad Laboral"
                  style={{
                    background: "#001f36",
                  }}
                >
                  Oportunidad Laboral
                </option>

                <option
                  value="Proyecto Web / Software"
                  style={{
                    background: "#001f36",
                  }}
                >
                  Proyecto Web / Software
                </option>

                <option
                  value="Ciberseguridad / Auditoría"
                  style={{
                    background: "#001f36",
                  }}
                >
                  Ciberseguridad / Auditoría
                </option>

                <option 
                  value="Consultoría Técnica" 
                  style={{ 
                    background: "#001f36", 
                  }}
                >
                  Consultoría Técnica
                </option>

                <option 
                value="Colaboración Profesional" 
                  style={{ 
                    background: "#001f36", 
                  }}
                >
                  Colaboración Profesional
                </option>

                <option 
                  value="Soporte y Mantenimiento" 
                  style={{ 
                    background: "#001f36", 
                  }}
                >
                  Soporte y Mantenimiento
                </option>

                <option 
                  value="Capacitación / Mentoría" 
                  style={{ 
                    background: "#001f36", 
                  }}
                >
                  Capacitación / Mentoría
                </option>

                <option
                  value="Otro"
                  style={{
                    background: "#001f36",
                  }}
                >
                  Otro
                </option>
                </select>

              {/* 5. Mensaje */}
              <textarea
                className="contact-input"
                placeholder="Mensaje..."
                rows={5}
                onChange={(event) =>
                  setForm({
                    ...form,
                    msg: event.target.value,
                  })
                }
                style={{
                  marginBottom: 1,
                  resize: "none",
                  outline: "none",
                }}
              />

              {/* BOTÓN */}
              <button
                className="btn-send"
                onClick={handleSubmit}
                disabled={sending}
              >
                <span>
                  {sending
                    ? "ENVIANDO..."
                    : "ENVIAR MENSAJE"}
                </span>

                <svg
                  width="24"
                  height="1"
                  viewBox="0 0 24 1"
                >
                  <line
                    x1="0"
                    y1="0.5"
                    x2="24"
                    y2="0.5"
                    stroke="white"
                    strokeWidth="1"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}