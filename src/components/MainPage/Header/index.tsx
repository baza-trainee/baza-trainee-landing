'use client';

import { LogoMain } from '@/components/common/icons';

import { dictionaries } from '@/app/[lang]/dictionaries';
import { ContainerMaxW1200 } from '@/components/atomic';
import { TLandingLanguage } from '@/store/globalContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { HeaderDropdownMenu } from './HeaderDropdownMenu';
// import { HeaderLinks } from './HeaderLinks';
// import LanguageSelector from './LanguageSelector';
import dynamic from 'next/dynamic';

const LanguageSelector = dynamic(() => import('./LanguageSelector'));
const HeaderDropdownMenu = dynamic(() =>
  import('./HeaderDropdownMenu').then((mod) => mod.HeaderDropdownMenu)
);
const HeaderLinks = dynamic(() =>
  import('./HeaderLinks').then((mod) => mod.HeaderLinks)
);

export const Header = ({ lang }: { lang: TLandingLanguage }) => {
  // const dict = await dictionaries[lang]();
  const dict = dictionaries[lang];
  const { navbar } = dict || {};
  const { projects, partners, participate, contacts } = navbar || {};
  const navLinks = [
    {
      title: projects,
      href: '#projects',
    },
    { title: partners, href: '#partners' },
    { title: participate, href: '#forms' },
    { title: contacts, href: '#footer' },
  ];
  const pathname = usePathname();
  return (
    <header
      className="relative h-[10rem] bg-yellow-500 md:h-[10.4rem]"
      id="header"
    >
      <ContainerMaxW1200 className="h-full items-center justify-between">
        <Link prefetch={false} href={pathname} aria-label="Main page">
          <LogoMain className="h-[4.2rem] w-[4.2rem] sm:h-[7.8rem] sm:w-[7.8rem]" />
        </Link>

        <HeaderLinks
          navLinks={navLinks}
          className="hidden gap-[5.6rem] lg:flex"
        />

        <div className="mr-20 sm:ml-auto sm:mr-20 lg:mx-0">
          <LanguageSelector />
        </div>
      </ContainerMaxW1200>

      <div className="lg:hidden">
        <HeaderDropdownMenu navLinks={navLinks} />
      </div>
    </header>
  );
};
