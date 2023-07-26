import Link from 'next/link';

import { LogoMain } from '@/components/common/icons';

import { ContainerMaxW1200 } from '@/components/atomic';
import LanguageSelector from './LanguageSelector';
import { HeaderLinks } from './HeaderLinks';
import { HeaderMenuButton } from './HeaderDropdownMenu';

export const Header = () => {
  return (
    <header className="h-[10rem] bg-yellow-500 md:h-[10.4rem]" id="header">
      <ContainerMaxW1200 className="h-full items-center justify-between">
        <Link href="/">
          <LogoMain className="h-[4.2rem] w-[4.2rem] md:h-[7.8rem] md:w-[7.8rem]" />
        </Link>

        <HeaderLinks className="hidden flex-col md:flex-row md:gap-[3.2rem] lg:flex lg:gap-[5.6rem]" />

        <div className="sm:ml-auto sm:mr-20 lg:mx-0">
          <LanguageSelector />
        </div>

        <div className="lg:hidden">
          <HeaderMenuButton/>
            {/* <HeaderLinks className="relative flex flex-col gap-[3.2rem]" /> */}
        </div>
      </ContainerMaxW1200>
    </header>
  );
};
