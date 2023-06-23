import { bazaAPI } from './config';

const fileApi = {
  async upload(file: any) {
    return await bazaAPI.post('/upload', file);
  },
};

export default fileApi;
