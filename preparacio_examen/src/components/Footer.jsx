// src/components/Footer.jsx
import './Footer.css'; // CSS separado para estilos

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 MiniWeb Pastissos. Tots els drets reservats.</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#pastissos">Pastissos</a>
          <a href="#formulari">Formulari</a>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
