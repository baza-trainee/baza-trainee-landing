import { IRole, updateByIdRequest } from '@/types/typesAPI';
import { bazaAPI } from './config';

const rolesApi = {
  getAll() {
    return bazaAPI.get('/roles');
  },

  createNew(role: IRole) {
    return bazaAPI.post('/roles', role);
  },

  getById(id: string) {
    return bazaAPI.get(`/roles/${id}`);
  },

  deleteById(id: string) {
    return bazaAPI.delete(`/roles/${id}`);
  },

  updateById([id, payload]: updateByIdRequest) {
    return bazaAPI.patch(`/roles/${id}`, payload);
  },
};

export default rolesApi;
