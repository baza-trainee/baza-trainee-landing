import React from 'react';

import { ISideMenuItem } from './types';

import { MultiArrow } from '@/components/common/icons';

interface IProps extends ISideMenuItem {
  isSelected: boolean;
  isSubMenuOpen: boolean;
}

export const SubMenuToggleButton = (props: IProps) => {
  const { onClick, iconOnly, isSelected, isSubMenuOpen } = props;

  return (
    <button
      onClick={onClick}
      className={`absolute top-[2rem] -translate-y-1/2
            ${iconOnly
                ? '-right-[2.5rem] text-neutral-800'
                : `right-[1.2rem] ${isSelected && 'text-white'}`
            }`}
    >
      <MultiArrow direction={isSubMenuOpen ? iconOnly ? 'left' : 'bottom' : 'right'} />
    </button>
  );
};
