import axios from 'axios';
import { IError, IStack } from './types';

const stacks = {
  async getAll(): Promise<Promise<IStack> | IError> {
    try {
      const response = await axios.get('/stacks');

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async createNew(stack: object): Promise<IStack | IError> {
    try {
      const response = await axios.post('/stacks', stack);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async getById(id: string): Promise<IStack | IError> {
    try {
      const response = await axios.get(`/stacks/${id}`);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async deleteById(id: string): Promise<IStack | IError> {
    try {
      const response = await axios.delete(`/stacks/${id}`);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async updateById(id: string, payload: object): Promise<IStack | IError> {
    try {
      const response = await axios.patch(`/stacks/${id}`, payload);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
};

export default stacks;
