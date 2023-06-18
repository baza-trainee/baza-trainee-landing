import axios from 'axios';
import { IError, ITeamMemberRole } from './types';

const roles = {
  async getAll(): Promise<Array<ITeamMemberRole> | IError> {
    try {
      const response = await axios.get('/roles');

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async createNew(role: object): Promise<ITeamMemberRole | IError> {
    try {
      const response = await axios.post('/roles', role);

      return response.data;
    } catch (error: any) {
      console.log(error);

      return error;
    }
  },
  async getById(id: string): Promise<ITeamMemberRole | IError> {
    try {
      const response = await axios.get(`/roles/${id}`);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async deleteById(id: string): Promise<ITeamMemberRole | IError> {
    try {
      const response = await axios.delete(`/roles/${id}`);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async updateById(
    id: string,
    payload: object
  ): Promise<ITeamMemberRole | IError> {
    try {
      const response = await axios.patch(`/roles/${id}`, payload);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
};

export default roles;
