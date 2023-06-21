import { AxiosResponse } from 'axios';
import { bazaAPI } from '../hooks/useAPI';
import { IError } from './types';

const projectsApi = {
  async getAll(): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.get('/projects');

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },

  // TO DO

  async createNew(project: object): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.post('/projects', project);

      return response;
    } catch (error: any) {
      console.log(error);

      return error;
    }
  },

  async search(query: string): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.get(`/projects/search?query=${query}`);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },

  async getById(id: string): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.get(`/projects/${id}`);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async deleteById(id: string): Promise<AxiosResponse | IError> {
    try {
      const response = await bazaAPI.delete(`/projects/${id}`);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },

  // TO DO
  async updateById([id, payload]: [id: string, payload: object]): Promise<
    AxiosResponse | IError
  > {
    try {
      if (!id || !payload) {
        throw {
          message: 'Must be id, payload',
          responseMessage: 'none',
          status: '1',
        };
      }

      const response = await bazaAPI.patch(`/projects/${id}`, payload);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
};

export default projectsApi;
