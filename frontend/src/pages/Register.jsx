import React, { useState } from "react";
import "./../styles/Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    usuario_nombre: "",
    usuario_apellido: "",
    usuario_correo: "",
    usuario_contrasena: "",
    usuario_rol: "usuario",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate(); // 👉 para redirigir

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/usuarios", formData);
      setModalMessage("¡Registro exitoso!");
    } catch (error) {
      setModalMessage("Error al registrar. Intenta de nuevo.");
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    // 👉 Si fue exitoso, redirigir al login
    if (modalMessage === "¡Registro exitoso!") {
      navigate("/login");
    }
  };

  return (
    <div className="page-container">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Registrar</h2>
        <label>
          Nombre:
          <input
            type="text"
            name="usuario_nombre"
            value={formData.usuario_nombre}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Apellido:
          <input
            type="text"
            name="usuario_apellido"
            value={formData.usuario_apellido}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Correo electrónico:
          <input
            type="email"
            name="usuario_correo"
            value={formData.usuario_correo}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            name="usuario_contrasena"
            value={formData.usuario_contrasena}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Rol:
          <select
            name="usuario_rol"
            value={formData.usuario_rol}
            onChange={handleChange}
            required
          >
            <option value="usuario">Usuario</option>
          </select>
        </label>
        <button type="submit">Crear cuenta</button>
      </form>

      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>{modalMessage}</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
