'use client';

import { State, StoreContextType } from '@/types/storeTypes';
import React, { createContext, useReducer } from 'react';
import { reducer } from './globalReducer';

export enum ReducerActionType {
  SET_LANDING_LANGUAGE,
  TOGGLE_LANDING_MODAL,
}

const initialState: State = {
  landingLanguage: 'ua',
  isLandingModalShown: false,
};

export const StoreContext = createContext<StoreContextType>({
  state: initialState,
  dispatch: () => {},
});
type GlobalProviderProps = {
  children: React.ReactNode;
};

export const StoreProvider = ({ children }: GlobalProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
