'use client';
import { LogOutIcon, MultiArrow } from '@/components/common/icons';
import IconInner from '@/components/common/icons/Spinner/inner';
import IconOuter from '@/components/common/icons/Spinner/outer';
import { localStorageHandler } from '@/utils/localStorageHandler';
import { usePathname, useRouter } from 'next/navigation';
import { MouseEvent, useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import sidebarSectionsList from './sidebarSectionsList';
import styles from './styles.module.scss';

function Sidebar() {
  const path = usePathname();
  const getPath = () => {
    const regex = /\/([^\\/]+)$/;
    const matches = path.match(regex);
    const lastPart = matches ? matches[1] : sidebarSectionsList[0].id;
    return lastPart;
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const [page, setPage] = useState<string>(getPath());
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    setPage(e.currentTarget.id);
    router.push(`admin/${e.currentTarget.id}`);
  };

  const toggleSidebar = () => {
    localStorageHandler.setItem('isAdminSideBarOpen', !isSidebarOpen);
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const value = localStorageHandler.getItem('isAdminSideBarOpen');
    value && setIsSidebarOpen(value as boolean);
  }, []);

  return (
    <div
      className={`flex flex-col transition-all  duration-300  
      ${isSidebarOpen ? 'w-[24.1rem]' : 'w-[11.55rem]'}
      `}
    >
      <div className={`w-full ${styles['sidebar-logo']}`}>
        <button
          className={styles['sidebar-logo__link']}
          onClick={toggleSidebar}
        >
          <div className={styles['spinner-container']}>
            <IconOuter
              className={`${styles['spinner-outer']} ${
                isSidebarOpen ? styles['spinner-outer--rotate'] : ''
              }`}
              width={68}
              height={68}
            />
            <IconInner
              className={styles['spinner-inner']}
              width={68}
              height={68}
            />
          </div>
        </button>
      </div>

      <div className={`border-r border-neutral-300 ${styles['sidebar-menu']}`}>
        <button
          className={styles['sidebar-logo__close-svg']}
          onClick={toggleSidebar}
        >
          <MultiArrow
            direction="right"
            open={isSidebarOpen}
            className="text-white"
          />
        </button>

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

        <button className={styles['log-out']}>
          <LogOutIcon className={styles['log-out__icon']} />
          <p className={styles['log-out__text']}>{'Вийти'}</p>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
