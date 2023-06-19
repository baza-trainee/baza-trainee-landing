import axios from 'axios';

const projects = {
  async getAll() {
    try {
      const response = await axios.get('/projects');

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  // TO DO

  async createNew(project: object) {
    try {
      const response = await axios.post('/projects', project);

      return response.data;
    } catch (error) {
      console.log();
    }
  },
  async getById(id: string) {
    try {
      const response = await axios.get(`/projects/${id}`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteById(id: string) {
    try {
      const response = await axios.delete(`/projects/${id}`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  // TO DO
  async updateById(id: string, payload: object) {
    try {
      const response = await axios.patch(`/projects/${id}`, payload);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default projects;
