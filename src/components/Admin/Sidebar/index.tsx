'use client';
import { LogOutIcon, LogoBlack, MultiArrow } from '@/components/common/icons';
import { localStorageHandler } from '@/utils/localStorageHandler';
import { usePathname, useRouter } from 'next/navigation';
import { MouseEvent, useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import sidebarSectionsList from './sidebarSectionsList';
import { AdminPanelButton } from '@/components/atomic';

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

  const handleClick = (e: MouseEvent<HTMLLIElement | HTMLButtonElement>) => {
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
      className={`flex shrink-0 flex-col transition-all duration-[3000
      ${isSidebarOpen ? 'w-[24.1rem]' : 'w-[11.5rem]'}
      `}
    >
      <div
        className={`h-[10.4rem] bg-yellow-500 py-7 duration-300
        ${isSidebarOpen ? 'pl-[3.2rem]' : 'pl-[2.4rem]'}
        `}
      >
        <LogoBlack width="6.8rem" open={isSidebarOpen} />
      </div>

      <div className="flex h-full flex-col items-center gap-16 border-r border-neutral-300">
        <button
          className="flex-center h-16 w-16 self-end rounded-bl-lg rounded-tl-lg bg-neutral-800 text-white"
          onClick={toggleSidebar}
        >
          <MultiArrow direction="right" open={isSidebarOpen} />
        </button>

        <ul className="flex flex-col gap-[1.6rem]">
          {sidebarSectionsList.map((item, i) => (
            <MenuItem
              key={`key_menu_item_${i}_${item.id}`}
              sidebarSection={item}
              page={page}
              isSidebarOpen={isSidebarOpen}
              handleClick={handleClick}
            />
          ))}
        </ul>

        <AdminPanelButton
          variant="secondary"
          icon={<LogOutIcon />}
          iconOnly={!isSidebarOpen}
          className='duration-1000'
        >
          Вийти
        </AdminPanelButton>
      </div>
    </div>
  );
}

export default Sidebar;
