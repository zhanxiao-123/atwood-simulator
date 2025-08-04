// src/components/SuggestionPanel.jsx
import React from 'react';

export default function SuggestionPanel({ m1, m2 }) {
    const ratio = (m2 / m1).toFixed(2);
    return (
        <div>
            <h3>Suggestions</h3>
            <p>Mass ratio m₂/m₁ = {ratio}. {ratio > 1 ? 'Object 2 will go down.' : 'Object 1 will go down.'}</p>
            <p>When m₂ = m₁, system stays static. Try varying masses to observe behavior.</p>
        </div>
    );
}
