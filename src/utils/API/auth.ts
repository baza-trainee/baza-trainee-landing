import axios, { AxiosResponse } from 'axios';
import { IError, IUser } from './types';

const token = {
  set: (token: string) => {
    axios.defaults.headers.common.Authorization = `${token}`;
  },
  reset: () => {
    axios.defaults.headers.common.Authorization = '';
  },
};

const auth = {
  async getInfo(): Promise<IUser | IError> {
    try {
      const response: AxiosResponse = await axios.get('/auth/user');

      return response.data;
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
  }): Promise<IUser | IError> {
    try {
      const response: AxiosResponse = await axios.post('/auth/login', {
        email,
        password,
      });

      token.set(response.data.token);
      return response.data;
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
  }): Promise<IUser | IError> {
    try {
      const response: AxiosResponse = await axios.post('/auth/register', {
        email,
        password,
        name,
      });

      token.set(response.data.token);
      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
};

export default auth;
