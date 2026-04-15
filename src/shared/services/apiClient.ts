import axios from 'axios';
import { ENV } from '@/app/config';

export const apiClient = axios.create({
  headers: {
    Accept: 'application/json',
    'X-API-TOKEN': ENV.X_API_TOKEN,
    'Content-Type': 'application/json',
  },
  baseURL: ENV.API_URL,
  timeout: 15000,
});
