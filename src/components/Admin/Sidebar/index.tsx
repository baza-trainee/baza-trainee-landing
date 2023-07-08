'use client';
import { LogOutIcon, LogoBlack, MultiArrow } from '@/components/common/icons';
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
    value && setIsSidebarOpen(!!value);
  }, []);

  return (
    <div
      className={`flex flex-col transition-all duration-300 shrink-0 
      ${isSidebarOpen ? 'w-[24.1rem]' : 'w-[11.5rem]'}
      `}
    >
      <div
        className={`py-7 h-[10.4rem] bg-yellow-500
        ${isSidebarOpen ? 'pl-[3.2rem]' : 'pl-[2.4rem]'}
        `}
      >
        <LogoBlack width="6.8rem" open={isSidebarOpen} />
      </div>

      <div
        className={`border-r border-neutral-300 flex flex-col items-center gap-16 h-full`}
      >
        <button
          className="h-16 w-16 bg-neutral-800 flex-center rounded-bl-lg rounded-tl-lg self-end"
          onClick={toggleSidebar}
        >
          <MultiArrow
            direction="right"
            open={isSidebarOpen}
            className="text-white"
          />
        </button>

        <nav className="flex flex-col gap-[1.6rem]">
          {sidebarSectionsList.map((item, i) => (
            <MenuItem
              key={`key_menu_item_${i}_${item.id}`}
              sidebarSection={item}
              page={page}
              isSidebarOpen={isSidebarOpen}
              handleClick={handleClick}
            />
          ))}
        </nav>

        <button className={styles['log-out']}>
          <LogOutIcon className={styles['log-out__icon']} />
          <p className={styles['log-out__text']}>{'Вийти'}</p>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
