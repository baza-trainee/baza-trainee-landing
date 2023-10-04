import { bazaAPI } from './config';

import { TMemberBioReq, TMemberBioResp } from '@/types';
import { TResponseMembers } from '@/types/typesAPI';

const membersEndpoint = '/members';

const membersApi = {
  async getAll(uri: string) {
    return await bazaAPI.get<TResponseMembers>(uri).then((res) => res.data);
  },

  async createNew(member: TMemberBioReq) {
    return await bazaAPI
      .post(membersEndpoint, member)
      .then<TMemberBioResp>((res) => res.data);
  },

  async getById(id: string) {
    return await bazaAPI
      .get(`${membersEndpoint}/${id}`)
      .then<TMemberBioResp>((res) => res.data);
  },

  async deleteById(id: string) {
    return await bazaAPI
      .delete(`${membersEndpoint}/${id}`)
      .then<TMemberBioResp>((res) => res.data);
  },

  async updateById(id: string, member: TMemberBioReq) {
    return await bazaAPI
      .patch(`${membersEndpoint}/${id}`, member)
      .then<TMemberBioResp>((res) => res.data);
  },
};

export { membersApi, membersEndpoint };
