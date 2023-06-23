import { bazaAPI } from './config';

const membersApi = {
  async getAll() {
    return await bazaAPI.get('/members');
  },
  async createNew(member: object) {
    return await bazaAPI.post('/members', member);
  },
  async getById(id: string) {
    return await bazaAPI.get(`/members/${id}`);
  },
  async deleteById(id: string) {
    return await bazaAPI.delete(`/members/${id}`);
  },
  async updateById([id, payload]: [id: string, payload: object]) {
    return await bazaAPI.patch(`/members/${id}`, payload);
  },
};
export default membersApi;
