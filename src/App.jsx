import { useState, useEffect, useRef, useCallback } from "react";
// Importa tu foto aquí
import fotoPerfil from "./assets/perfil_angelica.jpg";
// Importación de imágenes de proyectos (Corregido: nombres únicos)
import imgProyecto1 from "./assets/logic.jpg";
import imgProyecto2 from "./assets/azteca.jpg";
import imgProyecto3 from "./assets/banco.jpg";
import imgProyecto0 from "./assets/proceso.jpg";
// import imgProyecto4 from "./assets/hdric_web.jpg"; // Descomenta cuando las tengas
// import imgProyecto5 from "./assets/hdric_bot.jpg";

const SECTIONS = ["_inicio", "_perfil", "_stack", "_proyectos", "_contacto"];

const PROJECTS = [
  {
    id: "01",
    name: "SWITCHLOGIC (NET CONFIG)",
    type: "Network Infrastructure Manager",
    year: "2025",
    desc: "Herramienta de gestión de infraestructura de red diseñada para la administración centralizada de switches multi-marca. Implementa persistencia local avanzada.",
    stack: ["React", "JSX", "localStorage", "CSV Export", "Tailwind"],
    status: "FINISHED",
    image: imgProyecto1 // <--- Imagen asignada
  },
  {
    id: "02",
    name: "SISTEMA AZTECA",
    type: "Sports Management System",
    year: "2025",
    desc: "Plataforma integral para la administración de ligas de fútbol. Incluye arquitectura PHP-MySQL robusta con autenticación multi-rol y auditoría en tiempo real.",
    stack: ["PHP", "MySQL", "PDO", "Apache", "Linux Mint"],
    status: "FINISHED",
    image: imgProyecto2 // <--- Imagen asignada
  },
  {
    id: "03",
    name: "BANCOSYS",
    type: "Real-time Queue Management",
    year: "2024",
    desc: "Sistema de gestión de turnos bancarios de alta disponibilidad. Implementa comunicación bidireccional en tiempo real mediante WebSockets y arquitectura PERN.",
    stack: ["PostgreSQL", "Express", "React", "Node.js", "Socket.io", "Docker", "Azure"],
    status: "LIVE",
    image: imgProyecto3 // <--- Imagen asignada
  },
];

const SKILLS = [
  { cat: "Backend", items: [["PHP", 90], ["Node.js", 70], ["Express", 68], ["MySQL", 92], ["PostgreSQL", 75]] },
  { cat: "Frontend", items: [["React", 75], ["JavaScript", 88], ["HTML/CSS", 90], ["Vite", 75]] },
  { cat: "Infra", items: [["Docker", 72], ["Linux", 80], ["Apache", 75], ["Git", 85], ["Socket.io", 78]] },
  { cat: "Otros", items: [["C++", 70], ["Python", 65], ["PDO/SQL", 88]] },
];

function useScroll() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}

function useActiveSection() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const ids = ["inicio", "perfil", "stack", "proyectos", "contacto"];
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const i = ids.indexOf(e.target.id);
            if (i !== -1) setActive(i);
          }
        });
      },
      { threshold: 0.3 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  return active;
}

function AnimLine({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ overflow: "hidden", ...style }}>
      <div style={{ transform: vis ? "translateY(0)" : "translateY(100%)", opacity: vis ? 1 : 0, transition: `transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, opacity 0.6s ease ${delay}s` }}>
        {children}
      </div>
    </div>
  );
}

function SkillBar({ name, val, delay }) {
  const [w, setW] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTimeout(() => setW(val), delay * 1000 + 200); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [val, delay]);
  return (
    <div ref={ref} style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5, fontSize: 11, letterSpacing: "0.08em" }}>
        <span style={{ color: "#ffffff", fontFamily: "'Space Mono', monospace" }}>{name}</span>
        <span style={{ color: "#6f8b94" }}>{val}%</span>
      </div>
      <div style={{ height: 1, background: "rgba(111,139,148,0.2)", position: "relative" }}>
        <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${w}%`, background: "linear-gradient(90deg, #6f8b94, #ffffff)", transition: "width 1.2s cubic-bezier(0.16,1,0.3,1)" }} />
        <div style={{ position: "absolute", top: -3, width: 7, height: 7, borderRadius: "50%", background: "#fff", left: `${w}%`, transition: "left 1.2s cubic-bezier(0.16,1,0.3,1)", transform: "translateX(-50%)" }} />
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [cursor, setCursor] = useState({ x: -200, y: -200 });
  const [typed, setTyped] = useState("");
  const [activeProj, setActiveProj] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.msg) return;
    setSending(true);
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) setSent(true);
      else console.error('Error al enviar el mensaje');
    } catch (err) {
      console.error('Error de red:', err);
    } finally {
      setSending(false);
    }
  };
  const scrollY = useScroll();
  const activeSection = useActiveSection();

  useEffect(() => {
    let i = 0;
    const FULL = "Full Frontend Developer\n& Systems Engineer";
    const t = setInterval(() => {
      setTyped(FULL.slice(0, i + 1));
      i++;
      if (i >= FULL.length) clearInterval(t);
    }, 38);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const m = e => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", m);
    return () => window.removeEventListener("mousemove", m);
  }, []);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: "#001f36", color: "#ffffff", fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", width: "100vw", overflowX: "hidden", margin: 0, padding: 0 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        body { margin: 0; padding: 0; background: #001f36; width: 100%; overflow-x: hidden; }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        .nav-link { font-family: 'Space Mono', monospace; font-size: 13px; letter-spacing: 0.15em; cursor: pointer; transition: color 0.3s; background: none; border: none; padding: 0; color: #6f8b94; }
        .nav-link:hover, .nav-link.active { color: #fff; }
        .section-num { font-family: 'Space Mono', monospace; font-size: 9px; color: #204b5e; letter-spacing: 0.25em; }
        .proj-item { border-top: 1px solid rgba(111,139,148,0.12); padding: 24px 0; cursor: pointer; transition: padding 0.4s; position: relative; }
        .proj-item:hover { padding-left: 20px; }
        .tag-chip { border: 1px solid rgba(111,139,148,0.3); padding: 4px 12px; font-size: 10px; color: #6f8b94; font-family: 'Space Mono', monospace; }
        .contact-input { width: 100%; background: transparent; border: none; border-bottom: 1px solid rgba(111,139,148,0.25); padding: 12px 0; font-size: 14px; color: #fff; }
        .btn-send { display: inline-flex; align-items: center; gap: 10px; padding: 14px 32px; border: 1px solid rgba(255,255,255,0.3); background: transparent; color: #fff; font-size: 12px; font-family: 'Space Mono', monospace; cursor: pointer; transition: 0.3s; margin-top: 32px; }
        .btn-send:hover { background: rgba(255,255,255,0.06); border-color: #fff; }
        .grid-bg { background-image: linear-gradient(rgba(32,75,94,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(32,75,94,0.07) 1px, transparent 1px); background-size: 60px 60px; }
        .diagonal-text { font-family: 'Syne', sans-serif; font-size: clamp(56px, 9vw, 120px); font-weight: 800; color: transparent; -webkit-text-stroke: 1px rgba(111,139,148,0.15); position: absolute; right: -20px; top: 50%; transform: translateY(-50%); pointer-events: none; white-space: nowrap; }
        .cursor-dot { pointer-events: none; position: fixed; z-index: 9999; border-radius: 50%; }
        .status-badge { font-family: 'Space Mono', monospace; font-size: 8px; letter-spacing: 0.2em; padding: 3px 8px; border: 1px solid; }
        .sb-finished { border-color: #5bcea8; color: #5bcea8; }
        .sb-live { border-color: #8b9cf6; color: #8b9cf6; }
        .sb-wip { border-color: #f0a96a; color: #f0a96a; }
        .social-link { text-decoration: none; font-family: 'Space Mono', monospace; font-size: 10px; color: #6f8b94; border: 1px solid rgba(111,139,148,0.2); padding: 6px 12px; transition: 0.3s; }
        .social-link:hover { color: #fff; border-color: #fff; background: rgba(255,255,255,0.05); }
      `}</style>

      <div className="cursor-dot" style={{ left: cursor.x - 4, top: cursor.y - 4, width: 8, height: 8, background: "#fff" }} />
      <div className="cursor-dot" style={{ left: cursor.x - 20, top: cursor.y - 20, width: 40, height: 40, border: "1px solid rgba(111,139,148,0.4)", transition: "left 0.12s, top 0.12s" }} />

      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 48px", height: 64, background: scrollY > 40 ? "rgba(0,31,54,0.97)" : "transparent", backdropFilter: scrollY > 40 ? "blur(20px)" : "none", transition: "all 0.4s" }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15, cursor: "pointer" }} onClick={() => scrollTo("inicio")}>AngeelSystem</div>
        <div style={{ display: "flex", gap: 36 }}>
          {SECTIONS.map((s, i) => (
            <button key={s} className={`nav-link ${activeSection === i ? "active" : ""}`} onClick={() => scrollTo(s.replace("_", ""))}>{s}</button>
          ))}
        </div>
        <div style={{ fontSize: 9, color: "#5bcea8", fontFamily: "'Space Mono', monospace" }}>● OPEN TO WORK</div>
      </nav>

      <section id="inicio" className="grid-bg" style={{ minHeight: "100vh", width: "100%", display: "flex", alignItems: "center", padding: "0 48px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 900 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48, animation: "fadeUp 0.8s ease both" }}>
            <span className="section-num">00 —</span>
            <span style={{ fontSize: 10, color: "#6f8b94", fontFamily: "'Space Mono', monospace" }}>ANGÉLICA VALENCIA LÓPEZ</span>
          </div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(52px, 8vw, 108px)", fontWeight: 800, lineHeight: 0.92, marginBottom: 40 }}>
            {typed.split("\n").map((line, i) => <div key={i} style={{ color: i === 0 ? "#ffffff" : "#6f8b94" }}>{line}</div>)}
          </div>
        </div>
        <div className="diagonal-text">AVL</div>
      </section>

      <section id="perfil" style={{ padding: "60px 48px", width: "100%", background: "#001f36", borderTop: "1px solid rgba(111,139,148,0.08)", scrollMarginTop: "80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 60, alignItems: "center" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={fotoPerfil} alt="Angélica" style={{ width: "350px", height: "350px", borderRadius: "0px", border: "1px solid rgba(111,139,148,0.2)", filter: "brightness(90%)", objectFit: "cover" }} />
          </div>
          <div>
            <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 32 }}>
              <span className="section-num">01 —</span>
              <AnimLine><span style={{ fontFamily: "'Syne', sans-serif", fontSize: 42, fontWeight: 800 }}>Sobre mí</span></AnimLine>
            </div>
            <p style={{ fontSize: 15, color: "#6f8b94", lineHeight: 1.9, marginBottom: 32 }}>
              Estudiante de Ingeniería en Sistemas Computacionales en el ITVH. Construyo sistemas completos —desde arquitectura de base de datos hasta interfaces de usuario— bajo entornos Linux Mint. Cofundadora de una microempresa de software enfocada en soluciones escalables y ciberseguridad defensiva.
            </p>
            <div style={{ display: "flex", gap: 15, marginBottom: 48, flexWrap: "wrap" }}>
              <a href="https://github.com/angeelvaleen" target="_blank" rel="noreferrer" className="social-link">GITHUB</a>
              <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noreferrer" className="social-link">LINKEDIN</a>
              <a href="https://www.instagram.com/angeel.system/" target="_blank" rel="noreferrer" className="social-link">INSTAGRAM</a>
              <a href="https://www.instagram.com/amjstudio.contact/" target="_blank" rel="noreferrer" className="social-link">AMJ Studio</a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {[["EDAD", "21 Años"], ["UBICACIÓN", "Villahermosa, Tabasco"], ["INTERESES", "Gymrat & Dog Lover"], ["PASIÓN", "Software Development"]].map(([t, s]) => (
                <div key={t} style={{ borderLeft: "2px solid #204b5e", paddingLeft: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#ffffff", marginBottom: 3 }}>{t}</div>
                  <div style={{ fontSize: 9, color: "#6f8b94", fontFamily: "'Space Mono', monospace", letterSpacing: "0.1em" }}>{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="stack" style={{ padding: "120px 48px", width: "100%", background: "#001f36", borderTop: "1px solid rgba(111,139,148,0.08)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 80 }}>
            <span className="section-num">02 —</span>
            <AnimLine><span style={{ fontFamily: "'Syne', sans-serif", fontSize: 42, fontWeight: 800 }}>Stack tecnológico</span></AnimLine>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 48 }}>
            {SKILLS.map(({ cat, items }, ci) => (
              <div key={cat}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize:15, color: "#ffffff", marginBottom: 24 }}>{cat.toUpperCase()}</div>
                {items.map(([n, v], i) => <SkillBar key={n} name={n} val={v} delay={ci * 0.05 + i * 0.04} />)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" style={{ padding: "120px 48px", width: "100%", background: "#001f36", borderTop: "1px solid rgba(111,139,148,0.08)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 64 }}>
            <span className="section-num">03 —</span>
            <AnimLine><span style={{ fontFamily: "'Syne', sans-serif", fontSize: 42, fontWeight: 800 }}>Proyectos</span></AnimLine>
          </div>
          {PROJECTS.map((p, i) => (
            <div key={p.id} className="proj-item" onClick={() => setActiveProj(activeProj === i ? null : i)}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 24, fontWeight: 800 }}>{p.name}</span>
                <span className={`status-badge sb-${p.status.toLowerCase()}`}>{p.status}</span>
              </div>
              {activeProj === i && (
                <div style={{ paddingTop: 30, display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, animation: "fadeUp 0.5s ease" }}>
                  <div style={{ width: "100%", height: "250px", overflow: "hidden", border: "1px solid rgba(111,139,148,0.2)", borderRadius: "4px" }}>
                    <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.8) contrast(1.1)" }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <p style={{ fontSize: 16, color: "#6f8b94", lineHeight: 1.7, marginBottom: 20 }}>{p.desc}</p>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {p.stack.map(s => <span key={s} className="tag-chip">{s}</span>)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" style={{ padding: "120px 48px", width: "100%", background: "#001f36", borderTop: "1px solid rgba(111,139,148,0.08)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100 }}>
          <div>
            <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 48 }}>
              <span className="section-num">04 —</span>
              <AnimLine><span style={{ fontFamily: "'Syne', sans-serif", fontSize: 42, fontWeight: 800 }}>Contacto</span></AnimLine>
            </div>
            <p style={{ color: "#6f8b94", marginBottom: 20 }}>¿Tienes un proyecto? Escríbeme directamente.</p>
            <div style={{ color: "#fff", fontFamily: "'Space Mono', monospace" }}>valencialopez046@gmail.com</div>
          </div>
          <div>
            {sent ? <div style={{ textAlign: "center", padding: "60px 0" }}>✓ MENSAJE ENVIADO</div> : (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <input className="contact-input" placeholder="Nombre completo" onChange={e => setForm({...form, name: e.target.value})} style={{marginBottom: 28}} />
                <input className="contact-input" placeholder="Correo electrónico" onChange={e => setForm({...form, email: e.target.value})} style={{marginBottom: 28}} />
                <textarea className="contact-input" placeholder="Mensaje..." rows={5} onChange={e => setForm({...form, msg: e.target.value})} />
                <button className="btn-send" onClick={handleSubmit} disabled={sending}>
                  <span>{sending ? "ENVIANDO..." : "ENVIAR MENSAJE"}</span>
                  <svg width="24" height="1" viewBox="0 0 24 1"><line x1="0" y1="0.5" x2="24" y2="0.5" stroke="white" strokeWidth="1" /></svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer style={{ padding: "48px", textAlign: "center", background: "#001f36", borderTop: "1px solid rgba(111,139,148,0.08)" }}>
        <div style={{ fontSize: 9, color: "#204b5e", fontFamily: "'Space Mono', monospace" }}>
          © 2026 · ANGÉLICA VALENCIA LÓPEZ · ISC
        </div>
      </footer>
    </div>
  );
}
