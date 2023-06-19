import { Action, State } from '@/types/storeTypes';

export enum ReducerActionType {
  SET_LANDING_LANGUAGE,
  TOGGLE_LANDING_MODAL,
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ReducerActionType.SET_LANDING_LANGUAGE:
      return {
        ...state,
        landingLanguage: action.payload,
      };
    case ReducerActionType.TOGGLE_LANDING_MODAL:
      return {
        ...state,
        isLandingModalShown: !state.isLandingModalShown,
      };
    default:
      return state;
  }
};
