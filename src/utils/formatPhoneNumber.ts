export function formatPhoneNumber(number: number) {
  let formattedNumber = '+';
  let numberString = number.toString();
  formattedNumber += numberString.slice(0, 2) + ' ';
  formattedNumber += numberString.slice(2, 5) + ' ';
  formattedNumber += numberString.slice(5, 8) + ' ';
  formattedNumber += numberString.slice(8);
  return formattedNumber;
}
