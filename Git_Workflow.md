# 🛠️ Flujo de trabajo Git – MindNote.EDU

# 1. Convención de commits

- Usa mensajes claros y descriptivos en español.
- Estructura recomendada:  


**Tipos sugeridos:**  
- feat: Nueva funcionalidad  
- fix: Corrección de bug  
- docs: Cambios en documentación  
- style: Formato, estilos, sin cambios de lógica  
- refactor: Refactorización de código  
- test: Añadir o corregir tests  
- chore: Tareas de mantenimiento

**Ejemplo:**  

feat: agregar formulario de creación de notas fix: corregir error al guardar nota vacía docs: actualizar README con instrucciones de instalación

## 2. Frecuencia de push/pull

- Realiza `git pull` antes de empezar a trabajar cada día para mantener tu rama actualizada.
- Haz `git push` cada vez que completes una tarea pequeña o un avance significativo (mínimo una vez al día).
- Evita acumular muchos cambios sin subirlos al repositorio.
- Antes de hacer `push`, asegúrate de que tu rama esté actualizada con respecto a `develop` (o la rama base).

---

## 3. Política de pull requests (PR)

- Toda nueva funcionalidad o corrección debe ir en una rama `feature/*` o `fix/*`.
- Cuando termines una tarea, abre un Pull Request (PR) hacia la rama `develop`.
- El PR debe tener un título descriptivo y detallar los cambios realizados.
- Al menos una persona del equipo debe revisar y aprobar el PR antes de fusionarlo.
- Resuelve los conflictos antes de solicitar revisión.
- No hagas `merge` directo a `main` ni a `develop` sin PR.
