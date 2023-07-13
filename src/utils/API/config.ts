import axios from 'axios';

export const bazaAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});
