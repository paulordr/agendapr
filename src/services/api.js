import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.24.10.233:8080/api',
})
export default api;
