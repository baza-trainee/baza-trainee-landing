import axios from 'axios';

const partners = {
  async getAll() {
    try {
      const response = await axios.get('/partners');

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async createNew(partner: object) {
    try {
      const response = await axios.post('/partners', partner);

      return response.data;
    } catch (error) {
      console.log();
    }
  },
  async getById(id: string) {
    try {
      const response = await axios.get(`/partners/${id}`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteById(id: string) {
    try {
      const response = await axios.delete(`/partners/${id}`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async updateById(id: string, payload: object) {
    try {
      const response = await axios.patch(`/partners/${id}`, payload);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default partners;
