import { dictionaries } from '@/locales/dictionaries';
import { TLandingLanguage } from '@/store/globalContext';

export const formatDate = (
  dateString: string | number,
  month: 'spelled' | 'nouns' = 'spelled',
  lang: TLandingLanguage
) => {
  const monthNames = dictionaries[lang].monthsNames;

  if (!dateString) return '';

  const date = new Date(dateString);
  const day = date.getDate();
  const monthName = monthNames[month][date?.getMonth()];
  const year = date.getFullYear();

  if (month === 'spelled') {
    return lang === 'en'
      ? `${
          monthName.charAt(0).toUpperCase() + monthName.slice(1)
        } ${day}, ${year}`
      : `${day} ${monthName} ${year}`;
  } else {
    return `${monthName} ${year}`;
  }
};

export const convertDate = {
  toYYYYMMDD: (value: number) =>
    value ? new Date(+value).toISOString().split('T')[0] : '',

  toMsec: (value?: string) =>
    value ? new Date(value).getTime() : 0
};
