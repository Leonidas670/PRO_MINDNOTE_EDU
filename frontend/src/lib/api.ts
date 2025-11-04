import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

// ejemplos
export const register = (data: { name: string; email: string; password: string }) =>
  api.post('/auth/register', data);

export const login = (data: { email: string; password: string }) =>
  api.post('/auth/login', data);

export const me = () =>
  api.get('/users/me');
