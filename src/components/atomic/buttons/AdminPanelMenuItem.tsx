import sidebarSectionsList from '@/components/Admin/Sidebar/sidebarSectionsList';
import { FC, ReactNode } from 'react';

type TProps = {
  onClick?: () => void;
  className?: string;
  iconOnly?: boolean;
  sidebarSection: (typeof sidebarSectionsList)[number];
};

export const AdminPanelMenuItem: FC<TProps> = ({
  className = '',
  iconOnly,
  sidebarSection,
}) => {
  const { id, icon: IconComponent, text, submenu } = sidebarSection;

  const buttonClasses = `relative flex h-[4rem] shrink-0 pl-[1.2rem] text-start font-medium
    ${iconOnly ? 'w-[4.7rem]' : 'w-[17.7rem]'} bg-white
    gap-[0.8rem] items-center rounded-[0.4rem] overflow-hidden hover:bg-yellow-500 ${className}`;

  return (
    <button className={buttonClasses}>
      <div className={`h-[2.4rem] w-[2.4rem] `}>
        <IconComponent />
      </div>

      <span
        className={`transition-transform ${iconOnly ? 'scale-0' : 'scale-100'}`}
      >
        {text}
      </span>
    </button>
  );
};
