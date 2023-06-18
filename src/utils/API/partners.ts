import axios from 'axios';
import { IError, IPartner } from './types';

const partners = {
  async getAll(): Promise<Array<IPartner> | IError> {
    try {
      const response = await axios.get('/partners');

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async createNew(partner: object): Promise<IPartner | IError> {
    try {
      const response = await axios.post('/partners', partner);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async getById(id: string): Promise<IPartner | IError> {
    try {
      const response = await axios.get(`/partners/${id}`);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async deleteById(id: string): Promise<IPartner | IError> {
    try {
      const response = await axios.delete(`/partners/${id}`);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async updateById(id: string, payload: object): Promise<IPartner | IError> {
    try {
      const response = await axios.patch(`/partners/${id}`, payload);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
};

export default partners;
