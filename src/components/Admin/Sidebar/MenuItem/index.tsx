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
  const [isSubmenuShown, setIsSubmenuShown] = useState(false);

  const isSelected = () => {
    const items = submenu?.map((el) => {
      return el.id;
    });
    const isSidebarSelected = id === page;
    const isSubmenuSelected = items?.includes(page);
    console.log(items);
    console.log(isSidebarSelected, isSubmenuSelected);
    return isSidebarSelected || !!isSubmenuSelected;
  };

  const submenuArrowClickHandler = (e: MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    setIsSubmenuShown((prev) => !prev);
  };

  return (
    <li id={id} className={styles['sidebar-list__item']} onClick={handleClick}>
      <button
        className={`${styles['sidebar-list__button']} ${
          isSidebarOpen && styles['sidebar-list__button--extended']
        }  ${isSelected() && styles['sidebar-list__button--accent']} ${
          isSubmenuShown && styles['submenu-opened']
        }`}
      >
        <IconComponent className={styles['sidebar-list__item-icon']} />

        {isSidebarOpen && (
          <p className={styles['sidebar-list__text']}>{text}</p>
        )}
        {submenu && (
          <SliderMenuArrow
            className={`${isSidebarOpen && styles['sidebar-logo__close-svg']}`}
            onClick={submenuArrowClickHandler}
          />
        )}
      </button>
      <ul className={styles['sidebar-list__submenu']}>
        {submenu &&
          submenu.map((submenuEl) => (
            <SubmenuItem
              key={submenuEl.id}
              submenuEl={submenuEl}
              page={page}
              isSidebarOpen={isSidebarOpen}
              handleClick={handleClick}
            />
          ))}
      </ul>
    </li>
  );
}

export default MenuItem;
