// src/components/FormulariPastis.jsx
import { useState } from "react";
import './Formulari.css';

export default function FormulariPastis() {
  const [pastelData, setPastelData] = useState({
    pastel: "",
    preu: 0,
    img: ""
  });

  const [pastelSubmissions, setPastelSubmissions] = useState([]);

  // Pasteles disponibles con imagen
  const pastelesDisponibles = [
    { nombre: "Pastís de xocolata", precio: 15, img: "https://via.placeholder.com/150?text=Xocolata" },
    { nombre: "Pastís de maduixa", precio: 14, img: "https://via.placeholder.com/150?text=Maduixa" },
    { nombre: "Pastís de vainilla", precio: 13, img: "https://via.placeholder.com/150?text=Vainilla" },
    { nombre: "Pastís de formatge", precio: 16, img: "https://via.placeholder.com/150?text=Formatge" }
  ];

  const handlePastelChange = (e) => {
    const seleccionado = pastelesDisponibles.find(p => p.nombre === e.target.value);
    setPastelData({
      pastel: seleccionado.nombre,
      preu: seleccionado.precio,
      img: seleccionado.img
    });
  };

  const handlePastelSubmit = (e) => {
    e.preventDefault();
    if (pastelData.pastel) {
      setPastelSubmissions([...pastelSubmissions, pastelData]);
      console.log("Pasteles seleccionados:", [...pastelSubmissions, pastelData]);
      alert(`Has seleccionat: ${pastelData.pastel} - Preu: ${pastelData.preu}€`);
    } else {
      alert("Selecciona un pastel abans d'enviar");
    }
  };

  return (
    <form onSubmit={handlePastelSubmit}>
      <h2>Selecciona un pastel</h2>

      <div>
        <label>Pastel:</label>
        <select value={pastelData.pastel} onChange={handlePastelChange}>
          <option value="">-- Escull un pastel --</option>
          {pastelesDisponibles.map((p, index) => (
            <option key={index} value={p.nombre}>
              {p.nombre} - {p.precio}€
            </option>
          ))}
        </select>
      </div>

      {pastelData.pastel && (
        <div style={{ marginTop: "20px" }}>
          <h3>{pastelData.pastel}</h3>
          <img src={pastelData.img} alt={pastelData.pastel} style={{ width: "150px", borderRadius: "8px" }} />
          <p>Preu: {pastelData.preu}€</p>
        </div>
      )}

      <button type="submit" style={{ marginTop: "20px" }}>Enviar selecció de pastel</button>
    </form>
  );
}
