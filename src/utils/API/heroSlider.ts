import {
  IHeroSlider,
  THeroSliderData,
  updateByIdRequest,
} from '@/types/typesAPI';
import { bazaAPI } from './config';

export const slidersEndPoint = '/heroslider';

export const heroSliderApi = {
  async getAll(uri: string) {
    return await bazaAPI.get<THeroSliderData>(uri).then((res) => res.data);
  },
  async createNew(slider: IHeroSlider) {
    return await bazaAPI.post(slidersEndPoint, slider, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  async getById(id: string) {
    return await bazaAPI.get(`${slidersEndPoint}/${id}`);
  },
  async deleteById(id: string) {
    return await bazaAPI.delete(`${slidersEndPoint}/${id}`);
  },
  async updateById([id, payload]: updateByIdRequest) {
    return await bazaAPI.patch(`${slidersEndPoint}/${id}`, payload, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
};
