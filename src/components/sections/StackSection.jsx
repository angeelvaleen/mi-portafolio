import AnimatedLine from "../AnimatedLine";
import SkillBar from "../SkillBar";
import { SKILLS } from "../../data/portfolioContent";

export default function StackSection() {
  return (
    <section
      id="stack"
      style={{
        padding: "120px 48px",
        width: "100%",
        background: "#001f36",
        borderTop: "1px solid rgba(111,139,148,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            marginBottom: 56,
          }}
        >
          <span className="section-num">02 —</span>

          <AnimatedLine>
            <span
              className="section-heading-syne"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 42,
                fontWeight: 800,
              }}
            >
              Stack tecnológico
            </span>
          </AnimatedLine>
        </div>

        <div
          className="stack-main-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 24,
          }}
        >
          {SKILLS.map(({ cat, items }, index) => (
            <div
              key={cat}
              className="soft-panel"
              style={{
                padding: "24px 22px",
                minHeight: 280,
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 12,
                  color: "#9fe8ca",
                  letterSpacing: "0.2em",
                  marginBottom: 18,
                }}
              >
                {cat.toUpperCase()}
              </div>

              {items.map(([name, value], itemIndex) => (
                <SkillBar
                  key={name}
                  name={name}
                  val={value}
                  delay={index * 0.05 + itemIndex * 0.04}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}