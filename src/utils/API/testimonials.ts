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

  async createNew(testimonial: ITestimonial) {
    return await bazaAPI.post(testimonialsEndPoint, testimonial);
  },

  async getById(id: string) {
    return await bazaAPI.get(`${testimonialsEndPoint}/${id}`);
  },

  deleteById(id: string) {
    return bazaAPI.delete(`${testimonialsEndPoint}/${id}`);
  },

  async updateById([id, payload]: updateByIdRequest) {
    return await bazaAPI.patch(`${testimonialsEndPoint}/${id}`, payload);
  },
};
