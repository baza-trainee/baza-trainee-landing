import axios, { AxiosResponse } from 'axios';
import { IError } from './types';

const achievements = {
  async getData(): Promise<AxiosResponse | IError> {
    try {
      const response: AxiosResponse = await axios.get('/achievements');

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async updateEmployed(employed: number): Promise<AxiosResponse | IError> {
    try {
      const response: AxiosResponse = await axios.patch('/achievements', {
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
      const response: AxiosResponse = await axios.get('/achievements/employed');

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
};

export default achievements;
