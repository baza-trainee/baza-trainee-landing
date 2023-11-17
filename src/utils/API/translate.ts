import { bazaAPI } from './config';

export const translateApi = {
  async translate({ text, lang }: { text: string; lang: 'en' | 'pl' }) {
    return await bazaAPI.post(`/translation/${lang}`, {
      input: text,
    });
  },
};
