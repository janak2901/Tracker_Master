import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.29.78:7000/',
});

