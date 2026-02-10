import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Rectangulo from './components/Rectangulo.js';

function App() {
  return (
    <div>
      <Rectangulo />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
