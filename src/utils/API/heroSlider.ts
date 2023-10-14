import { bazaAPI } from './config';

import { TResponseSliders, updateByIdRequest } from '@/types/typesAPI';
import { TSlideReq } from '@/types/commonTypes';

export const slidersEndPoint = '/heroslider';

export const heroSliderApi = {
  async getAll(uri: string) {
    return await bazaAPI.get<TResponseSliders>(uri).then((res) => res.data);
  },
  async createNew(slider: TSlideReq) {
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
  async updateById(id: string, updSlide: TSlideReq) {
    return await bazaAPI.patch(`${slidersEndPoint}/${id}`, updSlide, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
};
