const formatDate = (
  dateString: string,
  dictionary: {
    monthsNames: {
      january: string;
      february: string;
      march: string;
      april: string;
      may: string;
      june: string;
      july: string;
      august: string;
      september: string;
      october: string;
      november: string;
      december: string;
    };
  }
) => {
  const monthNames = [
    dictionary.monthsNames?.january,
    dictionary.monthsNames?.february,
    dictionary.monthsNames?.march,
    dictionary.monthsNames?.april,
    dictionary.monthsNames?.may,
    dictionary.monthsNames?.june,
    dictionary.monthsNames?.july,
    dictionary.monthsNames?.august,
    dictionary.monthsNames?.september,
    dictionary.monthsNames?.october,
    dictionary.monthsNames?.november,
    dictionary.monthsNames?.december,
  ];
  const date = new Date(dateString);
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
export default formatDate;
