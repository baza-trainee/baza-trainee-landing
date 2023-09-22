import { PartnerData } from '@/types';
import { updateByIdRequest } from '@/types/typesAPI';
import { bazaAPI } from './config';

const partnersApi = {
  getAll(page?: number) {
    return bazaAPI.get(`/partners${page ? `?page=${page}` : ''}`);
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
