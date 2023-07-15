import { IDocuments } from '@/types';
import { bazaAPI } from './config';

export const documentsApi = {
  getData() {
    return bazaAPI.get('/documents');
  },
  update(documents: IDocuments<File> | FormData) {
    return bazaAPI.patch('/documents', documents);
  },
};
