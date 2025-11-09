import './Pastissos.css';

export default function Pastissos() {
  return (
   <div>
  <h1>Pastissos deliciosos</h1>
  <ul className="pastel-list">
    <li className="pastel-item">
      <div className="pastel-card">
        <h3>Pastís de xocolata</h3>
        <img src="https://i.pinimg.com/736x/93/35/25/9335250b562a334f5bfae286282564bb.jpg" alt="Pastís de xocolata" />
        <p>Preu: 15€</p>
      </div>
    </li>
    <li className="pastel-item">
      <div className="pastel-card">
        <h3>Pastís de maduixa</h3>
        <img src="https://img.freepik.com/vector-premium/pastel-fresa_884500-35384.jpg?semt=ais_hybrid&w=740&q=80" alt="Pastís de maduixa" />
        <p>Preu: 14€</p>
      </div>
    </li>
    <li className="pastel-item">
      <div className="pastel-card">
        <h3>Pastís de cirera</h3>
        <img src="https://i.pinimg.com/736x/24/18/92/2418922740b861e66df0a48ac1f249be.jpg" alt="Pastís de cirera" />
        <p>Preu: 13€</p>
      </div>
    </li>
    <li className="pastel-item">
      <div className="pastel-card">
        <h3>Pastís arc iris</h3>
        <img src="https://img.freepik.com/vector-premium/sonrisa-linda-caricatura-kawaii-personaje-pastel_194428-142.jpg" alt="Pastís arc iris" />
        <p>Preu: 16€</p>
      </div>
    </li>
  </ul>
</div>

  );
}
