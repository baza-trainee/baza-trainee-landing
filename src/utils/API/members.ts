import axios from 'axios';

const members = {
  async getAll() {
    try {
      const response = await axios.get('/members');

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async createNew(member: object) {
    try {
      const response = await axios.post('/members', member);

      return response.data;
    } catch (error) {
      console.log();
    }
  },
  async getById(id: string) {
    try {
      const response = await axios.get(`/members/${id}`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteById(id: string) {
    try {
      const response = await axios.delete(`/members/${id}`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async updateById(id: string, payload: object) {
    try {
      const response = await axios.patch(`/members/${id}`, payload);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default members;
