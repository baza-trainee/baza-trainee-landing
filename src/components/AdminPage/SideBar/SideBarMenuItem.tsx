'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { SubMenu } from './SubMenu';
import { SubMenuToggleButton } from './SubMenuToggleButton';
import { ISideMenuItem, TsidebarSection } from './types';

interface IProps extends ISideMenuItem {
  sidebarSection: TsidebarSection;
}

const SideBarMenuItem = (props: IProps) => {
  const { iconOnly, sidebarSection } = props;
  const { id, icon: IconComponent, text, submenu } = sidebarSection;
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const pathname = usePathname();

  const subMenuClickHandler = () => {
    setIsSubMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const isActive = pathname.includes(id);
    setIsSelected(isActive);
    !isActive && iconOnly && setIsSubMenuOpen(false);
  }, [pathname, id]);

  return (
    <div className={`relative text-start font-medium`}>
      <Link
        href={'/admin/' + id}
        className={`flex h-[4rem] shrink-0 items-center gap-[0.8rem] overflow-hidden rounded-[0.4rem] pl-[1.2rem] 
          ${iconOnly ? 'w-[4.7rem]' : 'w-[17.7rem]'}
          ${
            isSelected
              ? 'bg-neutral-800 text-white'
              : 'bg-white hover:bg-yellow-500'
          }`}
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
      </Link>

      {submenu && (
        <SubMenuToggleButton
          onClick={subMenuClickHandler}
          iconOnly={iconOnly}
          isSelected={isSelected}
          isSubMenuOpen={isSubMenuOpen}
        />
      )}

      {submenu && isSubMenuOpen && (
        <SubMenu iconOnly={iconOnly} submenu={submenu} />
      )}
    </div>
  );
};

export { SideBarMenuItem };
