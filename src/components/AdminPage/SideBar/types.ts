import { FC, MouseEvent } from 'react';

export type TsidebarSection = {
  id: string;
  icon?: FC;
  text: string;
  submenu?: TsidebarSection[];
};

export interface ISideMenuItem {
  onClick?: () => void;
  iconOnly?: boolean;
  page?: string;
  handleClick?: (_e: MouseEvent<HTMLButtonElement | HTMLLIElement>) => void;
}
