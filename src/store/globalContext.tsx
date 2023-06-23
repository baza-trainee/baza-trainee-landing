'use client';

import { State, StoreContextType } from '@/types/storeTypes';
import React, { createContext, useReducer } from 'react';
import { reducer } from './globalReducer';

const initialState: State = {
  landingLanguage: 'ua',
  isLandingModalShown: false,
};

export const GlobalContext = createContext<StoreContextType>({
  state: initialState,
  dispatch: () => {},
});
type GlobalProviderProps = {
  children: React.ReactNode;
};

export const StoreProvider = ({ children }: GlobalProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
