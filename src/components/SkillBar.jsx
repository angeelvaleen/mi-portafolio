import { useEffect, useRef, useState } from "react";

export default function SkillBar({ name, val, delay }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(val), delay * 1000 + 200);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay, val]);

  return (
    <div ref={ref} style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5, fontSize: 11, letterSpacing: "0.08em" }}>
        <span style={{ color: "#ffffff", fontFamily: "'Space Mono', monospace" }}>{name}</span>
        <span style={{ color: "#6f8b94" }}>{val}%</span>
      </div>
      <div style={{ height: 1, background: "rgba(111,139,148,0.2)", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: `${width}%`,
            background: "linear-gradient(90deg, #6f8b94, #ffffff)",
            transition: "width 1.2s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -3,
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#fff",
            left: `${width}%`,
            transition: "left 1.2s cubic-bezier(0.16,1,0.3,1)",
            transform: "translateX(-50%)",
          }}
        />
      </div>
    </div>
  );
}
