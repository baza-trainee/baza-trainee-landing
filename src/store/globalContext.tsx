'use client';

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
  setLandingLanguage: Dispatch<SetStateAction<TLandingLanguage>>;
  setIsLandingModalShown: Dispatch<SetStateAction<boolean>>;
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

  const getSliders = async () => {
    const { data, status } = await axios.get(
      'https://baza.foradmin.fun/heroslider'
    );
    console.log('Data', data);
    setSliders(data);
  };

  const getPartners = async () => {
    const { data, status } = await axios.get(
      'https://baza.foradmin.fun/partners'
    );
    // console.log('Data(partners)', data);
    // setPartners(data);
    // console.log('partners', data);
    setPartners(data);
    console.log(data);
  };

  const getTestimonials = async () => {
    const { data, status } = await axios.get(
      'https://baza.foradmin.fun/testimonials'
    );
    console.log('reviews', data);
    setTestimonials(data);
  };

  const getProjects = async () => {
    const { data, status } = await axios.get(
      'https://baza.foradmin.fun/projects'
    );
    console.log('projects', data);
    setProjects(data);
  };

  useEffect(() => {
    const landingLanguage = localStorage.getItem('landingLanguage');
    landingLanguage && setLandingLanguage(landingLanguage as TLandingLanguage);
    getSliders();
    getPartners();
    getTestimonials();
    getProjects();
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
    isLandingModalShown,
    setIsLandingModalShown,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
