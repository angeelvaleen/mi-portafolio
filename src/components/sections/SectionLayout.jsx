export default function SectionLayout({ id, eyebrow, title, children, style = {}, contentStyle = {} }) {
  return (
    <section id={id} style={{ padding: "120px 48px", width: "100%", background: "#001f36", borderTop: "1px solid rgba(111,139,148,0.08)", ...style }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", ...contentStyle }}>
        {eyebrow && title ? (
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 48 }}>
            <span className="section-num">{eyebrow}</span>
            <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 42, fontWeight: 800 }}>{title}</span>
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
