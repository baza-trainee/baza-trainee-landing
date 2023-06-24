import { MouseEvent } from 'react';
import styles from './styles.module.scss';

function SubmenuItem({
  submenuEl,
  page,
  handleClick,
}: {
  submenuEl: {
    text: string;
    id: string;
  };
  page: string;
  handleClick: (_e: MouseEvent<HTMLLIElement>) => void;
}) {
  const { id, text } = submenuEl;

  return (
    <li
      id={id}
      className={`${styles['sidebar-list__item']}`}
      onClick={handleClick}
    >
      <button
        className={`${styles['sidebar-list__button']} ${
          id === page ? styles['sidebar-list__button--accent'] : ''
        }`}
      >
        <p className={styles['sidebar-list__text']}>{text}</p>
      </button>
    </li>
  );
}

export default SubmenuItem;
