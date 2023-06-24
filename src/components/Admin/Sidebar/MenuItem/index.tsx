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

  return (
    <li
      key={id}
      id={id.toString()}
      className={styles['sidebar-list__item']}
      onClick={handleClick}
    >
      <button
        className={`${styles['sidebar-list__button']} ${
          isSidebarOpen && styles['sidebar-list__button--extended']
        }  ${id === page && styles['sidebar-list__button--accent']}`}
      >
        <IconComponent className={styles['sidebar-list__item-icon']} />

        {isSidebarOpen && (
          <p className={styles['sidebar-list__text']}>{text}</p>
        )}
      </button>
    </li>
  );
}

export default MenuItem;
