import { bazaAPI } from './config';

const achievementsApi = {
  async getData() {
    return await bazaAPI.get('/achievements');
  },
  async updateEmployed(employed: number) {
    return await bazaAPI.patch('/achievements', {
      employed,
    });
  },
  async getEmployed() {
    return await bazaAPI.get('/achievements/employed');
  },
};

export default achievementsApi;
