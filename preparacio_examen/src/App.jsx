import { useState } from "react";
import Formulari from "./components/Formulari.jsx";
import Pastissos from "./components/Pastissos.jsx";
import Home from "./components/Home.jsx"; 
import FormulariPastis from "./components/FormulariPastis.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx"; // Navbar propio
import Hook from "./components/Hook.jsx";

export default function App() {
  const [pagina, setPagina] = useState("home"); // controla qué sección se muestra

  return (
    <div className="app-container">
      {/* Navbar visible siempre */}
      <Navbar setPagina={setPagina} />

      {/* Contenido según la página */}
      <div style={{ padding: "20px" }}>
        {pagina === "home" && <Home />}
        {pagina === "pastissos" && <Pastissos />}
        {pagina === "formulari" && <Formulari />}
        {pagina === "formulariPastis" && <FormulariPastis />}
          {pagina === "hook" && <Hook />}
      </div>

      <Footer />
    </div>
  );
}
