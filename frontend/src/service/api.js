import axios from "axios";

// 1) Runtime (env.js), 2) Build-time (Vite), 3) fallback
const baseURL =
  (typeof window !== 'undefined' && window.__ENV && window.__ENV.API_URL) ||
  import.meta.env.VITE_API_URL ||
  'https://api.kalonitinere.site/api'; // último recurso

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;
