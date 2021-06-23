import axios from 'axios';

export const cryptAPI = axios.create({
  baseURL: 'https://api.staging.tauros.io',
});
