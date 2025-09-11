import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>MindNote.EDU</h2>
      <nav>
        <ul>
          <li><Link to="/dashboard">🏠 Inicio</Link></li>
          <li><Link to="/tareas">📝 Tareas</Link></li>
          <li><Link to="/notificaciones">🔔 Notificaciones</Link></li>
          <li><Link to="/">🚪 Cerrar sesión</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
