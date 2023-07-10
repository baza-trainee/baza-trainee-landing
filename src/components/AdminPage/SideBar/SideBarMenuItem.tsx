'use client';

import { FC, MouseEvent, useEffect, useState } from 'react';

import { MultiArrow } from '@/components/common/icons';
import { SubMenu } from './SubMenu';
import { ISideMenuItem, TsidebarSection } from './types';

interface IProps extends ISideMenuItem {
  sidebarSection: TsidebarSection;
}

const SideBarMenuItem: FC<IProps> = (props) => {
  const { iconOnly, sidebarSection, page } = props;
  const { id, icon: IconComponent, text, submenu } = sidebarSection;
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);
  const [isSelected, setIsSelected] = useState(false);

  const subMenuClickHandler = (_e: MouseEvent<HTMLButtonElement>) => {
    // e.stopPropagation();
    setIsSubMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsSelected(id === page);
  }, [id, page]);

  return (
    <div className={`relative text-start font-medium`}>
      <button
        className={`flex h-[4rem] shrink-0 items-center gap-[0.8rem] overflow-hidden rounded-[0.4rem] pl-[1.2rem] 
          ${iconOnly ? 'w-[4.7rem]' : 'w-[17.7rem]'}
          ${
            isSelected
              ? 'bg-neutral-800 text-white'
              : 'bg-white hover:bg-yellow-500'
          }
          `}
      >
        <div className={`h-[2.4rem] w-[2.4rem]`}>
          {IconComponent && <IconComponent />}
        </div>

        <span
          className={`transition-transform ${
            iconOnly ? 'scale-0' : 'scale-100'
          }`}
        >
          {text}
        </span>
      </button>

      {submenu && (
        <button
          onClick={subMenuClickHandler}
          className={`absolute top-[2rem] -translate-y-1/2
            ${
              iconOnly
                ? '-right-[2.5rem] text-neutral-800'
                : `right-[1.2rem] ${isSelected && 'text-white'}`
            }`}
        >
          <MultiArrow
            direction={isSubMenuOpen && !iconOnly ? 'bottom' : 'right'}
          />
        </button>
      )}

      {submenu && isSubMenuOpen && (
        <SubMenu iconOnly={iconOnly} submenu={submenu} page={''} />
      )}
    </div>
  );
};

export { SideBarMenuItem };
