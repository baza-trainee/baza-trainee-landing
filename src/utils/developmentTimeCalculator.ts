import { TLandingLanguage } from '@/store/globalContext';
import { IProject } from '@/types';

const projectCycle = (project: IProject, lang: TLandingLanguage) => {
  const weekWordForms = {
    en: ['week', 'weeks', 'weeks'],
    ua: ['тиждень', 'тижні', 'тижнів'],
    pl: ['tydzień', 'tygodnie', 'tygodnie'],
  };
  const creationDate = project.creationDate;
  const launchDate = project.launchDate ? project.launchDate : Date.now();

  const cycleDuration = launchDate - creationDate;
  const numOfWeeks = Math.floor(cycleDuration / (1000 * 60 * 60 * 24 * 7));

  let formIndex;
  if (numOfWeeks % 10 === 1 && numOfWeeks % 100 !== 11) {
    formIndex = 0;
  } else if (
    numOfWeeks % 10 >= 2 &&
    numOfWeeks % 10 <= 4 &&
    (numOfWeeks % 100 < 10 || numOfWeeks % 100 >= 20)
  ) {
    formIndex = 1;
  } else {
    formIndex = 2;
  }

  return `${numOfWeeks} ${weekWordForms[lang][formIndex]}`;
};
export default projectCycle;
