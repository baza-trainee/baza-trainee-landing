import { AxiosResponse } from 'axios';
import { IError } from '../../types/typesAPI';
import { bazaAPI } from '../hooks/useAPI';

const testimonialsApi = {
  async getAll(): Promise<AxiosResponse | IError> {
    try {
      const response = bazaAPI.get('/testimonials');

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async createNew(testimonial: object): Promise<AxiosResponse | IError> {
    try {
      const response = bazaAPI.post('/testimonials', testimonial);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async getById(id: string): Promise<AxiosResponse | IError> {
    try {
      const response = bazaAPI.get(`/testimonials/${id}`);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async deleteById(id: string): Promise<AxiosResponse | IError> {
    try {
      const response = bazaAPI.delete(`/testimonials/${id}`);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async updateById([id, payload]: [id: string, payload: object]): Promise<
    AxiosResponse | IError
  > {
    try {
      if (!id || !payload) {
        throw {
          message: 'Must be id payload payload',
          responseMessage: 'none',
          status: '1',
        };
      }

      const response = bazaAPI.patch(`/testimonials/${id}`, payload);

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
};

export default testimonialsApi;
