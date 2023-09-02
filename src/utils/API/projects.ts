import { IProject } from '@/types';
import {
  TResponseProjects,
  searchProjectRequest,
  updateByIdRequest,
} from '@/types/typesAPI';
import { bazaAPI } from './config';

const projectsApi = {
  getAll(limit?: number) {
    const queryParam = limit ? `?limit=${limit}` : '';
    return bazaAPI.get<TResponseProjects>(`/projects${queryParam}`);
  },

  createNew(project: IProject) {
    return bazaAPI.post('/projects', project);
  },

  search(query: searchProjectRequest) {
    return bazaAPI.get(`/projects/search?query=${query}`);
  },

  getById(id: string) {
    return bazaAPI.get(`/projects/${id}`);
  },

  deleteById(id: string) {
    return bazaAPI.delete(`/projects/${id}`);
  },

  updateById([id, payload]: updateByIdRequest) {
    return bazaAPI.patch(`/projects/${id}`, payload);
  },
};

export default projectsApi;
