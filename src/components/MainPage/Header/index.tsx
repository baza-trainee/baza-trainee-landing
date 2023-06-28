import Link from 'next/link';

import { LogoBlack } from '@/components/common/icons';

import LanguageSelector from './LanguageSelector';

const navLinks = [
  { title: 'ПРОЕКТИ', href: '#projects' },
  { title: 'ПАРТНЕРИ', href: '#partners' },
  { title: 'ВЗЯТИ УЧАСТЬ', href: '#forms' },
  { title: 'КОНТАКТИ', href: '#footer' },
];

const Header = () => {
  return (
    <header className="h-[10.4rem] bg-accent py-5" id="header">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <LogoBlack />
        </Link>

        <nav className="flex gap-[5.6rem]">
          {navLinks.map((link) => (
            <Link
              key={`key_${link.href}`}
              href={link.href}
              className="relative text-[2rem] font-semibold transition-all duration-300 after:absolute
              after:-bottom-2 after:left-0 after:w-full after:scale-x-0 after:border-b after:transition-all
              after:content-[''] hover:scale-105 after:hover:scale-100 whitespace-nowrap"
            >
              {link.title.toUpperCase()}
            </Link>
          ))}
        </nav>

        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;
