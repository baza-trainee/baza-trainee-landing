import axios from 'axios';

const heroSlider = {
  async getAll() {
    try {
      const response = await axios.get('/heroslider');

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async createNew(slider: object) {
    try {
      const response = await axios.post('/heroslider', slider);

      return response.data;
    } catch (error) {
      console.log();
    }
  },
  async getById(id: string) {
    try {
      const response = await axios.get(`/heroslider/${id}`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteById(id: string) {
    try {
      const response = await axios.delete(`/heroslider/${id}`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async updateById(id: string, payload: object) {
    try {
      const response = await axios.patch(`/heroslider/${id}`, payload);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default heroSlider;
