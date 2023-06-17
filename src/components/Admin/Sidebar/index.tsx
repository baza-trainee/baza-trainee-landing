import Image from 'next/image';
import { MouseEvent, useState } from 'react';
import styles from './styles.module.scss';

import {
  ArrowIcon,
  ContactIcon,
  CounterIcon,
  LogOutIcon,
  PartnerIcon,
  ProjectIcon,
  RecallIcon,
  ReportIcon,
  SliderIcon,
} from '@/components/common/icons/index';

const sidebarSectionsList = [
  { id: 0, iconName: SliderIcon, text: 'Слайдер' },
  { id: 1, iconName: ProjectIcon, text: 'Проєкти' },
  { id: 2, iconName: CounterIcon, text: 'Каунтер' },
  { id: 3, iconName: PartnerIcon, text: 'Лого партнерів' },
  { id: 4, iconName: RecallIcon, text: 'Відгуки' },
  { id: 5, iconName: ReportIcon, text: 'Звітність' },
  { id: 6, iconName: ContactIcon, text: 'Контакти' },
];

function Sidebar() {
  const [page, setPage] = useState<number>(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    setPage(Number(e.currentTarget.id));
  };

  const makeOptionClasses = (index: number) => {

    let classes = styles['sidebar-list__button'];

    if (index === page) {classes += ` ${styles['sidebar-list__button--accent']}`}

    if (isSidebarOpen) {classes += ` ${styles['sidebar-list__button--extended']}`}

    return classes;
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSidebarClasses = (className: string): string | undefined => {
    if (isSidebarOpen) {
      return ` ${styles[className]} ${styles[`${className}--extended`]}`;
    }
    return `${styles[className]}`;
  };

  return (
    <>
      <div className={toggleSidebarClasses('sidebar-wrapper')}>
        <div className={toggleSidebarClasses('sidebar-logo')}>
          <a
            href="#"
            className={toggleSidebarClasses('sidebar-logo__link')}
            onClick={toggleSidebar}
          >
            <Image
              className={styles['sidebar-logo__svg']}
              src="/svg/logo-black.svg"
              alt="Main logo"
              width={68}
              height={68}
            />
          </a>
          {isSidebarOpen && (
            <a
              href="#"
              className={styles['sidebar-logo__close-svg']}
              onClick={toggleSidebar}
            >
              <ArrowIcon className="" />
            </a>
          )}
        </div>

        <div className={styles['sidebar-menu']}>
          <ul className={styles['sidebar-list']}>
            {sidebarSectionsList &&
              sidebarSectionsList.map(
                ({ id, iconName: IconComponent, text }) => (
                  <li
                    key={id}
                    id={id.toString()}
                    className={styles['sidebar-list__item']}
                    onClick={handleClick}
                  >
                    <button className={makeOptionClasses(id)}>
                      {IconComponent && (
                        <IconComponent
                          className={
                            toggleSidebarClasses  ('sidebar-list__item-icon') ||
                            ''
                          }
                        />
                      )}

                      {isSidebarOpen && (
                        <p className={styles['sidebar-list__text']}>{text}</p>
                      )}
                    </button>
                  </li>
                )
              )}
          </ul>

          <a href="#" className={styles['log-out']}>
            <LogOutIcon className={styles['log-out__icon']} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
