import { bazaAPI } from './config';

import { TMemberBioReq, TMemberBioResp, TGetAll } from '@/types';
import { TResponseMembers } from '@/types/typesAPI';

const membersEndpoint = '/members';

const membersApi = {
  async getAll({ page, search, limit }: TGetAll) {
    const params = new URLSearchParams();
    if (page) params.append('page', page.toString());
    if (search) params.append('search', search);
    if (limit) params.append('limit', limit.toString());

    return await bazaAPI
      .get(`${membersEndpoint}?${params.toString()}`)
      .then<TResponseMembers>((res) => res.data);
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
