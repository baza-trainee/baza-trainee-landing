import { IMember } from '@/types/typesAPI';
import { bazaAPI } from './config';

const membersEndpoint = '/members';

const membersApi = {
  async getAll() {
    return await bazaAPI
      .get<IMember[]>(membersEndpoint)
      .then((res) => res.data);
  },

  async createNew(member: IMember) {
    return await bazaAPI.post(membersEndpoint, member);
  },

  async getById(id: string) {
    return await bazaAPI.get(`${membersEndpoint}/${id}`);
  },

  async deleteById(id: string) {
    return await bazaAPI.delete(`${membersEndpoint}/${id}`);
  },

  async updateById(id: string, member: IMember) {
    return await bazaAPI.patch(`${membersEndpoint}/${id}`, member);
  },
};

export { membersEndpoint, membersApi };
