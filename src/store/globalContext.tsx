'use client';

import { dictionaries } from '@/app/[lang]/dictionaries';
import { TAlertInfoState } from '@/components/atomic/AlertWindow';
import { TDictionary } from '@/types';
import { useParams } from 'next/navigation';
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
  dict: TDictionary | undefined;
  // getDictionary: (lang: TLandingLanguage | string) => void;
}

export const GlobalContext = createContext<IStoreContextType>(
  {} as IStoreContextType
);

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const [landingLanguage, setLandingLanguage] =
    useState<TLandingLanguage>('ua');
  const params = useParams();
  const [alertInfo, setAlertInfo] = useState<TAlertInfo>(null);

  const [dict, setDict] = useState<TDictionary>();

  useEffect(() => {
    const landingLanguage = localStorage.getItem('landingLanguage');
    // landingLanguage && setLandingLanguage(landingLanguage as TLandingLanguage);
    if (params.lang) {
      setLandingLanguage(params.lang as TLandingLanguage);
      setDict(dictionaries[params.lang as TLandingLanguage]);
    } else {
      landingLanguage &&
        setLandingLanguage(landingLanguage as TLandingLanguage);
      setDict(dictionaries[landingLanguage as TLandingLanguage]);
    }
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
    alertInfo,
    setAlertInfo,
    dict,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
