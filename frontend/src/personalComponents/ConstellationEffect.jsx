import React, { useRef, useEffect } from 'react';

const ConstellationEffect = () => {
  const canvasRef = useRef(null);
  const stars = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    for (let i = 0; i < 100; i++) {
      stars.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2,
      });
    }

    window.addEventListener('mousemove', (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    });

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < stars.current.length; i++) {
        const star = stars.current[i];
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();

        // connect stars close to the mouse
        const dx = star.x - mouse.current.x;
        const dy = star.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.strokeStyle = `rgba(255,255,255,${1 - dist / 100})`;
          ctx.stroke();
        }
      }
      requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9998,
      }}
    />
  );
};

export default ConstellationEffect;