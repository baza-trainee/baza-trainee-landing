import { AxiosResponse } from 'axios';
import { IError } from '../../types/typesAPI';
import { bazaAPI } from '../hooks/useAPI';

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
      if (!slider) {
        throw {
          message: 'Must be slider payload',
          responseMessage: 'none',
          status: '1',
        };
      }

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
