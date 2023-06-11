import axios from 'axios';

const roles = {
  async getAll() {
    try {
      const response = await axios.get('/roles');

      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async createNew(role: object) {
    try {
      const response = await axios.post('/roles', role);

      return response;
    } catch (error) {
      console.log();
    }
  },
  async getById(id: string) {
    try {
      const response = await axios.get(`/roles/${id}`);

      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteById(id: string) {
    try {
      const response = await axios.delete(`/roles/${id}`);

      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async updateById(id: string) {
    try {
      const response = await axios.patch(`/roles/${id}`);

      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default roles;
