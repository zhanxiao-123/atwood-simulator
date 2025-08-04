// src/components/AtwoodCanvas.jsx
import React, { useRef, useEffect, useState } from 'react';

export default function AtwoodCanvas({ m1, m2, running }) {
  const canvasRef = useRef();
  // 初始速度 v、物块1 位置 y1
  const [state] = useState({ v: 0, y1: 150 });

  useEffect(() => {
    const g = 9.81;
    let { v, y1 } = state;
    let raf;
    const step = () => {
      const a = ((m2 - m1) * g) / (m1 + m2);
      v += a * 0.016;
      y1 += v * 0.016;
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, 300, 300);
      // 绘制滑轮
      ctx.beginPath();
      ctx.arc(150, 50, 20, 0, 2 * Math.PI);
      ctx.stroke();
      // 绘制绳子和物块1
      ctx.moveTo(150, 50);
      ctx.lineTo(150 - 100, y1);
      ctx.stroke();
      ctx.fillRect(150 - 100 - 15, y1, 30, 30);
      if (running) raf = requestAnimationFrame(step);
    };
    if (running) raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [running, m1, m2, state]);

  return <canvas ref={canvasRef} width={300} height={300} />;
}
