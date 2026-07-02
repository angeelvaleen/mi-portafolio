import { useEffect, useState } from "react";
import useScroll from "./hooks/useScroll";
import useActiveSection from "./hooks/useActiveSection";
import InicioSection from "./components/sections/InicioSection";
import PerfilSection from "./components/sections/PerfilSection";
import StackSection from "./components/sections/StackSection";
import ProcesoSection from "./components/sections/ProcesoSection";
import EspecializacionesSection from "./components/sections/EspecializacionesSection";
import ProyectosSection from "./components/sections/ProyectosSection";
import ContactoSection from "./components/sections/ContactoSection";
import { HERO_HIGHLIGHTS, SECTIONS, SECTION_IDS } from "./data/portfolioContent";

export default function Portfolio() {
  const [cursor, setCursor] = useState({ x: -200, y: -200 });
  const [typed, setTyped] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScroll();
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    let index = 0;
    const fullText = "AI-Augmented Frontend Developer\n& Systems Engineer";
    const typingInterval = setInterval(() => {
      setTyped(fullText.slice(0, index + 1));
      index += 1;
      if (index >= fullText.length) clearInterval(typingInterval);
    }, 28);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const handleMove = (event) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const scrollTo = (id) => {
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
        
        /* BOTONES Y ETIQUETAS */
        .tag-chip { border: 1px solid rgba(111,139,148,0.3); padding: 4px 12px; font-size: 10px; color: #6f8b94; font-family: 'Space Mono', monospace; }
        .contact-input { width: 100%; background: transparent; border: none; border-bottom: 1px solid rgba(111,139,148,0.25); padding: 12px 0; font-size: 14px; color: #fff; }
        .btn-send { display: inline-flex; align-items: center; gap: 10px; padding: 14px 32px; border: 1px solid rgba(255,255,255,0.3); background: transparent; color: #fff; font-size: 12px; font-family: 'Space Mono', monospace; cursor: pointer; transition: 0.3s; margin-top: 32px; }
        .btn-send:hover { background: rgba(255,255,255,0.06); border-color: #fff; }
        .social-link { text-decoration: none; font-family: 'Space Mono', monospace; font-size: 10px; color: #6f8b94; border: 1px solid rgba(111,139,148,0.2); padding: 6px 12px; transition: 0.3s; }
        .social-link:hover { color: #fff; border-color: #fff; background: rgba(255,255,255,0.05); }
        .status-badge { font-family: 'Space Mono', monospace; font-size: 8px; letter-spacing: 0.2em; padding: 3px 8px; border: 1px solid; }
        .sb-finished { border-color: #5bcea8; color: #5bcea8; }
        .sb-live { border-color: #8b9cf6; color: #8b9cf6; }
        .sb-wip { border-color: #f0a96a; color: #f0a96a; }

        /* DECORACIONES */
        .grid-bg { background-image: linear-gradient(rgba(32,75,94,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(32,75,94,0.07) 1px, transparent 1px); background-size: 60px 60px; }
        .diagonal-text { font-family: 'Syne', sans-serif; font-size: clamp(56px, 9vw, 120px); font-weight: 800; color: transparent; -webkit-text-stroke: 1px rgba(111,139,148,0.15); position: absolute; right: -20px; top: 50%; transform: translateY(-50%); pointer-events: none; white-space: nowrap; }
        .cursor-dot { pointer-events: none; position: fixed; z-index: 9999; border-radius: 50%; }
        
        /* TARJETAS GLASSMORPHISM */
        .glass-card { background: rgba(255,255,255,0.045); border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 18px 60px rgba(0,0,0,0.16); backdrop-filter: blur(12px); }
        .soft-panel { background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.08); border-radius: 22px; box-shadow: 0 14px 35px rgba(0,0,0,0.18); }
        
        /* TARJETA HERO CORREGIDA Y ANIMADA */
        .hero-card { 
          border-radius: 32px; 
          padding: 40px; 
          display: flex; 
          flex-direction: column; 
          gap: 16px; 
          align-self: start; 
          height: max-content;
          max-width: 450px;   
          margin-left: auto;  
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
        }
        
        .hero-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 65px rgba(0,0,0,0.4);
          border: 1px solid rgba(159, 232, 202, 0.3);
        }

        /* MARCO DE FOTO PREMIUM */
        .photo-frame { 
          padding: 12px; 
          border-radius: 36px; 
          background: rgba(255, 255, 255, 0.02); 
          border: 1px solid rgba(159, 232, 202, 0.15); 
          box-shadow: 0 20px 50px rgba(0,0,0,0.3), inset 0 0 20px rgba(159, 232, 202, 0.05);
          backdrop-filter: blur(10px);
          transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
          width: fit-content;
        }

        .photo-frame:hover {
          transform: translateY(-6px);
          border-color: rgba(159, 232, 202, 0.5); 
          box-shadow: 0 30px 60px rgba(0,0,0,0.4), inset 0 0 30px rgba(159, 232, 202, 0.1);
        }

        .photo-frame img {
          border-radius: 26px; 
          display: block;
          width: 100%;
          max-width: 320px; 
          height: auto;
        }

        /* CERTIFICADOS */
        .cert-card { border-radius: 20px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.045); cursor: pointer; transition: transform 0.25s ease, box-shadow 0.25s ease; box-shadow: 0 12px 30px rgba(0,0,0,0.16); }
        .cert-card:hover { transform: translateY(-4px); box-shadow: 0 18px 44px rgba(0,0,0,0.24); }
        .cert-modal { position: fixed; inset: 0; background: rgba(0,0,0,0.85); display: flex; align-items: center; justify-content: center; z-index: 2000; padding: 24px; }
        .cert-modal-panel { width: min(900px, 100%); background: #001f36; border: 1px solid rgba(255,255,255,0.14); border-radius: 20px; overflow: hidden; box-shadow: 0 24px 60px rgba(0,0,0,0.35); }
        
        /* GRID DE PROYECTOS VERTICALES */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
          margin-top: 60px;
        }

        .proj-card-vertical {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
          height: 100%;
        }

        .proj-card-vertical:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 50px rgba(0,0,0,0.3);
          border-color: rgba(159, 232, 202, 0.3);
        }

        .proj-image-wrapper {
          height: 220px;
          overflow: hidden;
          position: relative;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .proj-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .proj-card-vertical:hover .proj-image-wrapper img {
          transform: scale(1.08);
        }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }

        /* ============================================================
           RESPONSIVE MÓVIL — solo layout, sin cambios de diseño/colores
           ============================================================ */

        @media (hover: none) and (pointer: coarse) {
          .cursor-dot { display: none !important; }
        }

        @media (max-width: 768px) {
          /* NAV */
          nav { padding-left: 20px !important; padding-right: 20px !important; }
          .nav-desktop-links { display: none !important; }
          .nav-status-badge { display: none !important; }
          .mobile-hamburger { display: flex !important; }

          /* PADDING DE SECCIONES */
          #inicio {
            padding-left: 20px !important; padding-right: 20px !important;
            padding-top: 100px !important; padding-bottom: 60px !important;
            align-items: flex-start !important;
          }
          #perfil, #certificados {
            padding-left: 20px !important; padding-right: 20px !important;
            padding-top: 60px !important; padding-bottom: 60px !important;
          }
          #stack, #proceso, #proyectos, #contacto {
            padding-left: 20px !important; padding-right: 20px !important;
            padding-top: 72px !important; padding-bottom: 72px !important;
          }
          footer { padding: 28px 20px !important; }

          /* HERO */
          .hero-main-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .hero-card { max-width: 100% !important; margin-left: 0 !important; padding: 22px !important; }
          .hero-typed-title { font-size: clamp(36px, 11vw, 54px) !important; }
          .diagonal-text { display: none !important; }

          /* PERFIL */
          .perfil-main-grid { grid-template-columns: 1fr !important; gap: 32px !important; }

          /* STACK */
          .stack-main-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 14px !important; }
          .stack-main-grid .soft-panel { min-height: auto !important; }

          /* PROYECTOS — modal split-screen a columna única */
          .proj-modal-grid { grid-template-columns: 1fr !important; max-width: 95vw !important; }
          .proj-modal-img-side {
            height: 220px !important; min-height: 220px !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.08) !important;
          }
          .proj-modal-info { padding: 28px 20px !important; }

          /* CONTACTO */
          .contacto-main-grid { grid-template-columns: 1fr !important; gap: 20px !important; }

          /* HEADINGS SYNE */
          .section-heading-syne { font-size: 28px !important; }
        }

        @media (max-width: 480px) {
          .stack-main-grid { grid-template-columns: 1fr !important; }
          .hero-card { padding: 18px !important; }
          .proj-modal-info { padding: 20px 16px !important; }
        }
      `}</style>

      <div className="cursor-dot" style={{ left: cursor.x - 4, top: cursor.y - 4, width: 8, height: 8, background: "#fff" }} />
      <div className="cursor-dot" style={{ left: cursor.x - 20, top: cursor.y - 20, width: 40, height: 40, border: "1px solid rgba(111,139,148,0.4)", transition: "left 0.12s, top 0.12s" }} />

      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 48px", height: 64, background: scrollY > 40 ? "rgba(0,31,54,0.97)" : "transparent", backdropFilter: scrollY > 40 ? "blur(20px)" : "none", transition: "all 0.4s" }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15, cursor: "pointer" }} onClick={() => scrollTo("inicio")}>AngeelSystem</div>
        <div className="nav-desktop-links" style={{ display: "flex", gap: 36 }}>
          {SECTIONS.map((section, index) => (
            <button key={section.id} className={`nav-link ${activeSection === index ? "active" : ""}`} onClick={() => scrollTo(section.id)}>{section.label}</button>
          ))}
        </div>
        <button
          className="mobile-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "1px solid rgba(111,139,148,0.3)", color: "#fff", width: 36, height: 36, cursor: "pointer", alignItems: "center", justifyContent: "center", fontFamily: "'Space Mono', monospace", fontSize: 14, borderRadius: 4 }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
        <div className="nav-status-badge" style={{ fontSize: 9, color: "#5bcea8", fontFamily: "'Space Mono', monospace" }}>● OPEN TO WORK</div>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", top: 64, left: 0, right: 0, zIndex: 99, background: "rgba(0,31,54,0.98)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid rgba(111,139,148,0.12)", padding: "12px 20px 20px", display: "flex", flexDirection: "column" }}>
          {SECTIONS.map((section, index) => (
            <button key={section.id} className={`nav-link ${activeSection === index ? "active" : ""}`} onClick={() => { scrollTo(section.id); setMenuOpen(false); }} style={{ padding: "13px 0", borderBottom: "1px solid rgba(111,139,148,0.08)", textAlign: "left", width: "100%" }}>{section.label}</button>
          ))}
        </div>
      )}

      <InicioSection typed={typed} highlights={HERO_HIGHLIGHTS} />
      <PerfilSection />
      <StackSection />
      <ProcesoSection />    {/* AQUÍ VA LA NUEVA SECCIÓN */}
      <EspecializacionesSection />    
      <ProyectosSection />
      <ContactoSection />

      <footer style={{ padding: "48px", textAlign: "center", background: "#001f36", borderTop: "1px solid rgba(111,139,148,0.08)" }}>
        <div style={{ fontSize: 9, color: "#204b5e", fontFamily: "'Space Mono', monospace" }}>
          © 2026 · ANGÉLICA VALENCIA LÓPEZ · ISC
        </div>
      </footer>
    </div>
  );
}