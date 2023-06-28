import { IMember, byIdRequest, updateByIdRequest } from '@/types/typesAPI';
import { bazaAPI } from './config';

const membersApi = {
  getAll() {
    return bazaAPI.get('/members');
  },
  createNew(member: IMember) {
    return bazaAPI.post('/members', member);
  },
  getById(id: byIdRequest) {
    return bazaAPI.get(`/members/${id}`);
  },
  deleteById(id: byIdRequest) {
    return bazaAPI.delete(`/members/${id}`);
  },
  updateById([id, payload]: updateByIdRequest) {
    return bazaAPI.patch(`/members/${id}`, payload);
  },
};
export default membersApi;
