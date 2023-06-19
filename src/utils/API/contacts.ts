import axios, { AxiosResponse } from 'axios';
import { IContacts, IError } from './types';

const contacts = {
  async getData(): Promise<IContacts | IError> {
    try {
      const response: AxiosResponse = await axios.get('/contacts');

      return response.data.contacts;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
  async update({
    contacts,
  }: {
    contacts: object;
  }): Promise<IContacts | IError> {
    console.log('contacts:', { contacts });

    try {
      const response: AxiosResponse = await axios.patch('/contacts', {
        contacts,
      });

      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
};

export default contacts;
