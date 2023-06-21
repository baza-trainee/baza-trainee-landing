import { AxiosResponse } from 'axios';
import { bazaAPI } from '../hooks/useAPI';
import { IError } from './types';

const membersApi = {
  async getAll(): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.get('/members');

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async createNew(member: object): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.post('/members', member);

      return response;
    } catch (error: any) {
      console.log(error);

      return error;
    }
  },
  async getById(id: string): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.get(`/members/${id}`);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async deleteById(id: string): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.delete(`/members/${id}`);

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
      const response = await bazaAPI.patch(`/members/${id}`, payload);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
};

export default membersApi;
