import { Dispatch, SetStateAction } from 'react';

export type TTabsMode = 'description' | 'members';

export type TFormTabs = {
  tabsMode: TTabsMode;
  setTabsMode: Dispatch<SetStateAction<TTabsMode>>;
};
