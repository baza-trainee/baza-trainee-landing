import Link from 'next/link';

import { HeaderDropdownMenu } from './HeaderDropdownMenu';
import { HeaderLinks } from './HeaderLinks';
import LanguageSelector from './LanguageSelector';

import { ContainerMaxW1200 } from '@/components/atomic';
import { LogoMain } from '@/components/common/icons';
import { dictionaries } from '@/locales/dictionaries';
import { TLandingLanguage } from '@/store/globalContext';

export const Header = ({ lang }: { lang: TLandingLanguage }) => {
  const { projects, partners, participate, contacts } =
    dictionaries[lang].navbar || {};
  const navLinks = [
    {
      title: projects,
      href: '#projects',
    },
    { title: partners, href: '#partners' },
    { title: participate, href: '#forms' },
    { title: contacts, href: '#footer' },
  ];
  return (
    <header
      className="relative h-[10rem] bg-yellow-500 md:h-[10.4rem]"
      id="header"
    >
      <ContainerMaxW1200 className="h-full items-center justify-between">
        <Link href="/" aria-label="Main page">
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
