// mindnote/frontend/src/service/api.js
import axios from "axios";

// IMPORTANTE: define VITE_API_URL en el .env del front y en Netlify
// Ej: VITE_API_URL="https://api.kalonitinere.site/api"
// o mientras, la URL de Vercel: "https://tu-api.vercel.app/api"
const baseURL = import.meta.env.VITE_API_URL;

if (!baseURL) {
  // Esto te ayuda a detectar si olvidaste configurar la variable
  // (se ve en consola del navegador)
  console.warn(
    "⚠️ VITE_API_URL no está definido. Configura VITE_API_URL en frontend/.env y en Netlify."
  );
}

const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
  // Si más adelante usas auth por header:
  // headers: () => ({ Authorization: `Bearer ${token}` })
});

export default api;
