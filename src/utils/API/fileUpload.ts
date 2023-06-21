import axios from 'axios';

const fileApi = {
  async upload(file: any) {
    try {
      console.log(file);
      const response = await axios.post('/upload', file);

      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default fileApi;
