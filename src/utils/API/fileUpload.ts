import axios from 'axios';

const file = {
  async upload(file: any) {
    try {
      console.log(file);
      const response = await axios.post('/upload', file);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default file;
