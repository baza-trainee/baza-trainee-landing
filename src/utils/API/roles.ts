import { IRole, TResponseRoles } from '@/types/typesAPI';
import { bazaAPI } from './config';

const rolesEndpoint = '/roles';

const rolesApi = {
  async getAll(uri: string) {
    return await bazaAPI.get<TResponseRoles>(uri).then((res) => res.data);
  },

  async createNew(role: IRole) {
    return await bazaAPI.post(rolesEndpoint, role);
  },

  async getById(id: string) {
    return await bazaAPI.get(`${rolesEndpoint}/${id}`);
  },

  async deleteById(id: string) {
    return await bazaAPI.delete(`${rolesEndpoint}/${id}`);
  },

  async updateById(id: string, role: IRole) {
    return await bazaAPI.patch(`${rolesEndpoint}/${id}`, role);
  },
};

export { rolesApi, rolesEndpoint };
