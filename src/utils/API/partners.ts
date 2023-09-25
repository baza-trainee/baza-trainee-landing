import { IPartner, updateByIdRequest } from '@/types/typesAPI';
import { bazaAPI } from './config';

const partnersApi = {
  getAll() {
    return bazaAPI.get('/partners');
  },
  createNew(partner: IPartner) {
    return bazaAPI.post('/partners', partner);
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
