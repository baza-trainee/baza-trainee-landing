import { AxiosResponse } from 'axios';
import { bazaAPI } from '../hooks/useAPI';
import { IError } from './types';

const stacks = {
  async getAll(): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.get('/stacks');

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async createNew(stack: object): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.post('/stacks', stack);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async getById(id: string): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.get(`/stacks/${id}`);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async deleteById(id: string): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.delete(`/stacks/${id}`);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async updateById(
    id: string,
    payload: object
  ): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.patch(`/stacks/${id}`, payload);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
};

export default stacks;
