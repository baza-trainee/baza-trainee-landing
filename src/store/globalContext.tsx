'use client';

import { TAlertInfoState } from '@/components/atomic/AlertWindow';
import axios from 'axios';
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';

export type TLandingLanguage = 'ua' | 'en' | 'pl';
export type TAlertInfo = null | TAlertInfoState;

export interface IStoreContextType {
  landingLanguage: TLandingLanguage;
  isLandingModalShown: boolean;
  partners: [] | never[];
  sliders:
    | {
        __v: number;
        _id: string;
        imageUrl: string;
        subtitle: { en: string; pl: string; ua: string };
        title: { en: string; pl: string; ua: string };
      }[]
    | []
    | never[];
  testimonials:
    | {
        __v: number;
        _id: string;
        date: number;
        imageUrl: string;
        name: {
          en: string;
          pl: string;
          ua: string;
        };
        review: {
          en: string;
          pl: string;
          ua: string;
        };
      }[]
    | never[];
  projects:
    | {
        _id: string;
        complexity: number;
        creationDate: number;
        imageUrl: string;
        isTeamRequired: boolean;
        launchDate?: number;
        deployUrl?: string;
        teamMembers:
          | {
              user: {
                _id: string;
                name: string;
              };
              role: {
                _id: string;
                name: string;
              };
            }[]
          | [];
        title: {
          en: string;
          pl: string;
          ua: string;
        };
      }[]
    | never[]
    | [];
  achievements: {
    projects: number;
    members: number;
    employed: number;
  };
  info: {
    contacts: {
      contactsDataList: {
        phone1: number;
        phone2: number;
        email: string;
      };
      socialsMediaList: {
        linkedin: string;
        facebook: string;
      };
    };
    documents: {
      report: string;
      statute: string;
      privacyPolicy: {
        en: string;
        pl: string;
        ua: string;
      };
      termsOfUse: {
        en: string;
        pl: string;
        ua: string;
      };
    };
  };
  setLandingLanguage: Dispatch<SetStateAction<TLandingLanguage>>;
  setIsLandingModalShown: Dispatch<SetStateAction<boolean>>;
  alertInfo: TAlertInfo;
  setAlertInfo: Dispatch<SetStateAction<TAlertInfo>>;
}

export const GlobalContext = createContext<IStoreContextType>(
  {} as IStoreContextType
);

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const [landingLanguage, setLandingLanguage] =
    useState<TLandingLanguage>('ua');
  const [isLandingModalShown, setIsLandingModalShown] = useState(false);
  const [partners, setPartners] = useState([]);
  const [sliders, setSliders] = useState<
    | Array<{
        __v: number;
        _id: string;
        imageUrl: string;
        subtitle: { en: string; pl: string; ua: string };
        title: { en: string; pl: string; ua: string };
      }>
    | []
  >([]);
  const [testimonials, setTestimonials] = useState([]);
  const [projects, setProjects] = useState([]);
  const [achievements, setAchievements] = useState({
    projects: 0,
    members: 0,
    employed: 0,
  });
  const [alertInfo, setAlertInfo] = useState<TAlertInfo>(null);
  const [info, setInfo] = useState<{
    contacts: {
      contactsDataList: {
        phone1: number;
        phone2: number;
        email: string;
      };
      socialsMediaList: {
        linkedin: string;
        facebook: string;
      };
    };
    documents: {
      report: string;
      statute: string;
      privacyPolicy: {
        en: string;
        pl: string;
        ua: string;
      };
      termsOfUse: {
        en: string;
        pl: string;
        ua: string;
      };
    };
  }>({
    contacts: {
      contactsDataList: {
        phone1: 0,
        phone2: 380222222222,
        email: 'example@example.com',
      },
      socialsMediaList: {
        linkedin: 'https://www.la-la-la-la-la-la.com',
        facebook: 'https://www.123456789.com',
      },
    },
    documents: {
      report: 'report.pdf',
      statute: 'statute.pdf',
      privacyPolicy: {
        en: 'privacy_en.pdf',
        pl: 'privacy_pl.pdf',
        ua: 'privacy_ua.pdf',
      },
      termsOfUse: {
        en: 'terms_en.pdf',
        pl: 'terms_pl.pdf',
        ua: 'terms_ua.pdf',
      },
    },
  });

  const getSliders = async () => {
    const { data, status } = await axios.get(
      'https://baza-trainee.tech/api/v1/heroslider'
    );
    console.log('sliders', data);
    setSliders(data);
  };

  const getAchievements = async () => {
    const { data, status } = await axios.get(
      'https://baza-trainee.tech/api/v1/achievements'
    );
    console.log('achievements', data);
    setAchievements(data);
  };

  const getPartners = async () => {
    const { data, status } = await axios.get(
      'https://baza-trainee.tech/api/v1/partners'
    );
    // console.log('Data(partners)', data);
    // setPartners(data);
    // console.log('partners', data);
    setPartners(data);
    console.log(data);
  };

  const getTestimonials = async () => {
    const { data, status } = await axios.get(
      'https://baza-trainee.tech/api/v1/testimonials'
    );
    console.log('reviews', data);
    setTestimonials(data);
  };

  const getProjects = async () => {
    const { data, status } = await axios.get(
      'https://baza-trainee.tech/api/v1/projects'
    );
    console.log('projects', data);
    setProjects(data);
  };

  const getInfo = async () => {
    const response = await axios.get(
      'https://baza-trainee.tech/api/v1/contacts'
    );
    const { data, status } = await axios.get(
      'https://baza-trainee.tech/api/v1/documents'
    );
    console.log('documents and contacts', data, response.data);
    setInfo({
      documents: data,
      contacts: response.data,
    });
  };

  useEffect(() => {
    const landingLanguage = localStorage.getItem('landingLanguage');
    landingLanguage && setLandingLanguage(landingLanguage as TLandingLanguage);
    getSliders();
    getPartners();
    getTestimonials();
    getProjects();
    getAchievements();
    getInfo();
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'landingLanguage',
      landingLanguage as TLandingLanguage
    );
  }, [landingLanguage]);

  const contextValue = {
    landingLanguage,
    sliders,
    projects,
    testimonials,
    setLandingLanguage,
    partners,
    info,
    achievements,
    isLandingModalShown,
    setIsLandingModalShown,
    alertInfo,
    setAlertInfo,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
