// src/components/Hook.jsx
import { useState } from "react";

export default function Hook() {
  const [comptador, setComptador] = useState(0);

  return (
    <div>
      <h1>Exemple d'Hook useState</h1>
      <p>Valor actual: {comptador}</p>
      <button onClick={() => setComptador(comptador + 1)}>Sumar</button>
      <button onClick={() => setComptador(comptador - 1)}>Restar</button>
    </div>
  );
}
