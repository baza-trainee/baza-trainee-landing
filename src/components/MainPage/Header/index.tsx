import { useState } from 'react';
import styles from './styles.module.scss';

const Header = () => {
  const [activeLang, setActiveLang] = useState('UA');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 1, title: 'Проєкти', href: '#projects' },
    { id: 2, title: 'Партнери', href: '#partners' },
    { id: 3, title: 'Взяти участь', href: '#forms' },
    { id: 4, title: 'Контакти', href: '#footer' },
  ];

  const languageOptions = [
    { id: 1, lang: 'UA' },
    { id: 2, lang: 'EN' },
    { id: 3, lang: 'PL' },
  ];

  const handleLanguageClick = (lang: string) => {
    setActiveLang(lang);
    handleMenuClick();
  };

  const handleMenuClick = () => {
    setIsMenuOpen((state) => !state);
  };
  return (
    <header className={styles.header} id="header">
      <div className={`${styles.header__container} container`}>
        <div className={styles.header__logo}>
          <a href="/" className={styles['header__logo-link']}>
            <img
              className={styles['header__logo-img']}
              src="/svg/logo-black.svg"
              alt="Main logo"
            />
          </a>
        </div>
        <ul className={styles['header__nav']}>
          {navLinks.map((link) => (
            <li key={link.id} className={styles['header__nav-elem']}>
              <a href={link.href} className={styles['header__nav-link']}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles['header__lang']}>
          <button
            className={styles['header__lang-btn']}
            id="active-lang"
            onClick={handleMenuClick}
          >
            {activeLang}
            <svg className={styles['header__lang-arrow']}>
              <use href="@img/sprite.svg#arrow-bottom"></use>
            </svg>
          </button>
          <ul
            className={`${styles['header__lang-list']} ${
              isMenuOpen && styles['header__lang-list--visible']
            }`}
            id="lang-list"
          >
            {languageOptions
              .filter((el) => el.lang !== activeLang)
              .map((option) => (
                <li key={option.id} className={styles['header__lang-elem']}>
                  <button
                    className={styles['header__lang-btn']}
                    onClick={() => handleLanguageClick(option.lang)}
                  >
                    <span>{option.lang}</span>
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
