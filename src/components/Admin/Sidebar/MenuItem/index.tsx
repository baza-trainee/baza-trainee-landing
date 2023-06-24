import { SliderMenuArrow } from '@/components/common/icons';
import { MouseEvent, useState } from 'react';
import sidebarSectionsList from '../sidebarSectionsList';
import SubmenuItem from './SubmenuItem';
import styles from './styles.module.scss';

function MenuItem({
  sidebarSection,
  page,
  isSidebarOpen,
  handleClick,
}: {
  sidebarSection: (typeof sidebarSectionsList)[number];
  page: string;
  isSidebarOpen: boolean;
  handleClick: (_e: MouseEvent<HTMLLIElement>) => void;
}) {
  const { id, iconName: IconComponent, text, submenu } = sidebarSection;
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
    <li id={id} className={styles['sidebar-list__item']} onClick={handleClick}>
      <button
        className={`${styles['sidebar-list__button']} ${
          isSidebarOpen ? styles['sidebar-list__button--extended'] : ''
        }  ${isSelected() ? styles['sidebar-list__button--accent'] : ''} ${
          isSubmenuClose ? styles['submenu-closed'] : ''
        }`}
      >
        <IconComponent className={styles['sidebar-list__item-icon']} />
        <p className={styles['sidebar-list__text']}>{text}</p>
        {submenu && (
          <SliderMenuArrow
            className={`${styles['sidebar-logo__close-svg']}`}
            onClick={submenuArrowClickHandler}
          />
        )}
      </button>
      {submenu && (
        <ul className={styles['sidebar-list__submenu']}>
          {submenu.map((submenuEl) => (
            <SubmenuItem
              key={submenuEl.id}
              submenuEl={submenuEl}
              page={page}
              handleClick={handleClick}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default MenuItem;
