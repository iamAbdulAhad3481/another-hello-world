import  axios from 'axios';

export  const userAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});