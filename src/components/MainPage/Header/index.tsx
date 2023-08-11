import { LogoMain } from '@/components/common/icons';

import { ContainerMaxW1200 } from '@/components/atomic';
import { headers } from 'next/headers';
import Link from 'next/link';
import { HeaderMenuButton } from './HeaderDropdownMenu';
import { HeaderLinks } from './HeaderLinks';
import { LanguageSelector } from './LanguageSelector';

export const Header = ({
  navLinks,
}: {
  navLinks: { title: string; href: string }[];
}) => {
  const headersList = headers();
  const pathname = headersList.get('x-invoke-path') || '';
  return (
    <header className="h-[10rem] bg-yellow-500 md:h-[10.4rem]" id="header">
      <ContainerMaxW1200 className="h-full items-center justify-between">
        <Link href={pathname} className="cursor-pointer">
          <LogoMain className="h-[4.2rem] w-[4.2rem] sm:h-[7.8rem] sm:w-[7.8rem]" />
        </Link>

        <HeaderLinks
          navLinks={navLinks}
          className="hidden gap-[5.6rem] lg:flex"
        />

        <div className="sm:ml-auto sm:mr-20 lg:mx-0">
          <LanguageSelector />
        </div>

        <div className="lg:hidden">
          <HeaderMenuButton navLinks={navLinks} />
        </div>
      </ContainerMaxW1200>
    </header>
  );
};
