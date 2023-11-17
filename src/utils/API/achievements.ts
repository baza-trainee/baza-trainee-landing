import { bazaAPI } from './config';

import { IUpdateEmployedRequest } from '@/types/typesAPI';

const achievementsApi = {
  async getData() {
    const res = await bazaAPI.get('/achievements');
    return res;
  },
  async updateEmployed(employed: IUpdateEmployedRequest) {
    return await bazaAPI.patch('/achievements', employed);
  },
  async getEmployed() {
    return await bazaAPI.get('/achievements/employed');
  },
};

export default achievementsApi;
