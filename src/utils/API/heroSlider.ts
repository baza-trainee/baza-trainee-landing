import { AxiosResponse } from 'axios';
import { bazaAPI } from '../hooks/useAPI';
import { IError } from './types';

const heroSliderApi = {
  async getAll(): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.get('/heroslider');

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async createNew(slider: object): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.post('/heroslider', slider);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async getById(id: string): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.get(`/heroslider/${id}`);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async deleteById(id: string): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.delete(`/heroslider/${id}`);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async updateById([id, payload]: [id: string, payload: object]): Promise<
    AxiosResponse | IError
  > {
    try {
      const response = await bazaAPI.patch(`/heroslider/${id}`, payload);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
};

export default heroSliderApi;
