import axios from 'axios';

const testimonials = {
  async getAll() {
    try {
      const response = await axios.get('/testimonials');

      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async createNew(testimonial: object) {
    try {
      const response = await axios.post('/testimonials', testimonial);

      return response;
    } catch (error) {
      console.log();
    }
  },
  async getById(id: string) {
    try {
      const response = await axios.get(`/testimonials/${id}`);

      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteById(id: string) {
    try {
      const response = await axios.delete(`/testimonials/${id}`);

      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async updateById(id: string) {
    try {
      const response = await axios.patch(`/testimonials/${id}`);

      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default testimonials;
