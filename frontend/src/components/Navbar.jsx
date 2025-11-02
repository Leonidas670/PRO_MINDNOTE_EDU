import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/LOGO_PROYECTO.jpg";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>


        {/* Botón hamburguesa */}
        <button
          className={`menu-btn ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={closeMenu}>
              Iniciar Sesión
            </Link>
          </li>
          <li>
            <Link to="/register" onClick={closeMenu}>
              Registrar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
