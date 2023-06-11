import axios from 'axios';

const user = {
  async getInfo() {
    try {
      const response = await axios.get('/auth/user');

      return response;
    } catch (error: any) {
      console.log(error.message);
    }
  },
  async logIn({ email, password }: { email: string; password: string }) {
    try {
      const response = await axios.post('/auth/login', { email, password });

      return response;
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
      const response = await axios.post('/auth/register', {
        email,
        password,
        name,
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default user;
