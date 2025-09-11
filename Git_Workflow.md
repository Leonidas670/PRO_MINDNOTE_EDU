# 🚦 Flujo de trabajo con Git - MindNote.EDU

Esta guía describe el flujo de trabajo recomendado para colaborar y mantener la calidad del código en el proyecto **MindNote.EDU**.

---

## 1. Estructura de ramas

- **main**: Rama principal y estable. Solo se hace merge de código revisado y probado.
- **dev**: Rama de desarrollo general donde se integran los cambios antes de pasar a main.

---

## 2. Pasos para contribuir

1. **Actualiza tu repositorio local**
   ```bash
   git pull origin main
   git pull origin dev
   ```

2. **Crea una rama para tu tarea**
   ```bash
   git checkout -b dev
   ```

3. **Haz tus cambios y commitea**
   ```bash
   git add .
   git commit -m "Descripción clara del cambio"
   ```

4. **Sincroniza tu rama con el remoto**
   ```bash
   git push origin dev
   ```

5. **Haz un Pull Request**
   - Desde GitHub, crea un Pull Request de `dev` hacia `main`.
   - Solicita revisión de código.

6. **Revisión y merge**
   - El equipo revisa el código.
   - Si todo está correcto, se hace merge a la rama principal (`main`).

---

## 3. Reglas para commits

- Mensajes claros y descriptivos.
- Ejemplo:  
  - `feat: agregar registro de usuario`
  - `fix: corregir validación de correo en login`
  - `docs: actualizar README`

---

## 4. Buenas prácticas

- Sincroniza frecuentemente tu rama con `main` y `dev` para evitar conflictos.
- No subas archivos sensibles (.env, contraseñas, etc.).
- Usa `.gitignore` para excluir archivos innecesarios.
- Antes de hacer merge, asegúrate que el código pase los linters y pruebas.
- Documenta los cambios importantes en el Pull Request.

---

## 5. Automatizaciones

- El proyecto usa **GitHub Actions** para ejecutar linters y pruebas automáticas en cada Pull Request.

---

**¡Sigue este flujo para mantener el proyecto organizado