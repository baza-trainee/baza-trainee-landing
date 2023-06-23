import { bazaAPI } from './config';

const projectsApi = {
  async getAll() {
    return await bazaAPI.get('/projects');
  },

  async createNew(project: object) {
    return await bazaAPI.post('/projects', project);
  },

  async search(query: string) {
    return await bazaAPI.get(`/projects/search?query=${query}`);
  },

  async getById(id: string) {
    return await bazaAPI.get(`/projects/${id}`);
  },
  async deleteById(id: string) {
    return await bazaAPI.delete(`/projects/${id}`);
  },

  async updateById([id, payload]: [id: string, payload: object]) {
    return await bazaAPI.patch(`/projects/${id}`, payload);
  },
};

export default projectsApi;
