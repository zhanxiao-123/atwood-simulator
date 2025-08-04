// src/components/VelocityChart.jsx
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart, LineController, LineElement,
  PointElement, LinearScale, CategoryScale
} from 'chart.js';
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);

export default function VelocityChart({ m1, m2, running }) {
  const [data, setData] = useState({
    labels: [], datasets: [{ label: 'v(t)', data: [], borderWidth: 1 }]
  });

  useEffect(() => {
    let t = 0, v = 0;
    const interval = setInterval(() => {
      if (!running) return;
      const a = ((m2 - m1) * 9.81) / (m1 + m2);
      v += a * 0.1;
      t += 0.1;
      setData(prev => ({
        labels: [...prev.labels, t.toFixed(1)],
        datasets: [{ ...prev.datasets[0], data: [...prev.datasets[0].data, v.toFixed(2)] }]
      }));
    }, 100);
    return () => clearInterval(interval);
  }, [running, m1, m2]);

  return (
    <div>
      <h3>Velocity vs Time</h3>
      <Line data={data} />
    </div>
  );
}
