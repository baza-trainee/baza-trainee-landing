export const formatDate = (
  dateString: string | number,
  month: 'spelled' | 'nouns' = 'spelled',
  dict: any
) => {
  if (dict) {
    const monthNames = dict?.monthsNames;
    if (!dateString) return '';

    const date = new Date(dateString);
    const day = date.getDate();
    const monthName = monthNames[month][date?.getMonth()];
    const year = date.getFullYear();
    const result =
      month === 'spelled'
        ? `${day} ${monthName} ${year}`
        : `${monthName} ${year}`;
    return result;
  }
};

export const formatDateToYYYYMMDD = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};
