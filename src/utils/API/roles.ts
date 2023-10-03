import { TResponseRoles } from '@/types/typesAPI';
import { TMemberRoleReq, TMemberRoleResp } from '@/types/projectsTypes';
import { bazaAPI } from './config';

const rolesEndpoint = '/roles';

const rolesApi = {
  async getAll(uri: string) {
    return await bazaAPI.get<TResponseRoles>(uri).then((res) => res.data);
  },

  async createNew(role: TMemberRoleReq) {
    return await bazaAPI.post<TMemberRoleResp>(rolesEndpoint, role);
  },

  async getById(id: string) {
    return await bazaAPI.get<TMemberRoleResp>(`${rolesEndpoint}/${id}`);
  },

  async deleteById(id: string) {
    return await bazaAPI.delete(`${rolesEndpoint}/${id}`);
  },

  async updateById(id: string, role: TMemberRoleReq) {
    return await bazaAPI.patch<TMemberRoleResp>(`${rolesEndpoint}/${id}`, role);
  },
};

export { rolesApi, rolesEndpoint };
