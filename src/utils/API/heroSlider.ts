import { AxiosResponse } from 'axios';
import { IError } from '../../types/typesAPI';
import { bazaAPI } from './config';

const heroSliderApi = {
  async getAll() {
    return await bazaAPI.get('/heroslider');
  },
  async createNew(slider: object) {
    return await bazaAPI.post('/heroslider', slider);
  },
  async getById(id: string) {
    return await bazaAPI.get(`/heroslider/${id}`);
  },
  async deleteById(id: string) {
    return await bazaAPI.delete(`/heroslider/${id}`);
  },
  async updateById([id, payload]: [id: string, payload: object]): Promise<
    AxiosResponse | IError
  > {
    return await bazaAPI.patch(`/heroslider/${id}`, payload);
  },
};

export default heroSliderApi;
