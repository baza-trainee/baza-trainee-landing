import { IMember, TResponseMembers } from '@/types/typesAPI';
import { bazaAPI } from './config';
import { TTeamMemberBio } from '@/types';

const membersEndpoint = '/members';

const membersApi = {
  async getAll(uri: string) {
    return await bazaAPI.get<TResponseMembers>(uri).then((res) => res.data);
  },

  async createNew(member: IMember) {
    return await bazaAPI
      .post<TTeamMemberBio>(membersEndpoint, member)
      .then((res) => res.data);
  },

  async getById(id: string) {
    return await bazaAPI
      .get(`${membersEndpoint}/${id}`)
      .then((res) => res.data);
  },

  async deleteById(id: string) {
    return await bazaAPI
      .delete<TTeamMemberBio>(`${membersEndpoint}/${id}`)
      .then((res) => res.data);
  },

  async updateById(id: string, member: IMember) {
    return await bazaAPI
      .patch<TTeamMemberBio>(`${membersEndpoint}/${id}`, member)
      .then((res) => res.data);
  },
};

export { membersEndpoint, membersApi };
