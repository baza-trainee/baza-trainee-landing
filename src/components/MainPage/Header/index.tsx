import Link from 'next/link';

import { LogoBlack } from '@/components/common/icons';

import { ContainerMaxW1200 } from '@/components/atomic';
import LanguageSelector from './LanguageSelector';

const navLinks = [
  { title: 'ПРОЕКТИ', href: '#projects' },
  { title: 'ПАРТНЕРИ', href: '#partners' },
  { title: 'ВЗЯТИ УЧАСТЬ', href: '#forms' },
  { title: 'КОНТАКТИ', href: '#footer' },
];

const linkStyle =
  "relative text-[2rem] font-semibold transition-all duration-300 after:absolute after:-bottom-2 after:left-0 after:w-full after:scale-x-0 after:border-b after:transition-all after:content-[''] hover:scale-105 after:hover:scale-100 whitespace-nowrap after:border-black";

export const Header = ({
  navLinks,
}: {
  navLinks: { title: string; href: string }[];
}) => {
  return (
    <header className="min-h-[10.4rem] bg-yellow-500 py-5" id="header">
      <ContainerMaxW1200 className="items-center justify-between">
        <Link href="/">
          <LogoBlack />
        </Link>

        <nav className="relative flex flex-col md:flex-row md:gap-12 lg:gap-[5.6rem] ">
          {navLinks.map((link) => (
            <Link
              key={`key_${link.href}`}
              href={link.href}
              className={linkStyle}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <LanguageSelector />
      </ContainerMaxW1200>
    </header>
  );
};
