import { bazaAPI } from './config';

import { IStack, updateByIdRequest } from '@/types/typesAPI';

const stacksApi = {
  getAll() {
    return bazaAPI.get('/stacks');
  },

  createNew(stack: IStack) {
    return bazaAPI.post('/stacks', stack);
  },

  getById(id: string) {
    return bazaAPI.get(`/stacks/${id}`);
  },

  deleteById(id: string) {
    return bazaAPI.delete(`/stacks/${id}`);
  },

  updateById([id, payload]: updateByIdRequest) {
    return bazaAPI.patch(`/stacks/${id}`, payload);
  },
};

export default stacksApi;
