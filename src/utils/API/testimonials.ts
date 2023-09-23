import { ITestimonial, ITestimonialRequest, updateByIdRequest } from '@/types/typesAPI';
import { bazaAPI } from './config';

const testimonialsApi = {
  async getAll() {
    return await bazaAPI.get('/testimonials').then((res) => res.data);
  },

  async createNew(testimonial: ITestimonialRequest) {
    return await bazaAPI
      .post<ITestimonial>('/testimonials', testimonial, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
  },

  async getById(id: string) {
    return await bazaAPI.get(`/testimonials/${id}`).then((res) => res.data);
  },

  async deleteById(id: string) {
    return await bazaAPI.delete(`/testimonials/${id}`);
  },

  async updateById([id, payload]: updateByIdRequest) {
    return await bazaAPI
      .patch(`/testimonials/${id}`, payload, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => res.data);
  },
};

export default testimonialsApi;
