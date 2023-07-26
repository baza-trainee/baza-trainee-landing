import Link from 'next/link';
import { HTMLAttributes } from 'react';

const navLinks = [
  { title: 'ПРОЕКТИ', href: '#projects' },
  { title: 'ПАРТНЕРИ', href: '#partners' },
  { title: 'ВЗЯТИ УЧАСТЬ', href: '#forms' },
  { title: 'КОНТАКТИ', href: '#footer' },
];

const linkStyle =
  "relative text-[2rem] font-semibold transition-all duration-300 after:absolute after:-bottom-2 after:left-0 after:w-full after:scale-x-0 after:border-b after:transition-all after:content-[''] hover:scale-105 after:hover:scale-100 whitespace-nowrap after:border-black";

export const HeaderLinks = ({className}: HTMLAttributes<HTMLElement>) => {
  return (
    <nav className={className}>
      {navLinks.map((link) => (
        <Link
          key={`header_menu_key_${link.href}`}
          href={link.href}
          className={linkStyle}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
};
