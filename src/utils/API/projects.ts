import axios from 'axios';

const projects = {
  async getAll() {
    try {
      const response = await axios.get('/projects');

      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async createNew(project: object) {
    try {
      const response = await axios.post('/projects', project);

      return response;
    } catch (error) {
      console.log();
    }
  },
  async getById(id: string) {
    try {
      const response = await axios.get(`/projects/${id}`);

      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteById(id: string) {
    try {
      const response = await axios.delete(`/projects/${id}`);

      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async updateById(id: string) {
    try {
      const response = await axios.patch(`/projects/${id}`);

      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default projects;
