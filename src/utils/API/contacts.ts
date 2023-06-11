import axios from 'axios';

const contacts = {
  async getAll() {
    try {
      const response = await axios.get('/contacts');

      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async update({ contacts }: { contacts: object }) {
    try {
      const response = await axios.post('/contacts', { contacts });

      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default contacts;
