import axios, { AxiosResponse } from 'axios';
import { IAchievements, IError } from './types';

const achievements = {
  async getData(): Promise<IAchievements | IError> {
    try {
      const response: AxiosResponse = await axios.get('/achievement');

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async updateEmployed(employed: number): Promise<IAchievements | IError> {
    try {
      const response: AxiosResponse = await axios.patch('/achievements', {
        employed,
      });

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async getEmployed(): Promise<Number | IError> {
    try {
      const response: AxiosResponse = await axios.get('/achievements/employed');

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
};

export default achievements;
