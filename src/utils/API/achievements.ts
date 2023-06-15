import axios, { AxiosResponse } from 'axios';

const achievements = {
  async getData() {
    try {
      const response: AxiosResponse = await axios.get('/achievements');

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async updateEmployed(employed: number) {
    try {
      const response: AxiosResponse = await axios.patch('/achievements', {
        employed,
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getEmployed() {
    try {
      const response: AxiosResponse = await axios.get('/achievements/employed');

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default achievements;
