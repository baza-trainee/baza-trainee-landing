import { MouseEvent } from 'react';
import sidebarSectionsList from '../sidebarSectionsList';
import styles from './styles.module.scss';

function MenuItem({
  sidebarSection,
  page,
  isSidebarOpen,
  handleClick,
}: {
  sidebarSection: (typeof sidebarSectionsList)[number];
  page: number;
  isSidebarOpen: boolean;
  handleClick: (_e: MouseEvent<HTMLLIElement>) => void;
}) {
  const { id, iconName: IconComponent, text } = sidebarSection;

  const makeOptionClasses = (index: number) => {
    let classes = styles['sidebar-list__button'];

    if (index === page) {
      classes += ` ${styles['sidebar-list__button--accent']}`;
    }

    if (isSidebarOpen) {
      classes += ` ${styles['sidebar-list__button--extended']}`;
    }

    return classes;
  };

  const toggleSidebarClasses = (className: string): string | undefined => {
    if (isSidebarOpen) {
      return ` ${styles[className]} ${styles[`${className}--extended`]}`;
    }
    return `${styles[className]}`;
  };

  return (
    <li
      key={id}
      id={id.toString()}
      className={styles['sidebar-list__item']}
      onClick={handleClick}
    >
      <button className={makeOptionClasses(id)}>
        {IconComponent && (
          <IconComponent
            className={toggleSidebarClasses('sidebar-list__item-icon') || ''}
          />
        )}

        {isSidebarOpen && (
          <p className={styles['sidebar-list__text']}>{text}</p>
        )}
      </button>
    </li>
  );
}

export default MenuItem;
