'use client';

import { CloseIcon, MenuIcon } from '@/components/common/icons';
import { useEffect, useState } from 'react';
import { HeaderLinks } from './HeaderLinks';

export const HeaderMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <>
      <button className="" onClick={toggleMenu}>
        {!isOpen ? <MenuIcon /> : <CloseIcon smallSize />}
      </button>

      <div
        className={`fixed left-0 top-[10rem] z-30 h-fit w-full origin-top transform border-t border-neutral-800 bg-yellow-500 py-[6.4rem] transition md:top-[10.4rem] ${
          isOpen
            ? 'scale-y-100 opacity-100 duration-100 ease-out'
            : 'invisible scale-y-90 opacity-0 duration-0 ease-in'
        }`}
      >
        <HeaderLinks className="mx-auto flex w-fit flex-col items-center gap-[3.2rem]" />
      </div>
    </>
  );
};
