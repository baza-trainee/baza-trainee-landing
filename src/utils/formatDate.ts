import { TDictionary } from '@/types';

export const formatDate = (dateString: string | number, dict: TDictionary) => {
  // const monthNames = [
  //   'січня',
  //   'лютого',
  //   'березня',
  //   'квітня',
  //   'травня',
  //   'червня',
  //   'липня',
  //   'серпня',
  //   'вересня',
  //   'жовтня',
  //   'листопада',
  //   'грудня',
  // ];
  const monthNames = [
    dict.monthsNames?.january,
    dict.monthsNames?.february,
    dict.monthsNames?.march,
    dict.monthsNames?.april,
    dict.monthsNames?.may,
    dict.monthsNames?.june,
    dict.monthsNames?.july,
    dict.monthsNames?.august,
    dict.monthsNames?.september,
    dict.monthsNames?.october,
    dict.monthsNames?.november,
    dict.monthsNames?.december,
  ];
  const date = new Date(dateString);
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
