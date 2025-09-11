import React from "react";
import "./../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} MindNote.EDU - Todos los derechos reservados</p>
        <nav className="footer-links">
          <a href="/privacy">Privacidad</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
