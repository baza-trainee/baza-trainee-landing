import axios from 'axios';
import { IError, ITeamMember } from './types';

const members = {
  async getAll(): Promise<Array<ITeamMember> | IError> {
    try {
      const response = await axios.get('/members');

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async createNew(member: object): Promise<ITeamMember | IError> {
    try {
      const response = await axios.post('/members', member);

      return response.data;
    } catch (error: any) {
      console.log(error);

      return error;
    }
  },
  async getById(id: string): Promise<ITeamMember | IError> {
    try {
      const response = await axios.get(`/members/${id}`);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async deleteById(id: string): Promise<ITeamMember | IError> {
    try {
      const response = await axios.delete(`/members/${id}`);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async updateById(id: string, payload: object): Promise<ITeamMember | IError> {
    try {
      const response = await axios.patch(`/members/${id}`, payload);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
};

export default members;
