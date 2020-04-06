import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.24.10.233:8000/api',
  //baseURL: 'http://192.168.1.186:3333',
})
export default api;
