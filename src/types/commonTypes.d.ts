import { TTitleLanguagesTypes } from './typesAPI';

type TSlideBase = {
  title: TTitleLanguagesTypes;
  subtitle: TTitleLanguagesTypes;
};

export type TSlideReq = TSlideBase & {
  file?: File;
};

export type TSlideResp = TSlideBase & {
  imageUrl: string;
  _id: string;
};

export type TSlideReview = {
  name: TTitleLanguagesTypes;
  date: string | number;
  role: string;
  imageUrl: string;
  review: TTitleLanguagesTypes;
  _id?: string;
};

export type TDictionary = {
  navbar: {
    projects: string;
    partners: string;
    participate: string;
    contacts: string;
  };
  monthsNames: {
    nouns: string[];
    spelled: string[];
  };
  noProjects: string;
  moreProjects: string;
  projects: {
    projectStart: string;
    projectCycle: string;
    duration: string;
    complexity: string;
    projectTeam: string;
    status: {
      teamFormation: string;
      underDevelopment: string;
      completed: string;
    };
  };
  invite: {
    supportBazaTrainee: string;
    teamsWaitForYou: string;
    bazaTraineeInvite: string;
    chooseRole: string;
    role: {
      participant: string;
      mentor: string;
      partner: string;
      customer: string;
    };
  };
  partners: {
    title: string;
  };
  stats: {
    completedProjects: string;
    involvedParticipants: string;
    employed: string;
  };
  reviews: {
    title: string;
  };
  modal: {
    title: string;
    description: string;
    sums: {
      otherSum: string;
    };
    button: string;
  };
  footer: {
    projects: string;
    partners: string;
    participate: string;
    privacyPolicy: string;
    rulesForUsingTheSite: string;
    statute: string;
    accountability: string;
    allRightsReserved: string;
  };
  notFound: {
    title: string;
    description: string;
    button: string;
  };
  toFund: string;
  currency: string;
  enterKeywordForSearch: string;
  yourHelpIsWorth: {
    title: string;
    firstPart: string;
    secondPart: string;
  };
  spinner: {
    loading: string;
    error: string;
  };
};
