import { bazaAPI } from './config';

export const documentsApi = {
  getData() {
    return bazaAPI.get('/documents');
  },
  update<T>(documents: T) {
    return bazaAPI.patch('/documents', documents);
  },
};
