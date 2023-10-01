import { TLandingLanguage } from '@/store/globalContext';
import { TProject } from '@/types';

export const projectCycle = (project: TProject, lang: TLandingLanguage) => {
  const creationDate = project.creationDate;
  const launchDate = project.launchDate ? project.launchDate : Date.now();

  const cycleDuration = launchDate - creationDate;
  const numOfWeeks = Math.floor(cycleDuration / (1000 * 60 * 60 * 24 * 7));

  let weeksString = '';

  switch (lang) {
    case 'en':
      weeksString = numOfWeeks === 1 ? '1 week' : `${numOfWeeks} weeks`;
      break;
    case 'pl':
      if (numOfWeeks === 1) {
        weeksString = '1 tydzień';
      } else if (
        numOfWeeks % 10 === 2 ||
        numOfWeeks % 10 === 3 ||
        numOfWeeks % 10 === 4
      ) {
        weeksString = `${numOfWeeks} tygodnie`;
      } else {
        weeksString = `${numOfWeeks} tygodni`;
      }
      break;
    case 'ua':
      if (numOfWeeks === 1) {
        weeksString = '1 тиждень';
      } else if (
        (numOfWeeks % 10 === 2 ||
          numOfWeeks % 10 === 3 ||
          numOfWeeks % 10 === 4) &&
        (numOfWeeks < 10 || numOfWeeks > 20)
      ) {
        weeksString = `${numOfWeeks} тижні`;
      } else {
        weeksString = `${numOfWeeks} тижнів`;
      }
      break;
    default:
      weeksString = 'Invalid language code';
  }

  return weeksString;
};
