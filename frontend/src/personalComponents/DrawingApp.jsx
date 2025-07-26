import React, { useRef, useEffect, useState } from "react";

const DrawingApp = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const startDraw = (e) => {
      setDrawing(true);
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    };

    const draw = (e) => {
      if (!drawing) return;
      ctx.lineTo(e.clientX, e.clientY);
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const endDraw = () => {
      setDrawing(false);
      ctx.closePath();
    };

    canvas.addEventListener("mousedown", startDraw);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", endDraw);

    return () => {
      canvas.removeEventListener("mousedown", startDraw);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", endDraw);
    };
  }, [drawing]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "cyan",
        zIndex: 9997,
      }}
    />
  );
};

export default DrawingApp;
