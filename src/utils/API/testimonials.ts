import { ITestimonial, byIdRequest, updateByIdRequest } from '@/types/typesAPI';
import { bazaAPI } from './config';

const testimonialsApi = {
  getAll2() {
    return bazaAPI.get('/testimonials');
  },
  async getAll() {
    const res = await fetch('https://baza-trainee.tech/api/v1/testimonials', {
      cache: 'no-cache',
    });
    const result = res.json() as unknown as ITestimonial[];
    return res.ok ? result : [];
  },

  createNew(testimonial: ITestimonial) {
    return bazaAPI.post('/testimonials', testimonial);
  },

  getById(id: byIdRequest) {
    return bazaAPI.get(`/testimonials/${id}`);
  },

  deleteById(id: byIdRequest) {
    return bazaAPI.delete(`/testimonials/${id}`);
  },

  updateById([id, payload]: updateByIdRequest) {
    return bazaAPI.patch(`/testimonials/${id}`, payload);
  },
};

export default testimonialsApi;
