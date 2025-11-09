import { useState } from "react";
import './Formulari.css';


export default function Formulario() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    contraseña: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre) newErrors.nombre = "El nombre es obligatorio";
    if (!formData.apellidos) newErrors.apellidos = "Los apellidos son obligatorios";
    if (!formData.email) newErrors.email = "El email es obligatorio";
    if (!formData.telefono) newErrors.telefono = "El teléfono es obligatorio";
    if (!formData.contraseña) newErrors.contraseña = "La contraseña es obligatoria";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Formulario enviado:", formData);
      alert("Formulario enviado correctamente");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input name="nombre" value={formData.nombre} onChange={handleChange} />
        {errors.nombre && <p style={{color:"red"}}>{errors.nombre}</p>}
      </div>
      <div>
        <label>Apellidos:</label>
        <input name="apellidos" value={formData.apellidos} onChange={handleChange} />
        {errors.apellidos && <p style={{color:"red"}}>{errors.apellidos}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input name="email" value={formData.email} onChange={handleChange} type="email"/>
        {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
      </div>
      <div>
        <label>Teléfono:</label>
        <input name="telefono" value={formData.telefono} onChange={handleChange} />
        {errors.telefono && <p style={{color:"red"}}>{errors.telefono}</p>}
      </div>
      <div>
        <label>Contraseña:</label>
        <input name="contraseña" value={formData.contraseña} onChange={handleChange} type="password"/>
        {errors.contraseña && <p style={{color:"red"}}>{errors.contraseña}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}
