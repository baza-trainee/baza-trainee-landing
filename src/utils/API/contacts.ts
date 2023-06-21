import { AxiosResponse } from 'axios';
import { bazaAPI } from '../hooks/useAPI';
import { IError } from './types';

const contactsApi = {
  async getData(): Promise<AxiosResponse | IError> {
    try {
      const response: AxiosResponse = await bazaAPI.get('/contacts');

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async update({
    contacts,
  }: {
    contacts: object;
  }): Promise<AxiosResponse | IError> {
    console.log('contacts:', { contacts });

    try {
      const response: AxiosResponse = await bazaAPI.patch('/contacts', {
        contacts,
      });

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
};

export default contactsApi;
