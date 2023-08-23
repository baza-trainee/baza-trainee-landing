import { dictionaries } from '@/app/[lang]/dictionaries';
import { TLandingLanguage } from '@/store/globalContext';
import { bazaAPI } from './config';

export const translateApi = {
  async translate({ text, lang }: { text: string; lang: string }) {
    return await bazaAPI.post(`/translation/${lang}`, {
      input: text,
    });
  },
};

export const translatePages = async (lang: TLandingLanguage) => {
  const dict = await dictionaries[lang]();
  return dict;
};
