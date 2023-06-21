import { AxiosResponse } from 'axios';
import { bazaAPI } from '../hooks/useAPI';
import { IError } from './types';

const achievementsApi = {
  async getData(): Promise<AxiosResponse | IError> {
    try {
      const response: AxiosResponse = await bazaAPI.get('/achievements');

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async updateEmployed(employed: number): Promise<AxiosResponse | IError> {
    try {
      if (!employed) {
        throw {
          message: 'Must be payload',
          responseMessage: 'none',
          status: '1',
        };
      }

      const response: AxiosResponse = await bazaAPI.patch('/achievements', {
        employed,
      });

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async getEmployed(): Promise<AxiosResponse | IError> {
    try {
      const response: AxiosResponse = await bazaAPI.get(
        '/achievements/employed'
      );

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
};

export default achievementsApi;
