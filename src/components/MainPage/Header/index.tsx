import Link from 'next/link';
import { genKeyId } from '@/utils/genKeyId';

import styles from './styles.module.scss';

import { LogoBlack } from '@/components/common/icons';

import LanguageSelector from './LanguageSelector';

const navLinks = [
  { title: 'Проєкти', href: '#projects' },
  { title: 'Партнери', href: '#partners' },
  { title: 'Взяти участь', href: '#forms' },
  { title: 'Контакти', href: '#footer' },
];

const Header = () => {
  return (
    <header className={styles.header} id="header">
      <div className={`${styles.header__container} container`}>
        <div className={styles.header__logo}>
          <Link href="/" className={styles['header__logo-link']}>
            <LogoBlack />
          </Link>
        </div>

        <nav className={styles['header__nav']}>
          {navLinks.map((link) => (
            <Link
              key={genKeyId()}
              href={link.href}
              className={styles['header__nav-link']}
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
