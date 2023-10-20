import { bazaAPI } from './config';

import { TProjectReq, TProjectResp, TResponseProjects } from '@/types';

export type TGetAll = {
  page?: number;
  search?: string;
  limit?: number;
};

const projectsEndpoint = '/projects';

const projectsApi = {
  async getAll({ page, search, limit }: TGetAll) {
    const params = new URLSearchParams();
    if (page) params.append('page', page.toString());
    if (search) params.append('search', search);
    if (limit) params.append('limit', limit.toString());

    return await bazaAPI
      .get(`${projectsEndpoint}?${params.toString()}`)
      .then<TResponseProjects>((res) => res.data);
  },

  async createNew(project: TProjectReq) {
    return await bazaAPI
      .post(projectsEndpoint, project, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then<TProjectResp>((res) => res.data);
  },

  async getById(id: string) {
    return await bazaAPI
      .get(`${projectsEndpoint}/${id}`)
      .then<TProjectResp>((res) => res.data);
  },

  async deleteById(id: string) {
    return await bazaAPI.delete(`${projectsEndpoint}/${id}`);
  },

  async updateById(id: string, project: TProjectReq) {
    return await bazaAPI
      .put(`asd${projectsEndpoint}/${id}`, project, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then<TProjectResp>((res) => res.data);
  },
};

export { projectsApi, projectsEndpoint };
