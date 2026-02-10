import React, { useState } from 'react';

export default function Triangolo() {
  const [base, setBase] = useState(4);
  const [altezza, setAltezza] = useState(3);
  const area = (base * altezza) / 2;

  return (
    <div style={{ padding: '10px', border: '1px solid black', margin: '10px' }}>
      <h2>Triangolo</h2>
      <p>Base: {base}, Altezza: {altezza}</p>
      <p>Area: {area}</p>
    </div>
  );
}
