import axios from 'axios';
import { IError, IHeroSlider } from './types';

const heroSlider = {
  async getAll(): Promise<IHeroSlider | IError> {
    try {
      const response = await axios.get('/heroslider');

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async createNew(slider: object): Promise<IHeroSlider | IError> {
    try {
      const response = await axios.post('/heroslider', slider);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async getById(id: string): Promise<IHeroSlider | IError> {
    try {
      const response = await axios.get(`/heroslider/${id}`);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async deleteById(id: string): Promise<IHeroSlider | IError> {
    try {
      const response = await axios.delete(`/heroslider/${id}`);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async updateById(id: string, payload: object): Promise<IHeroSlider | IError> {
    try {
      const response = await axios.patch(`/heroslider/${id}`, payload);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
};

export default heroSlider;
