import axios from 'axios';

const file = {
  async upload(file: string) {
    try {
      const response = await axios.post('/upload', file);

      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default file;
