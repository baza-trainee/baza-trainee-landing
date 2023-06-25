'use client';
import { LogOutIcon, SliderMenuArrow } from '@/components/common/icons';
import IconInner from '@/components/common/icons/Spinner/inner';
import IconOuter from '@/components/common/icons/Spinner/outer';
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

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean | null>(null);

  const [page, setPage] = useState<string>(getPath());
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    setPage(e.currentTarget.id);
    router.push(`admin/${e.currentTarget.id}`);
  };

  const toggleSidebar = async () => {
    localStorage.setItem('isAdminSideBarOpen', JSON.stringify(!isSidebarOpen));
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const a = localStorage.getItem('isAdminSideBarOpen');
    setIsSidebarOpen(a === 'true');
  }, []);

  return (
    <>
      <div
        className={`${styles['sidebar-wrapper']} ${
          isSidebarOpen ? styles['sidebar-wrapper--extended'] : ''
        }`}
      >
        <div className={styles['sidebar-logo']}>
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

        <div className={styles['sidebar-menu']}>
          <button
            className={styles['sidebar-logo__close-svg']}
            onClick={toggleSidebar}
          >
            <SliderMenuArrow
              className={`${
                isSidebarOpen ? styles['sidebar-logo__close-svg--mirrored'] : ''
              }`}
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
    </>
  );
}

export default Sidebar;
