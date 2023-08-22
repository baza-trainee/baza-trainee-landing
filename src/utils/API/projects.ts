import { IProject } from '@/types';
import {
  byIdRequest,
  searchProjectRequest,
  updateByIdRequest,
} from '@/types/typesAPI';
import { bazaAPI } from './config';

const projectsApi = {
  getAll(page?: number) {
    const queryParam = page ? `?page=${page}` : '';
    return bazaAPI.get(`/projects${queryParam}`);
  },

  createNew(project: IProject) {
    return bazaAPI.post('/projects', project);
  },

  search(query: searchProjectRequest) {
    return bazaAPI.get(`/projects/search?query=${query}`);
  },

  getById(id: byIdRequest) {
    return bazaAPI.get(`/projects/${id}`);
  },

  deleteById(id: byIdRequest) {
    return bazaAPI.delete(`/projects/${id}`);
  },

  updateById([id, payload]: updateByIdRequest) {
    return bazaAPI.patch(`/projects/${id}`, payload);
  },
};

export default projectsApi;
