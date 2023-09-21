'use client';

import { localStorageHandler } from '@/utils/localStorageHandler';
import { useEffect, useState } from 'react';

import { AdminPanelButton } from '@/components/atomic';
import { LogOutIcon, LogoMain, MultiArrow } from '@/components/common/icons';
import { deleteTokenCookie } from '@/utils/serverActions/deleteCookie';
import { useRouter } from 'next/navigation';
import { SideBarMenuItem } from './SideBarMenuItem';
import { sidebarSectionsList } from './sidebarSectionsList';

const Sidebar = () => {
  const { push } = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    localStorageHandler.setItem('isAdminSideBarOpen', !isSidebarOpen);
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const value = localStorageHandler.getItem('isAdminSideBarOpen', false);
    value && setIsSidebarOpen(!!value);
  }, []);

  const handleLogOut = () => {
    deleteTokenCookie();
    push('/');
  };

  return (
    <aside
      className={`flex min-h-screen shrink-0 flex-col transition-all ${
        isSidebarOpen ? 'w-[24.1rem]' : 'w-[11.5rem]'
      }`}
    >
      <div
        className={`h-[10.4rem] bg-yellow-500 py-7 ${
          isSidebarOpen ? 'pl-[3.2rem]' : 'pl-[2.4rem]'
        }`}
      >
        <LogoMain className="h-[6.8rem] w-[6.8rem]" open={isSidebarOpen} />
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
        <form action={handleLogOut}>
          <AdminPanelButton
            variant="secondary"
            icon={<LogOutIcon />}
            iconOnly={!isSidebarOpen}
            type="submit"
          >
            Вийти
          </AdminPanelButton>
        </form>
      </div>
    </aside>
  );
};

export { Sidebar };
