import { AxiosResponse } from 'axios';
import { bazaAPI } from '../hooks/useAPI';
import { IError } from './types';

const roles = {
  async getAll(): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.get('/roles');

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async createNew(role: object): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.post('/roles', role);

      return response;
    } catch (error: any) {
      console.log(error);

      return error;
    }
  },
  async getById(id: string): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.get(`/roles/${id}`);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async deleteById(id: string): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.delete(`/roles/${id}`);

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
      const response = await bazaAPI.patch(`/roles/${id}`, payload);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
};

export default roles;
