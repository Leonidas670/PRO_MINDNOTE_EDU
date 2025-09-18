import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Limpiar datos de sesión
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    navigate("/login");

  };

  return (
    <div className="sidebar">
      <h2>MindNote.EDU</h2>
      <nav>
        <ul>
          <li><Link to="/dashboard">🏠 Inicio</Link></li>
          <li><Link to="/tasks">📝 Tareas</Link></li>
          <li><Link to="/notificaciones">🔔 Notificaciones</Link></li>
          <li onClick={handleLogout} style={{ cursor: "pointer" }}>🚪 Cerrar sesión</li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
