
# PRO_MINDNOTE.EDU

Este proyecto es una interfaz web educativa con enfoque en buenas prácticas de desarrollo frontend, integrando linters para asegurar la calidad del código.

---

## 📁 Estructura del Proyecto

```
PRO_MINDNOTE.EDU/
│
├── LINTERS/
│   ├── .github/
│   │   └── workflows/
│   │       └── linters.yml         # Configuración de GitHub Actions para linters
│   │
│   ├── HTML/
│   │   ├── assets/
│   │   │   ├── css/                # Archivos CSS
│   │   │   └── imgs/               # Imágenes del sitio
│   │   │
│   │   ├── index.html              # Página principal
│   │   ├── login.html              # Página de inicio de sesión
│   │   └── registro.html           # Página de registro
│   │
│   ├── node_modules/              # Dependencias del proyecto (no modificar manualmente)
│
├── .gitignore                     # Archivos y carpetas ignoradas por git
├── .hintrc                        # Configuración para HTMLHint
├── .stylelintrc.json              # Configuración para Stylelint
├── Git_Workflow.md                # Guía de flujo de trabajo con Git
├── Guia_EstandaresCodigo.md       # Guía de estándares de codificación
├── package.json                   # Dependencias y scripts del proyecto
├── package-lock.json              # Versión exacta de dependencias instaladas
```

---

## 🚀 Instrucciones para desarrolladores

1. Clona el repositorio:
   ```bash
   git clone <URL-del-repo>
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta Stylelint:
   ```bash
   npx stylelint "**/*.{css,scss}" --fix
   ```

---

## 🧹 Linters Configurados

- **Stylelint**: Valida y corrige estilos CSS.
- **HTMLHint**: Analiza sintaxis HTML.
- **GitHub Actions**: Automatiza validación de linters en cada push o pull request (`linters.yml`).

---

## 📚 Guías Incluidas

- `Guia_EstandaresCodigo.md`: Estándares para escritura de código limpio.
- `Git_Workflow.md`: Recomendaciones para usar ramas y commits correctamente.

---

## ✍️ Autor

Desarrollado por el equipo de **PRO_MINDNOTE.EDU**.

---
