import { useEffect, useRef, useState } from "react";

export default function AnimatedLine({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ overflow: "hidden", ...style }}>
      <div
        style={{
          transform: visible ? "translateY(0)" : "translateY(100%)",
          opacity: visible ? 1 : 0,
          transition: `transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, opacity 0.6s ease ${delay}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
