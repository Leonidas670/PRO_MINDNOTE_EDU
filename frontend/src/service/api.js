import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mindnoteedu.vercel.app'
});

export default api;
