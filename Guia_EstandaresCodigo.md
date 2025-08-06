// Archivo: Guia_EstandaresCodigo.md

/*
==========================================
 REGLAS DE ESTÁNDARES DE CÓDIGO - Stack: React + Node.js/Express + MySQL
==========================================
*/

// 1. Reglas de nombres
//    - Clases (JS/Node): PascalCase (ej. UsuarioController)
//    - Componentes de React: PascalCase (ej. UserProfile)
//    - Funciones y métodos: camelCase (ej. obtenerUsuario, getUserData)
//    - Variables: camelCase (ej. userId, nombreCompleto)
//    - Constantes: MAYUS_CON_GUIONES (ej. API_BASE_URL)

// 2. Comentarios y documentación interna
//    - Utilizar comentarios claros explicando el "qué" y el "por qué" del código.
//    - En React, documentar props esperadas y ciclos de vida si se usan.
//    - En Node.js, explicar middleware y rutas principales.
//    - Evitar comentarios redundantes o triviales.

// 3. Identación y estilo de código
//    - JavaScript (React/Node): 2 espacios por nivel de indentación.
//    - Siempre usar punto y coma al final de línea.
//    - Usar comillas simples ('') por convención.
//    - Archivos JS separados por funcionalidad (modularización).
//    - En React, separar lógica, UI y efectos (custom hooks recomendados).
//    - Código backend estructurado por controladores, servicios y modelos.

// 4. Ejemplos aceptados y no aceptados

// -------------------
// REACT (Frontend)
// -------------------

// ✅ Ejemplo ACEPTADO (React)
function UserProfile({ user }) {
  return (
    <div className="profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// ❌ Ejemplo NO ACEPTADO (React)
function user(props){return <div><h1>{props.name}</h1></div>}

// -------------------
// NODE.JS + EXPRESS (Backend)
// -------------------

// ✅ Ejemplo ACEPTADO (Express)
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await userService.obtenerUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
});

// ❌ Ejemplo NO ACEPTADO (Express)
app.get('/usuarios', (req,res)=>{db.query("select * from users",(e,r)=>{res.send(r)})})

// -------------------
// MySQL (phpMyAdmin)
// -------------------

-- ✅ Ejemplo ACEPTADO
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(100) UNIQUE NOT NULL
);

-- ❌ Ejemplo NO ACEPTADO
CREATE TABLE tabla1 (a int, b varchar(20));
