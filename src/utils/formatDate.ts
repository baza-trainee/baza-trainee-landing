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
  console.log("FORMAT>>",dateString,date, day, monthName, year);
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
  toYYYYMMDD: (value: number) => {
    if (!value) return '';

    const date = new Date(+value);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  },

  toMilliseconds: (value?: string) => {
    if (!value) return 0;

    const date = new Date(value);
    // console.log(value, date);
    return date.getTime();
  },
};
