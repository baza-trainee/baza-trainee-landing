import { ILoginRequest, IRegisterRequest, methodType } from '@/types/typesAPI';
import { AxiosResponse } from 'axios';
import { bazaAPI } from './config';

const token = {
  set: (token: string) => {
    bazaAPI.defaults.headers.common.Authorization = `${token}`;
  },
  reset: () => {
    bazaAPI.defaults.headers.common.Authorization = '';
  },
};

const authApi = {
  getInfo: () => bazaAPI.get(`/auth/user`),
  logIn: async ({ email, password }: ILoginRequest): Promise<AxiosResponse> => {
    const response = await bazaAPI.post(`/auth/login`, {
      email,
      password,
    });

    token.set(response.data.token);
    return response;
  },
  register: async ({
    name,
    email,
    password,
  }: IRegisterRequest): Promise<AxiosResponse> => {
    const response = await bazaAPI.post(`/auth/register`, {
      email,
      password,
      name,
    });

    token.set(response.data.token);
    return response;
  },
};

export default authApi;
