import { bazaAPI } from './config';

import { TResponseProjects, TProjectRequest, IProject } from '@/types';

const projectsEndpoint = '/projects';

const projectsApi = {
  async getAll(uri: string) {
    return await bazaAPI.get<TResponseProjects>(uri).then((res) => res.data);
  },

  async createNew(project: TProjectRequest) {
    return await bazaAPI
      .post<IProject>(projectsEndpoint, project, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => res.data);
  },

  async getById(id: string) {
    return await bazaAPI
      .get<IProject>(`${projectsEndpoint}/${id}`)
      .then((res) => res.data);
  },

  async deleteById(id: string) {
    return await bazaAPI.delete(`${projectsEndpoint}/${id}`);
  },

  async updateById(id: string, project: TProjectRequest) {
    return await bazaAPI
      .patch<IProject>(`${projectsEndpoint}/${id}`, project)
      .then((res) => res.data);
  },
};

export { projectsEndpoint, projectsApi };
