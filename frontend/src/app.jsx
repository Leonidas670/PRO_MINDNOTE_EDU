import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <>
      {/* Barra de navegación */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container">
          {/* Logo + Nombre */}
          <a className="navbar-brand" href="#">
            <img
              src="/imgs/LOGO_PROYECTO.jpg"
              alt="Logo MindNote.EDU"
              className="logo-navbar"
            />
            
          </a>

          {/* Enlaces */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav ml-auto d-flex flex-row">
              <li className="nav-item">
                <a className="nav-link" href="/login">Inicio de Sesión</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/registro">Registro</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <h4 className="header-subtitle">Hola!</h4>
            <h1 className="header-title">Somos MindNote.EDU</h1>
            <h6 className="header-mono">Tus ideas, tus notas, tu clase</h6>
          </div>
        </div>
      </header>

      {/* Footer */}
      <footer className="footer-basic">
        <div className="container">
          <p>&copy; 2025 MindNote.EDU | Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
