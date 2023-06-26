'use client';

import { State, StoreContextType } from '@/types/storeTypes';
import { PropsWithChildren, createContext, useReducer } from 'react';
import { reducer } from './globalReducer';

const initialState: State = {
  landingLanguage: 'ua',
  isLandingModalShown: false,
};

export const GlobalContext = createContext<StoreContextType>({
  state: initialState,
  dispatch: () => {},
});

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
