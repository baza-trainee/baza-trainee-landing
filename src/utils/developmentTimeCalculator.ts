import { TLandingLanguage } from '@/store/globalContext';
import { TProjectResp } from '@/types';

export const projectCycle = (project: TProjectResp, lang: TLandingLanguage) => {
  const launchDate = project.launchDate ? project.launchDate : Date.now();
  const numOfWeeks = Math.floor(
    (launchDate - project.creationDate) / (1000 * 60 * 60 * 24 * 7) + 1
  );

  const weekStrings = {
    en: {
      singular: 'week',
      plural: 'weeks',
    },
    pl: {
      singular: 'tydzień',
      plural:
        numOfWeeks === 1
          ? 'tydzień'
          : numOfWeeks % 10 === 2 ||
            numOfWeeks % 10 === 3 ||
            numOfWeeks % 10 === 4
          ? 'tygodnie'
          : 'tygodni',
    },
    ua: {
      singular: 'тиждень',
      plural:
        numOfWeeks === 1
          ? 'тиждень'
          : (numOfWeeks % 10 === 2 ||
              numOfWeeks % 10 === 3 ||
              numOfWeeks % 10 === 4) &&
            (numOfWeeks < 10 || numOfWeeks > 20)
          ? 'тижні'
          : 'тижнів',
    },
  };

  const { singular, plural } = weekStrings[lang];

  return numOfWeeks === 1 ? `1 ${singular}` : `${numOfWeeks} ${plural}`;
};
