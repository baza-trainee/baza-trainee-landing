
'use client';
import { GlobalContext } from '@/store/globalContext';
import { ReducerActionType } from '@/store/globalReducer';
import { StoreContextType } from '@/types/storeTypes';
import { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';

const Header = () => {
  const [activeLang, setActiveLang] = useState('ua');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { dispatch } = useContext<StoreContextType>(GlobalContext);

  const navLinks = [
    { id: 1, title: 'Проєкти', href: '#projects' },
    { id: 2, title: 'Партнери', href: '#partners' },
    { id: 3, title: 'Взяти участь', href: '#forms' },
    { id: 4, title: 'Контакти', href: '#footer' },
  ];

  const languageOptions: {
    id: number;
    lang: 'ua' | 'en' | 'pl';
  }[] = [
    { id: 1, lang: 'ua' },
    { id: 2, lang: 'en' },
    { id: 3, lang: 'pl' },
  ];

  const handleLanguageClick = (lang: 'ua' | 'en' | 'pl') => {
    setActiveLang(lang);
    dispatch({
      type: ReducerActionType.SET_LANDING_LANGUAGE,
      payload: lang,
    });
    localStorage.setItem('lang', lang);
    handleMenuClick();
  };

  useEffect(() => {
    const lang =
      typeof window !== 'undefined'
        ? () => localStorage.getItem('lang') || 'ua'
        : 'ua';
    setActiveLang(lang);
    dispatch({
      type: ReducerActionType.SET_LANDING_LANGUAGE,
      payload: lang as 'ua' | 'en' | 'pl',
    });
  }, [activeLang, dispatch]);

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
                {link.title.toUpperCase()}
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
            <img
              className={styles['header__lang-arrow']}
              src="/svg/arrow-bottom.svg"
              alt="Language dropdown menu arrow"
            />
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
                    <span>{option.lang.toUpperCase()}</span>
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
