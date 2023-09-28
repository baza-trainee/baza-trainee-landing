import {
  ITestimonial,
  ITestimonialRequest,
  updateByIdRequest,
} from '@/types/typesAPI';
import { bazaAPI } from './config';

export const testimonialsEndPoint = '/testimonials';

export const testimonialsApi = {
  
  async getAll(uri: string) {
    return await bazaAPI.get<ITestimonial[]>(uri).then((res) => res.data);
  },

  async createNew(testimonial: ITestimonialRequest) {
    return await bazaAPI.post<ITestimonial>('/testimonials', testimonial, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },

  async getById(id: string) {
    const response = await bazaAPI.get<ITestimonial>(`/testimonials/${id}`);
    return response;
  },

  async deleteById(id: string) {
    return await bazaAPI.delete(`${testimonialsEndPoint}/${id}`);
  },

  async updateById([id, payload]: updateByIdRequest) {
    return await bazaAPI
      .patch(`/testimonials/${id}`, payload, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => res.data);
  },
};
