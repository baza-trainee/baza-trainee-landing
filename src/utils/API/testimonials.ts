import { bazaAPI } from './config';

import {
  ITestimonialRequest,
  TTestimonialResp,
  updateByIdRequest,
} from '@/types/typesAPI';

export const testimonialsEndPoint = '/testimonials';

export const testimonialsApi = {
  async getAll(uri: string) {
    return await bazaAPI.get<TTestimonialResp[]>(uri).then((res) => res.data);
  },

  async getById(id: string) {
    const response = await bazaAPI.get<TTestimonialResp>(
      `${testimonialsEndPoint}/${id}`
    );
    return response;
  },

  async createNew(testimonial: ITestimonialRequest) {
    return await bazaAPI
      .post<TTestimonialResp>(`${testimonialsEndPoint}`, testimonial, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => res.data);
  },

  async deleteById(id: string) {
    return await bazaAPI.delete(`${testimonialsEndPoint}/${id}`);
  },

  async updateById([id, payload]: updateByIdRequest) {
    return await bazaAPI
      .patch<TTestimonialResp>(`${testimonialsEndPoint}/${id}`, payload, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => res.data);
  },
};
