import { IHeroSlider, byIdRequest, updateByIdRequest } from '@/types/typesAPI';
import { bazaAPI } from './config';

export const slidersEndPoint = '/heroslider';

export const heroSliderApi = {
  async getAll(uri: string) {
    return await bazaAPI.get<IHeroSlider>(uri);
  },
  async createNew(slider: IHeroSlider) {
    return await bazaAPI.post(slidersEndPoint, slider);
  },
  async getById(id: byIdRequest) {
    return await bazaAPI.get(`${slidersEndPoint}/${id}`);
  },
  async deleteById(id: byIdRequest) {
    return await bazaAPI.delete(`${slidersEndPoint}/${id}`);
  },
  async updateById([id, payload]: updateByIdRequest) {
    return await bazaAPI.patch(`${slidersEndPoint}/${id}`, payload);
  },
};
