'use client';

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

  useEffect(() => {
    const landingLanguage = localStorage.getItem('landingLanguage');
    landingLanguage && setLandingLanguage(landingLanguage as TLandingLanguage);
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
    isLandingModalShown,
    setIsLandingModalShown,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
