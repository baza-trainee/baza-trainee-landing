import { bazaAPI } from './config';

export const translateApi = {
  async translate({ text, lang }: { text: string; lang: string }) {
    return await bazaAPI.post(`/translation/${lang}`, {
      input: text,
    });
  },
};
