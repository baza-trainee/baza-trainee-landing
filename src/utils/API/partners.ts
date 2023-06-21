import { AxiosResponse } from 'axios';
import { bazaAPI } from '../hooks/useAPI';
import { IError } from './types';

const partnersApi = {
  async getAll(): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.get('/partners');

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async createNew(partner: object): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.post('/partners', partner);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async getById(id: string): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.get(`/partners/${id}`);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async deleteById(id: string): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.delete(`/partners/${id}`);

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
      if (!id || !payload) {
        throw {
          message: 'Must be id, payload payload',
          responseMessage: 'none',
          status: '1',
        };
      }

      const response = await bazaAPI.patch(`/partners/${id}`, payload);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
};

export default partnersApi;
