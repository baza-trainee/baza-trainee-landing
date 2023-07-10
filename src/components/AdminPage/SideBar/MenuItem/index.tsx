import SliderMenuArrow from '@/components/common/icons/SliderMenuArrow';
import { MouseEvent, useState } from 'react';
import { sidebarSectionsList } from '../sidebarSectionsList';
// import SubmenuItem from '../SubmenuItem';
import styles from './styles.module.scss';

interface IMenuItem {
  sidebarSection: (typeof sidebarSectionsList)[number];
  page: string;
  isSidebarOpen: boolean;
  handleClick: (_e: MouseEvent<HTMLButtonElement | HTMLLIElement>) => void;
}

function MenuItem({
  sidebarSection,
  page,
  isSidebarOpen,
  handleClick,
}: IMenuItem) {
  const { id, icon: IconComponent, text, submenu } = sidebarSection;
  const [isSubmenuClose, setIsSubmenuClose] = useState(true);

  const isSelected = () => {
    const isSidebarSelected = id === page;
    const isSubmenuSelected = submenu?.some((el) => el.id === page);
    return isSidebarSelected || !!isSubmenuSelected;
  };

  const submenuArrowClickHandler = (e: MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    setIsSubmenuClose((prev) => !prev);
  };

  return (
    <button
      id={id}
      className={`flex-center h-[4rem] w-[4.7rem] gap-3 rounded-[0.4rem] bg-white px-[1.2rem] duration-300
      ${isSidebarOpen ? 'w-[17.7rem]' : 'w-[4.7rem]'}   
      ${isSelected() ? styles['sidebar-list__button--accent'] : ''} 
      ${isSubmenuClose ? styles['submenu-closed'] : ''}`}
      onClick={handleClick}
    >
      {IconComponent && (
        <IconComponent
        // className={styles['sidebar-list__item-icon']}
        />
      )}
      <span className={styles['sidebar-list__text']}>{text}</span>

      {submenu && (
        <SliderMenuArrow
          className={`${styles['sidebar-logo__close-svg']}`}
          onClick={submenuArrowClickHandler}
        />
      )}

      {/* {submenu && (
        <ul className={styles['sidebar-list__submenu']}>
          {submenu.map((submenuEl) => (
            <SubmenuItem
              key={submenuEl.id}
              submenuEl={submenuEl}
              page={page}
              isSidebarOpen={isSidebarOpen}
              handleClick={handleClick}
            />
          ))}
        </ul>
      )} */}
    </button>
  );
}

export default MenuItem;
