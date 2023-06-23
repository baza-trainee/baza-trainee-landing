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
  async getInfo() {
    return await bazaAPI.get(`/auth/user`);
  },
  async logIn({ email, password }: { email: string; password: string }) {
    const response = await bazaAPI.post(`/auth/login`, {
      email,
      password,
    });

    token.set(response.data.token);
    return response;
  },
  async register({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }) {
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
