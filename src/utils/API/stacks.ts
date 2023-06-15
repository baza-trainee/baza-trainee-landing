import axios from 'axios';

const stacks = {
  async getAll() {
    try {
      const response = await axios.get('/stacks');

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async createNew(stack: object) {
    try {
      const response = await axios.post('/stacks', stack);

      return response.data;
    } catch (error) {
      console.log();
    }
  },
  async getById(id: string) {
    try {
      const response = await axios.get(`/stacks/${id}`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteById(id: string) {
    try {
      const response = await axios.delete(`/stacks/${id}`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async updateById(id: string, payload: object) {
    try {
      const response = await axios.patch(`/stacks/${id}`, payload);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default stacks;
