import axios, { AxiosResponse } from 'axios';
import { IError } from './types';
// const url = process.env.NEXT_PUBLIC_SERVER_URL;

const token = {
  set: (token: string) => {
    axios.defaults.headers.common.Authorization = `${token}`;
  },
  reset: () => {
    axios.defaults.headers.common.Authorization = '';
  },
};

const auth = {
  async getInfo(): Promise<AxiosResponse | IError> {
    try {
      const response: AxiosResponse = await axios.get(`/auth/user`);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async logIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<AxiosResponse | IError> {
    try {
      const response: AxiosResponse = await axios.post(`/auth/login`, {
        email,
        password,
      });

      token.set(response.data.token);
      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async register({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }): Promise<AxiosResponse | IError> {
    try {
      const response: AxiosResponse = await axios.post(`/auth/register`, {
        email,
        password,
        name,
      });

      token.set(response.data.token);
      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
};

export default auth;
