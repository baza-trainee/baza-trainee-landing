import { bazaAPI } from './config';

const partnersApi = {
  async getAll() {
    return await bazaAPI.get('/partners');
  },
  async createNew(partner: object) {
    return await bazaAPI.post('/partners', partner);
  },
  async getById(id: string) {
    return await bazaAPI.get(`/partners/${id}`);
  },
  async deleteById(id: string) {
    return await bazaAPI.delete(`/partners/${id}`);
  },
  async updateById([id, payload]: [id: string, payload: object]) {
    return await bazaAPI.patch(`/partners/${id}`, payload);
  },
};

export default partnersApi;
