import { IHeroSlider, byIdRequest, updateByIdRequest } from '@/types/typesAPI';
import { bazaAPI } from './config';

const heroSliderApi = {
  getAll() {
    return bazaAPI.get('/heroslider');
  },
  createNew(slider: IHeroSlider) {
    return bazaAPI.post('/heroslider', slider);
  },
  getById(id: byIdRequest) {
    return bazaAPI.get(`/heroslider/${id}`);
  },
  deleteById(id: byIdRequest) {
    return bazaAPI.delete(`/heroslider/${id}`);
  },
  updateById([id, payload]: updateByIdRequest) {
    return bazaAPI.patch(`/heroslider/${id}`, payload);
  },
};

export default heroSliderApi;
