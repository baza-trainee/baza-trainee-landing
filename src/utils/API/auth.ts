import { AxiosResponse } from 'axios';
import { IError } from '../../types/typesAPI';
import { bazaAPI } from '../hooks/useAPI';
// const url = process.env.NEXT_PUBLIC_SERVER_URL;

const token = {
  set: (token: string) => {
    bazaAPI.defaults.headers.common.Authorization = `${token}`;
  },
  reset: () => {
    bazaAPI.defaults.headers.common.Authorization = '';
  },
};

const authApi = {
  async getInfo(): Promise<AxiosResponse | IError> {
    try {
      const response: AxiosResponse = await bazaAPI.get(`/auth/user`);

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
      if (!email || !password) {
        throw {
          message: 'Must be email, password',
          responseMessage: 'none',
          status: '1',
        };
      }

      const response: AxiosResponse = await bazaAPI.post(`/auth/login`, {
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
      const response: AxiosResponse = await bazaAPI.post(`/auth/register`, {
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

export default authApi;
