import axios, { AxiosResponse } from 'axios';
import { IError } from './types';

const members = {
  async getAll(): Promise<AxiosResponse | IError> {
    try {
      const response = await axios.get('/members');

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async createNew(member: object): Promise<AxiosResponse | IError> {
    try {
      const response = await axios.post('/members', member);

      return response;
    } catch (error: any) {
      console.log(error);

      return error;
    }
  },
  async getById(id: string): Promise<AxiosResponse | IError> {
    try {
      const response = await axios.get(`/members/${id}`);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async deleteById(id: string): Promise<AxiosResponse | IError> {
    try {
      const response = await axios.delete(`/members/${id}`);

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
      const response = await axios.patch(`/members/${id}`, payload);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
};

export default members;
