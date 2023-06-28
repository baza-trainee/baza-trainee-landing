import { ITestimonial, byIdRequest, updateByIdRequest } from '@/types/typesAPI';
import { bazaAPI } from './config';

const testimonialsApi = {
  getAll() {
    return bazaAPI.get('/testimonials');
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
