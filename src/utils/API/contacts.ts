import { IUpdateContactsRequest } from '@/types/typesAPI';
import { bazaAPI } from './config';

const contactsApi = {
  getData() {
    return bazaAPI.get('/contacts');
  },
  update({ contacts }: IUpdateContactsRequest) {
    return bazaAPI.patch('/contacts', {
      contacts,
    });
  },
};

export default contactsApi;
