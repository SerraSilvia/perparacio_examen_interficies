import { useState } from "react";
import './Formulari.css';

export default function Formulari() {
    // Estat per guardar les dades del formulari
  const [formData, setFormData] = useState({
    nom: "",
    cognoms: "",
    email: "",
    telefon: "",
    contrasenya: ""
  });

   // Estat per guardar els errors de validació
  const [errors, setErrors] = useState({});

    // Estat per guardar tots els formularis enviats (historial)
  const [submissions, setSubmissions] = useState([]);

    // Funció que s'executa quan es modifica qualsevol input
  const handleChange = (e) => {
     // Actualitza només el camp que ha canviat
    setFormData({...formData, [e.target.name]: e.target.value});
  };
    // Funció per validar el formulari
  const validate = () => {
    const newErrors = {};
    if (!formData.nom) newErrors.nom = "El nom és obligatori";
    if (!formData.cognoms) newErrors.cognoms = "Els cognoms són obligatoris";
    if (!formData.email) newErrors.email = "L'email és obligatori";
    if (!formData.telefon) newErrors.telefon = "El telèfon és obligatori";
    if (!formData.contrasenya) newErrors.contrasenya = "La contrasenya és obligatòria";
    setErrors(newErrors);// Guarda els errors al estat
    return Object.keys(newErrors).length === 0;// Retorna true si no hi ha errors
  };

    // Funció que s'executa quan s'envia el formulari
const handleSubmit = (e) => {
  e.preventDefault();  // Evita que la pàgina es recarregui
  if (validate()) {  // Només envia si no hi ha errors 
    setSubmissions([...submissions, formData]); // Guarda l'enviament al historial
    console.log("Envíos hasta ahora:", [...submissions, formData]); // Mostra tots els enviaments a la consola
    alert("Formulari enviat correctament");
  }
};


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom:</label>
        <input name="nom" value={formData.nom} onChange={handleChange} />
        {errors.nom && <p style={{color:"red"}}>{errors.nom}</p>}
      </div>
      <div>
        <label>Cognoms:</label>
        <input name="cognoms" value={formData.cognoms} onChange={handleChange} />
        {errors.cognoms && <p style={{color:"red"}}>{errors.cognoms}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input name="email" value={formData.email} onChange={handleChange} type="email"/>
        {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
      </div>
      <div>
        <label>Telèfon:</label>
        <input name="telefon" value={formData.telefon} onChange={handleChange} />
        {errors.telefon && <p style={{color:"red"}}>{errors.telefon}</p>}
      </div>
      <div>
        <label>Contrasenya:</label>
        <input name="contrasenya" value={formData.contrasenya} onChange={handleChange} type="password"/>
        {errors.contrasenya && <p style={{color:"red"}}>{errors.contrasenya}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}
