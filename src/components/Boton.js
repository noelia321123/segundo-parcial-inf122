import React, { useState } from 'react';
import './App.css';

function App() {
  const [metas, setMetas] = useState([]);
  const [nuevaMeta, setNuevaMeta] = useState('');

  const agregarMeta = () => {
    if (nuevaMeta.trim() !== '') {
      setMetas([...metas, { tarea: nuevaMeta, completa: false }]);
      setNuevaMeta('');
    }
  };

  const marcarCompleta = (index) => {
    const nuevasMetas = [...metas];
    nuevasMetas[index].completa = true;
    setMetas(nuevasMetas);
  };

  const eliminarMeta = (index) => {
    const nuevasMetas = metas.filter((_, i) => i !== index);
    setMetas(nuevasMetas);
  };

  return (
    <div className="App">
      <h1>Mis Metas</h1>
      <input
        type="text"
        value={nuevaMeta}
        onChange={(e) => setNuevaMeta(e.target.value)}
      />
      <button onClick={agregarMeta}>Agregar Meta</button>
      <ul>
        {metas.map((meta, index) => (
          <li key={index}>
            {meta.tarea}
            {!meta.completa && (
              <button onClick={() => marcarCompleta(index)}>Marcar Completa</button>
            )}
            <button onClick={() => eliminarMeta(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
