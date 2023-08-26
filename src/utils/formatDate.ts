// const monthNames = [
//   dict.monthsNames?.january,
//   dict.monthsNames?.february,
//   dict.monthsNames?.march,
//   dict.monthsNames?.april,
//   dict.monthsNames?.may,
//   dict.monthsNames?.june,
//   dict.monthsNames?.july,
//   dict.monthsNames?.august,
//   dict.monthsNames?.september,
//   dict.monthsNames?.october,
//   dict.monthsNames?.november,
//   dict.monthsNames?.december,
// ];

import { TDictionary } from '@/types';

export const formatDate = (
  dateString: string | number,
  month: 'spelled' | 'nouns' = 'spelled',
  dict: TDictionary
) => {
  const monthNames = dict.monthsNames;

  if (!dateString) return '';

  const date = new Date(dateString);
  const day = date.getDate();
  const monthName = monthNames[month][date.getMonth()];
  const year = date.getFullYear();
  const result =
    month === 'spelled'
      ? `${day} ${monthName} ${year}`
      : `${monthName} ${year}`;

  return result;
};

export const formatDateToYYYYMMDD = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};
