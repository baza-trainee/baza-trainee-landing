export const formatDate = (
  dateString: string | number,
  month: 'spelled' | 'nouns' = 'spelled'
) => {
  const monthNames = {
    spelled: [
      'січня',
      'лютого',
      'березня',
      'квітня',
      'травня',
      'червня',
      'липня',
      'серпня',
      'вересня',
      'жовтня',
      'листопада',
      'грудня',
    ],
    nouns: [
      'січень',
      'лютий',
      'березень',
      'квітень',
      'травень',
      'червень',
      'липень',
      'серпень',
      'вересень',
      'жовтень',
      'листопад',
      'грудень',
    ],
  };
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
