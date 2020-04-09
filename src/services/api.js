import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.24.10.233:8080/api',
  timeout: 4000,
 // headers: {'X-Custom-Header': 'foobar'}
})
export default api;
