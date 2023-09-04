'use client';

import { CloseIcon, MenuIcon } from '@/components/common/icons';
import { useEffect, useRef, useState } from 'react';
import { HeaderLinks } from './HeaderLinks';

export const HeaderDropdownMenu = ({
  navLinks,
}: {
  navLinks: { title: string | undefined; href: string }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (dropMenuRef.current) {
        const dropMenuRect = dropMenuRef.current.getBoundingClientRect();

        dropMenuRect.top + dropMenuRect.height <= 0 && setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <>
      <button
        className="absolute right-[1.6rem] top-[3.8rem] md:right-[2.4rem] md:top-[4rem]"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        {!isOpen ? <MenuIcon /> : <CloseIcon size="S" />}
      </button>

      <div
        ref={dropMenuRef}
        className={`absolute left-0 z-30 h-fit w-screen origin-top transform border-t border-neutral-800 bg-yellow-500 py-[6.4rem] transition ${
          isOpen
            ? 'scale-y-100 opacity-100  ease-out'
            : 'invisible scale-y-90 opacity-0 duration-0 ease-in'
        }`}
      >
        <HeaderLinks
          navLinks={navLinks}
          className="mx-auto flex w-fit flex-col items-center gap-[3.2rem]"
        />
      </div>
    </>
  );
};
