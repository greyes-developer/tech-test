import axios from 'axios';
import {ENVIRONMENT} from '../../environment';

export const cryptAPI = axios.create({
  baseURL: ENVIRONMENT.BASE_URL,
});
