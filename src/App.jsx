 srcApp.jsx
import React, { useState, useCallback } from 'react';
import GridLayout from '.GridLayout';
import ControlPanel from '.componentsControlPanel';
import AtwoodCanvas from '.componentsAtwoodCanvas';
import VelocityChart from '.componentsVelocityChart';
import SuggestionPanel from '.componentsSuggestionPanel';

export default function App() {
  const [m1, setM1] = useState(1);
  const [m2, setM2] = useState(2);
  const [running, setRunning] = useState(false);

  const toggleRunning = useCallback(() = setRunning(r = !r), []);
  const reset = useCallback(() = window.location.reload(), []);

  return (
    GridLayout
      ControlPanel
        m1={m1} m2={m2}
        onM1Change={setM1}
        onM2Change={setM2}
        running={running}
        onToggle={toggleRunning}
        onReset={reset}
      
      AtwoodCanvas m1={m1} m2={m2} running={running} 
      VelocityChart m1={m1} m2={m2} running={running} 
      SuggestionPanel m1={m1} m2={m2} 
    GridLayout
  );
}
