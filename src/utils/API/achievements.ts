import { IUpdateEmployedRequest } from '@/types/typesAPI';
import { bazaAPI } from './config';

const achievementsApi = {
  async getData() {
    return await bazaAPI.get('/achievements');
  },
  async updateEmployed(employed: IUpdateEmployedRequest) {
    return await bazaAPI.patch('/achievements', employed);
  },
  async getEmployed() {
    return await bazaAPI.get('/achievements/employed');
  },
};

export default achievementsApi;
