// src/components/ControlPanel.jsx
import React from 'react';

export default function ControlPanel({ m1, m2, onM1Change, onM2Change, running, onToggle, onReset }) {
  return (
    <div>
      <h2>Control Panel</h2>
      <label>
        Mass 1:
        <input
          type="number" value={m1} min="0" step="0.1"
          onChange={e => onM1Change(+e.target.value)}
        />
      </label>
      <label style={{ marginLeft: '12px' }}>
        Mass 2:
        <input
          type="number" value={m2} min="0" step="0.1"
          onChange={e => onM2Change(+e.target.value)}
        />
      </label>
      <div style={{ marginTop: '10px' }}>
        <button onClick={onToggle}>
          {running ? 'Pause' : 'Start'}
        </button>
        <button onClick={onReset} style={{ marginLeft: '8px' }}>
          Reset
        </button>
      </div>
    </div>
  );
}
