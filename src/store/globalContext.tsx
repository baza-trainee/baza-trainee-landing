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

  const getSliders = async () => {
    const { data, status } = await axios.get(
      'https://baza.foradmin.fun/heroslider'
    );
    console.log('Data', data);
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

  useEffect(() => {
    const landingLanguage = localStorage.getItem('landingLanguage');
    landingLanguage && setLandingLanguage(landingLanguage as TLandingLanguage);
    getSliders();
    getPartners();
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'landingLanguage',
      landingLanguage as TLandingLanguage
    );
  }, [landingLanguage]);

  const contextValue = {
    landingLanguage,
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
