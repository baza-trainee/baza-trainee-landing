import axios from 'axios';
import { IError, IProject } from './types';

const projects = {
  async getAll(): Promise<Array<IProject> | IError> {
    try {
      const response = await axios.get('/projects');

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },

  // TO DO

  async createNew(project: object): Promise<IProject | IError> {
    try {
      const response = await axios.post('/projects', project);

      return response.data;
    } catch (error: any) {
      console.log(error);

      return error;
    }
  },
  async getById(id: string): Promise<IProject | IError> {
    try {
      const response = await axios.get(`/projects/${id}`);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async deleteById(id: string): Promise<IProject | IError> {
    try {
      const response = await axios.delete(`/projects/${id}`);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },

  // TO DO
  async updateById(id: string, payload: object): Promise<IProject | IError> {
    try {
      const response = await axios.patch(`/projects/${id}`, payload);

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
};

export default projects;
