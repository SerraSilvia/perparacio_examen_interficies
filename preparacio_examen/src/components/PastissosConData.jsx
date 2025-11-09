// src/components/Pastissos.jsx
import './Pastissos.css';
import { pastelesDisponibles } from "../data/pasteles";

export default function Pastissos() {
  return (
    <div>
      <h1>Pastissos deliciosos</h1>
      <ul className="pastel-list">
        {pastelesDisponibles.map((p, index) => (
          <li key={index} className="pastel-item">
            <div className="pastel-card">
              <h3>{p.nombre}</h3>
              <img src={p.img} alt={p.nombre} />
              <p>Preu: {p.precio}€</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
