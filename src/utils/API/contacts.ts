import axios, { AxiosResponse } from 'axios';

const contacts = {
  async getData() {
    try {
      const response: AxiosResponse = await axios.get('/contacts');

      return response.data.contacts;
    } catch (error) {
      console.log(error);
    }
  },
  async update({ contacts }: { contacts: object }) {
    console.log('contacts:', { contacts });

    try {
      const response: AxiosResponse = await axios.patch('/contacts', {
        contacts,
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default contacts;
