import { IUpdateContactsRequest } from '@/types/typesAPI';
import { bazaAPI } from './config';

const contactsApi = {
  async getData() {
    return await bazaAPI.get('/contacts');
  },
  async update({ contacts }: IUpdateContactsRequest) {
    return await bazaAPI.patch('/contacts', {
      contacts,
    });
  },
};

export default contactsApi;
