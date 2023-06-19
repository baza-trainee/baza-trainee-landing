import { ReducerActionType } from '@/store/globalContext';
import { Dispatch } from 'react';

export type State = {
  landingLanguage: 'ua' | 'en' | 'pl';
  isLandingModalShown: boolean;
};

export type Action = {
  type: ReducerActionType;
  payload: 'ua' | 'en' | 'pl';
};

export type StoreContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};
