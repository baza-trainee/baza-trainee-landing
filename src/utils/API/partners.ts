import { bazaAPI } from './config';

import { TPartnerReq, TPartnerResp } from '@/types';
import { TResponsePartners } from '@/types/typesAPI';

type TGetAll = { page?: number; query?: string; limit?: number };

const partnersEndpoint = '/partners';

const partnersApi = {
  async getAll({ page, query, limit }: TGetAll) {
    const params = new URLSearchParams();
    if (page) params.append('page', page.toString());
    if (query) params.append('query', query);
    if (limit) params.append('limit', limit.toString());

    return await bazaAPI
      .get(`${partnersEndpoint}?${params.toString()}`)
      .then<TResponsePartners>((res) => res.data);
  },

  async createNew(newPartner: TPartnerReq) {
    return await bazaAPI
      .post(partnersEndpoint, newPartner, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then<TPartnerResp>((res) => res.data);
  },

  async getById(id: string) {
    return await bazaAPI
      .get(`${partnersEndpoint}/${id}`)
      .then<TPartnerResp>((res) => res.data);
  },

  async deleteById(id: string) {
    return await bazaAPI
      .delete(`${partnersEndpoint}/${id}`)
      .then<TPartnerResp>((res) => res.data);
  },

  async updateById(id: string, updPartner: TPartnerReq) {
    return await bazaAPI
      .patch(`${partnersEndpoint}/${id}`, updPartner, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then<TPartnerResp>((res) => res.data);
  },
};

export { partnersApi, partnersEndpoint };
