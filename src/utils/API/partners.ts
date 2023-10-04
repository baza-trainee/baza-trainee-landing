import { bazaAPI } from './config';

import { PartnerData } from '@/types';
import { updateByIdRequest } from '@/types/typesAPI';

const partnersApi = {
  getAll({
    page,
    query,
    limit,
  }: {
    page?: number;
    query?: string;
    limit?: number;
  }) {
    return bazaAPI.get(
      `/partners?${page ? `page=${page}` : ''}${
        query ? `&query=${query}` : ''
      }${limit ? `&limit=${limit}` : ''}`
    );
  },
  createNew(partner: PartnerData) {
    return bazaAPI.post('/partners', partner, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  getById(id: string) {
    return bazaAPI.get(`/partners/${id}`);
  },
  deleteById(id: string) {
    return bazaAPI.delete(`/partners/${id}`);
  },
  updateById([id, payload]: updateByIdRequest) {
    return bazaAPI.patch(`/partners/${id}`, payload);
  },
};

export default partnersApi;
