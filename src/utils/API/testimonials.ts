import {
  ITestimonial,
  updateByIdRequest,
} from '@/types/typesAPI';
import { bazaAPI } from './config';

export const testimonialsEndPoint = '/testimonials';

export const testimonialsApi = {
  async getAll(uri: string) {
    return await bazaAPI.get<ITestimonial>(uri).then((res) => res.data);
  },

  createNew(testimonial: ITestimonial) {
    return bazaAPI.post('/testimonials', testimonial);
  },

  getById(id: string) {
    return bazaAPI.get(`/testimonials/${id}`);
  },

  deleteById(id: string) {
    return bazaAPI.delete(`/testimonials/${id}`);
  },

  updateById([id, payload]: updateByIdRequest) {
    return bazaAPI.patch(`/testimonials/${id}`, payload);
  },
};
