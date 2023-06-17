import axios, { AxiosResponse } from 'axios';
const url = process.env.SERVER_URL;

const token = {
  set: (token: string) => {
    axios.defaults.headers.common.Authorization = `${token}`;
  },
  reset: () => {
    axios.defaults.headers.common.Authorization = '';
  },
};

const auth = {
  async getInfo() {
    try {
      const response: AxiosResponse = await axios.get('/auth/user');

      return response.data;
    } catch (error: any) {
      console.log(error.message);
    }
  },
  async logIn({ email, password }: { email: string; password: string }) {
    try {
      const response: AxiosResponse = await axios.post(`${url}/auth/login`, {
        email,
        password,
      });

      token.set(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error);
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
  }) {
    try {
      const response: AxiosResponse = await axios.post('/auth/register', {
        email,
        password,
        name,
      });

      token.set(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default auth;
