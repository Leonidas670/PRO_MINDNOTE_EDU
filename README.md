# 🧠 MindNote.EDU

**MindNote.EDU** es una aplicación de agendamiento inteligente e inclusiva que permite a cualquier persona organizar sus tareas, recibir notificaciones, mantener un historial de actividades y personalizar su experiencia con funciones de accesibilidad.

Este proyecto está desarrollado con una arquitectura **Full Stack**:
- **Frontend:** React + Vite.
- **Backend:** Node.js + Express + MySQL.
- **Control de versiones:** Git + GitHub.

---

## 📂 Estructura del proyecto

La estructura del código sigue una división clara entre **frontend** y **backend**.


PRO_MINDNOTE.EDU/
│
├── .github/workflows/ # Automatizaciones y CI/CD con GitHub Actions
│ └── linters.yml # Workflow para ejecutar linters automáticamente
│
├── backend/ # Lógica y API del servidor
│ ├── .env # Variables de entorno del backend
│ ├── db.js # Configuración de conexión a la base de datos
│ ├── index.js # Punto de entrada del backend
│ ├── package.json # Dependencias y scripts del backend
│ └── test-db.js # Script para probar conexión a la base de datos
│
├── frontend/ # Aplicación cliente
│ ├── public/ # Archivos estáticos (HTML base, favicon, etc.)
│ │ └── index.html
│ │
│ └── src/ # Código fuente del frontend
│ ├── assets/ # Recursos estáticos
│ │ ├── css/ # Estilos globales
│ │ └── imgs/ # Imágenes de la app
│ │
│ ├── pages/ # Vistas principales
│ │ ├── Login.jsx # Página de inicio de sesión
│ │ └── Registro.jsx # Página de registro
│ │
│ ├── app.jsx # Componente raíz
│ ├── main.jsx # Punto de arranque de React
│ ├── package.json # Dependencias y scripts del frontend
│ └── vite.config.js # Configuración de Vite
│
├── node_modules/ # Dependencias instaladas (autogenerado)
│
├── .env # Variables de entorno globales
├── .gitignore # Archivos/carpetas ignorados por Git
├── .hintrc # Configuración de Webhint
├── stylelint.rc.json # Configuración de Stylelint
├── Git_Workflow.md # Guía de flujo de trabajo con Git
├── Guia_EstandaresCod.md # Guía de estándares de codificación
├── package.json # Dependencias y scripts generales
├── package-lock.json # Versiones exactas de dependencias
└── README.md # Documentación principal


🛠 Tecnologías utilizadas
Frontend

React → Librería para construir interfaces de usuario.

Vite → Herramienta rápida de desarrollo y build.

CSS3 → Estilización y diseño.

Backend

Node.js → Entorno de ejecución de JavaScript.

Express → Framework web para Node.js.

MySQL → Base de datos relacional.

dotenv → Manejo de variables de entorno.


📌 Convenciones y guías

Código limpio y estandarizado → Ver Guia_EstandaresCod.md.

Flujo de trabajo con Git → Ver Git_Workflow.md.

Validaciones automáticas → Linters y herramientas configuradas (Stylelint, Webhint).

Desarrollado por Laura Buritica