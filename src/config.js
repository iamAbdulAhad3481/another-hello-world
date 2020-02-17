import  axios from 'axios';

axios.defaults.headers.post["Content-Type"] = "application/json";

export  const userAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});