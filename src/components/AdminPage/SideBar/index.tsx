'use client';

import { useEffect, useState } from 'react';
import { localStorageHandler } from '@/utils/localStorageHandler';

import { AdminPanelButton } from '@/components/atomic';
import { SideBarMenuItem } from './SideBarMenuItem';
import { LogOutIcon, LogoMain, MultiArrow } from '@/components/common/icons';
import { sidebarSectionsList } from './sidebarSectionsList';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    localStorageHandler.setItem('isAdminSideBarOpen', !isSidebarOpen);
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const value = localStorageHandler.getItem('isAdminSideBarOpen');
    value && setIsSidebarOpen(!!value);
  }, []);

  return (
    <div className={`flex min-h-screen shrink-0 flex-col transition-all ${isSidebarOpen ? 'w-[24.1rem]' : 'w-[11.5rem]'}`}>
      <div className={`h-[10.4rem] bg-yellow-500 py-7 ${isSidebarOpen ? 'pl-[3.2rem]' : 'pl-[2.4rem]'}`}>
        <LogoMain width="6.8rem" open={isSidebarOpen} />
      </div>

      <div className="flex h-full flex-col items-center gap-16 border-r border-neutral-300 pb-16">
        <button
          className="flex-center h-16 w-16 shrink-0 self-end rounded-bl-lg rounded-tl-lg bg-neutral-800 text-white"
          onClick={toggleSidebar}
        >
          <MultiArrow direction="right" open={isSidebarOpen} />
        </button>

        <nav className="flex flex-col gap-[1.6rem]">
          {sidebarSectionsList.map((item, i) => (
            <SideBarMenuItem
              key={`key_menu_item2_${i}_${item.id}`}
              sidebarSection={item}
              iconOnly={!isSidebarOpen}
            />
          ))}
        </nav>

        <AdminPanelButton
          variant="secondary"
          icon={<LogOutIcon />}
          iconOnly={!isSidebarOpen}
        >
          Вийти
        </AdminPanelButton>
      </div>
    </div>
  );
};

export { Sidebar };
