import { ArrowIcon, LogOutIcon } from '@/components/common/icons';
import Image from 'next/image';
import { MouseEvent, useState } from 'react';

import MenuItem from './MenuItem';
import sidebarSectionsList from './sidebarSectionsList';
import styles from './styles.module.scss';

function Sidebar() {
  const [page, setPage] = useState<number>(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    setPage(Number(e.currentTarget.id));
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
            {sidebarSectionsList.map((item) => (
              <MenuItem
                key={item.id}
                sidebarSection={item}
                page={page}
                isSidebarOpen={isSidebarOpen}
                handleClick={handleClick}
              />
            ))}
          </ul>

          <a href="#" className={styles['log-out']}>
            <LogOutIcon className={styles['log-out__icon']} />
            {isSidebarOpen && 'вихід'}
          </a>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
