import { ReducerActionType } from '@/store/globalReducer';
import { Dispatch } from 'react';

export type State = {
  landingLanguage: 'ua' | 'en' | 'pl';
  isLandingModalShown: boolean;
};

export type SetLandingLanguage = {
  type: ReducerActionType.SET_LANDING_LANGUAGE;
  payload: 'ua' | 'en' | 'pl';
};

export type ToggleLandingModal = {
  type: ReducerActionType.TOGGLE_LANDING_MODAL;
};

export type Action = SetLandingLanguage | ToggleLandingModal;

export type StoreContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};
