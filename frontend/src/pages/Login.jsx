import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../styles/Login.css";
import axios from "axios";


function Login() {
  const [usuario_correo, setEmail] = useState("");
  const [usuario_contrasena, setPassword] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setModalMessage("");

  try {
    const response = await axios.post("http://localhost:3001/login", {
      usuario_correo,
      usuario_contrasena,
    });

    // 🔹 Aquí validamos la respuesta del backend
    if (response.data.success) {
      setModalMessage("¡Inicio de sesión exitoso!");
      setShowModal(true);

      // Guardar token si existe
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
    } else {
      setModalMessage(response.data.message || "Usuario o contraseña incorrectos.");
      setShowModal(true);
    }
  } catch (err) {
    setModalMessage("Error al conectar con el servidor.");
    setShowModal(true);
  } finally {
    setLoading(false);
  }
};


  const handleCloseModal = () => {
    setShowModal(false);
    if (modalMessage === "¡Inicio de sesión exitoso!") {
      navigate("/dashboard");
    }
  };

  return (
    <div className="page-container">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Iniciar Sesión</h2>
        <label>
          Correo electrónico:
          <input
            type="email"
            name="usuario_correo"
            value={usuario_correo}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            name="usuario_contrasena"
            value={usuario_contrasena}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Ingresando..." : "Ingresar"}
        </button>
        <p className="register-link">
          ¿No tienes cuenta? <Link to="/Register">Regístrate aquí</Link>
        </p>
      </form>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{modalMessage === "¡Inicio de sesión exitoso!" ? "¡Bienvenido!" : "⚠ Error de inicio de sesión"}</h3>
            <p>{modalMessage}</p>
            <button onClick={handleCloseModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Login;