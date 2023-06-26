import { IPartner, byIdRequest, updateByIdRequest } from '@/types/typesAPI';
import { bazaAPI } from './config';

const partnersApi = {
  getAll() {
    return bazaAPI.get('/partners');
  },
  createNew(partner: IPartner) {
    return bazaAPI.post('/partners', partner);
  },
  getById(id: byIdRequest) {
    return bazaAPI.get(`/partners/${id}`);
  },
  deleteById(id: byIdRequest) {
    return bazaAPI.delete(`/partners/${id}`);
  },
  updateById([id, payload]: updateByIdRequest) {
    return bazaAPI.patch(`/partners/${id}`, payload);
  },
};

export default partnersApi;
