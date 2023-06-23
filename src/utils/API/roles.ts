import { bazaAPI } from './config';

const rolesApi = {
  async getAll() {
    return await bazaAPI.get('/roles');
  },
  async createNew(role: object) {
    return await bazaAPI.post('/roles', role);
  },
  async getById(id: string) {
    return await bazaAPI.get(`/roles/${id}`);
  },
  async deleteById(id: string) {
    return await bazaAPI.delete(`/roles/${id}`);
  },
  async updateById([id, payload]: [id: string, payload: object]) {
    return await bazaAPI.patch(`/roles/${id}`, payload);
  },
};

export default rolesApi;
