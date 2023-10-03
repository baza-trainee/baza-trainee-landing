import { bazaAPI } from './config';

import { TProjectReq, TProjectResp, TResponseProjects } from '@/types';

const projectsEndpoint = '/projects';

const projectsApi = {
  async getAll(uri: string) {
    return await bazaAPI.get<TResponseProjects>(uri).then((res) => res.data);
  },

  async createNew(project: TProjectReq) {
    return await bazaAPI
      .post<TProjectResp>(projectsEndpoint, project, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => res.data);
  },

  async getById(id: string) {
    return await bazaAPI
      .get<TProjectResp>(`${projectsEndpoint}/${id}`)
      .then((res) => res.data);
  },

  async deleteById(id: string) {
    return await bazaAPI.delete(`${projectsEndpoint}/${id}`);
  },

  async updateById(id: string, project: TProjectReq) {
    // console.log('API req >>', project);
    return await bazaAPI
      .put<TProjectResp>(`${projectsEndpoint}/${id}`, project, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        // console.log('API res >>', res.data);

        return res.data;
      });
  },
};

export { projectsApi, projectsEndpoint };

