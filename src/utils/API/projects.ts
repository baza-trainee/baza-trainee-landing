import { bazaAPI } from './config';

import { TResponseProjects, TProjectRequest, TProject } from '@/types';

const projectsEndpoint = '/projects';

const projectsApi = {
  async getAll(uri: string) {
    return await bazaAPI.get<TResponseProjects>(uri).then((res) => res.data);
  },

  async createNew(project: TProjectRequest) {
    return await bazaAPI
      .post<TProject>(projectsEndpoint, project, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => res.data);
  },

  async getById(id: string) {
    return await bazaAPI
      .get<TProject>(`${projectsEndpoint}/${id}`)
      .then((res) => res.data);
  },

  async deleteById(id: string) {
    return await bazaAPI.delete(`${projectsEndpoint}/${id}`);
  },

  async updateById(id: string, project: TProjectRequest) {
    // console.log('API req >>', project);
    return await bazaAPI
      .put<TProject>(`${projectsEndpoint}/${id}`, project, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        // console.log('API res >>', res.data);

        return res.data;
      });
  },
};

export { projectsEndpoint, projectsApi };
