import { Dispatch, SetStateAction } from 'react';

const INCREMENT_SPEED = 10; // Bigger number - slower speed
const INCREMENT_ACCURACY = 100;

const counterHandler = (
  value: number,
  finalValue: number,
  valueHandler: Dispatch<SetStateAction<number>>,
  doAfterCount = () => {}
) => {
  const increment = finalValue / INCREMENT_ACCURACY;
  let currentValue = value;

  const interval = setInterval(() => {
    if (currentValue < finalValue) {
      valueHandler(Math.trunc(currentValue));
      currentValue = currentValue + increment;
    } else {
      valueHandler(finalValue);
      clearInterval(interval);
      doAfterCount();
    }
  }, INCREMENT_SPEED);
};

export default counterHandler;
