import { bazaAPI } from './config';

import { IProject } from '@/types';
import { TResponseProjects } from '@/types/typesAPI';

const projectsEndpoint = '/projects';

const projectsApi = {
  async getAll(uri: string) {
    return await bazaAPI.get<TResponseProjects>(uri).then((res) => res.data);
  },

  async createNew(project: IProject) {
    return await bazaAPI.post(projectsEndpoint, project);
  },

  async getById(id: string) {
    return await bazaAPI.get(`${projectsEndpoint}/${id}`);
  },

  async deleteById(id: string) {
    return await bazaAPI.delete(`${projectsEndpoint}/${id}`);
  },

  async updateById(id: string, project: IProject) {
    return await bazaAPI.patch(`${projectsEndpoint}/${id}`, project);
  },
};

export { projectsEndpoint, projectsApi };
