# 📏 Guía de Estándares de Código - MindNote.EDU

Este documento define las reglas y buenas prácticas para el desarrollo en **MindNote.EDU** usando React + Vite, Node.js/NestJS, Prisma y MySQL.

---

## 1. Reglas de nombres

- **Clases (NestJS/Node):** PascalCase  
  Ejemplo: `UsuarioController`, `LoginService`
- **Componentes de React:** PascalCase  
  Ejemplo: `Register`, `Dashboard`
- **Funciones y métodos:** camelCase  
  Ejemplo: `obtenerUsuario`, `handleSubmit`
- **Variables:** camelCase  
  Ejemplo: `usuarioId`, `formData`
- **Constantes:** MAYUS_CON_GUIONES  
  Ejemplo: `API_BASE_URL`, `MAX_LENGTH`

---

## 2. Comentarios y documentación interna

- Utilizar comentarios claros explicando el **qué** y el **por qué** del código.
- En React, documentar props esperadas y ciclos de vida si se usan.
- En NestJS, explicar middleware, servicios y rutas principales.
- Evitar comentarios redundantes o triviales.

---

## 3. Identación y estilo de código

- **JavaScript/TypeScript (React/NestJS):** 2 espacios por nivel de indentación.
- Siempre usar punto y coma al final de línea.
- Usar comillas simples (`'`) por convención.
- Archivos JS/TS separados por funcionalidad (modularización).
- En React, separar lógica, UI y efectos (custom hooks recomendados).
- Código backend estructurado por controladores, servicios y modelos.
- Prisma: modelos y migraciones bien documentados.

---

## 4. Ejemplos aceptados y no aceptados

### React (Frontend)

**✅ Ejemplo ACEPTADO**
```jsx
function Register({ onRegister }) {
  return (
    <form onSubmit={onRegister}>
      <input type="text" name="usuario_nombre" />
      <button type="submit">Registrar</button>
    </form>
  );
}
```

**❌ Ejemplo NO ACEPTADO**
```jsx
function register(props){return <form><input/></form>}
```

---

### NestJS (Backend)

**✅ Ejemplo ACEPTADO**
```typescript
@Injectable()
export class UsuarioService {
  async obtenerUsuarios() {
    return await this.prisma.usuario.findMany();
  }
}
```

**❌ Ejemplo NO ACEPTADO**
```typescript
function getUsuarios() { return db.query('SELECT * FROM usuarios'); }
```

---

### Prisma (ORM)

**✅ Ejemplo ACEPTADO**
```prisma
model Usuario {
  usuario_id         Int      @id @default(autoincrement())
  usuario_nombre     String   @db.VarChar(50)
  usuario_correo     String   @unique @db.VarChar(100)
  usuario_contrasena String   @db.VarChar(255)
  usuario_rol        String   @db.VarChar(20)
  tareas             Tarea[]
}
```

**❌ Ejemplo NO ACEPTADO**
```prisma
model tabla1 {
  a Int
  b String
}
```

---

### MySQL

**✅ Ejemplo ACEPTADO**
```sql
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(100) UNIQUE NOT NULL
);
```

**❌ Ejemplo NO ACEPTADO**
```sql
CREATE TABLE tabla1 (a int, b varchar(20));
```

---

## 5. Otros consejos

- Mantén el código limpio y legible.
- Usa linters y herramientas automáticas (Stylelint, Webhint).
- Sigue la estructura de carpetas definida en el proyecto.
- Realiza revisiones de código antes de hacer merge a la rama