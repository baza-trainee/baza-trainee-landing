export type TSlide = {
  title: {
    en: string;
    pl: string;
    ua: string;
  };
  specialization?: string;
  text: {
    en: string;
    pl: string;
    ua: string;
  };
  image: string;
};

export type TSlideReview = {
  name: {
    en: string;
    pl: string;
    ua: string;
  };
  role: {
    en: string;
    pl: string;
    ua: string;
  };
  date: {
    en: string;
    pl: string;
    ua: string;
  };
  review: {
    en: string;
    pl: string;
    ua: string;
  };
  imageUrl: string;
};

export type TDictionary = {
  heroSlider: {
    title: string;
    description: string;
  }[];
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
    list: {
      murrfecto: {
        title: string;
        status: string;
        statusVal: 'under-development' | 'active' | 'formation';
        teamMembers: string[];
      };
      atakahelp: {
        title: string;
        status: string;
        statusVal: 'under-development' | 'active' | 'formation';
        teamMembers: string[];
      };
      bazatrainee: {
        title: string;
        status: string;
        statusVal: 'under-development' | 'active' | 'formation';
        teamMembers: string[];
      };
      cheetosaurus: {
        title: string;
        status: string;
        statusVal: 'under-development' | 'active' | 'formation';
        teamMembers: [];
      };
      '1001-songs': {
        title: string;
        status: string;
        statusVal: 'under-development' | 'active' | 'formation';
        teamMembers: [];
      };
      biglapa: {
        title: string;
        status: string;
        statusVal: 'under-development' | 'active' | 'formation';
        teamMembers: [];
      };
      feeda: {
        title: string;
        status: string;
        statusVal: 'under-development' | 'active' | 'formation';
        teamMembers: [];
      };
      bookAbroad: {
        title: string;
        status: string;
        statusVal: 'under-development' | 'active' | 'formation';
        teamMembers: [];
      };
      fundraisingLP: {
        title: string;
        status: string;
        statusVal: 'under-development' | 'active' | 'formation';
        teamMembers: [];
      };
    };
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
    list: {
      name: string;
      role: string;
      date: string;
      review: string;
    }[];
  };
  modal: {
    title: string;
    description: string;
    sums: {
      '100': string;
      '200': string;
      '500': string;
      '1000': string;
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
