import axios from 'axios';
import { IError, ITestimonial } from './types';

const testimonials = {
  async getAll(): Promise<Array<ITestimonial> | IError> {
    try {
      const response = await axios.get('/testimonials');

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async createNew(testimonial: object): Promise<ITestimonial | IError> {
    try {
      const response = await axios.post('/testimonials', testimonial);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async getById(id: string): Promise<ITestimonial | IError> {
    try {
      const response = await axios.get(`/testimonials/${id}`);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async deleteById(id: string): Promise<ITestimonial | IError> {
    try {
      const response = await axios.delete(`/testimonials/${id}`);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async updateById(
    id: string,
    payload: object
  ): Promise<ITestimonial | IError> {
    try {
      const response = await axios.patch(`/testimonials/${id}`, payload);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
};

export default testimonials;
