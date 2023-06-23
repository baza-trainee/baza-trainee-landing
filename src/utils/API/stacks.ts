import { bazaAPI } from './config';

const stacksApi = {
  async getAll() {
    return await bazaAPI.get('/stacks');
  },
  async createNew(stack: object) {
    return await bazaAPI.post('/stacks', stack);
  },
  async getById(id: string) {
    return await bazaAPI.get(`/stacks/${id}`);
  },
  async deleteById(id: string) {
    return await bazaAPI.delete(`/stacks/${id}`);
  },
  async updateById([id, payload]: [id: string, payload: object]) {
    return await bazaAPI.patch(`/stacks/${id}`, payload);
  },
};

export default stacksApi;
