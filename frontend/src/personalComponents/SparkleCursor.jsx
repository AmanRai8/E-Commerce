import { useEffect, useRef, useState } from "react";

const SparkleCursor = () => {
  const [trail, setTrail] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Create a new sparkle dot
      const sparkle = {
        id: Math.random(),
        x,
        y,
        size: Math.random() * 6 + 4,
        opacity: 1,
      };

      setTrail((prev) => [...prev.slice(-20), sparkle]); // keep last 20 sparkles
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Remove sparkles gradually
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail((prev) =>
        prev
          .map((s) => ({ ...s, opacity: s.opacity - 0.05 }))
          .filter((s) => s.opacity > 0)
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50">
      {trail.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-cyan-600 blur-sm"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            transform: "translate(-50%, -50%)",
            transition: "opacity 0.2s ease-out",
          }}
        />
      ))}
    </div>
  );
};

export default SparkleCursor;
