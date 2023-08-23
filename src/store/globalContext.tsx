'use client';

import { TAlertInfoState } from '@/components/atomic/AlertWindow';
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
  setLandingLanguage: Dispatch<SetStateAction<TLandingLanguage>>;
  alertInfo: TAlertInfo;
  setAlertInfo: Dispatch<SetStateAction<TAlertInfo>>;
}

export const GlobalContext = createContext<IStoreContextType>(
  {} as IStoreContextType
);

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const [landingLanguage, setLandingLanguage] =
    useState<TLandingLanguage>('ua');
  const [alertInfo, setAlertInfo] = useState<TAlertInfo>(null);
  useEffect(() => {
    const landingLang = localStorage.getItem('landingLanguage');
    landingLang && setLandingLanguage(landingLang as TLandingLanguage);
  }, []);

  const contextValue = {
    landingLanguage,
    setLandingLanguage,
    alertInfo,
    setAlertInfo,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
