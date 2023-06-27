'use client';

import { genKeyId } from '@/utils/genKeyId';

import { GlobalContext, TLandingLanguage } from '@/store/globalContext';
import { useContext, useState } from 'react';

import styles from './styles.module.scss';

import { ArrowBottomIcon } from '@/components/common/icons';

const languageOptions: TLandingLanguage[] = ['ua', 'en', 'pl'];

const LanguageSelector = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { landingLanguage, setLandingLanguage } = useContext(GlobalContext);

  const handleLanguageClick = (lang: TLandingLanguage) => {
    setLandingLanguage(lang);
    handleMenuClick();
  };

  const handleMenuClick = () => {
    setIsMenuOpen((state) => !state);
  };

  const menuStyle = `${styles['header__lang-list']} ${
    isMenuOpen ? styles['header__lang-list--visible'] : ''
  }`;

  return (
    <div className={styles['header__lang']}>
      <button
        className={styles['header__lang-btn']}
        id="active-lang"
        onClick={handleMenuClick}
      >
        {landingLanguage.toUpperCase()}

        <ArrowBottomIcon open={isMenuOpen} />
      </button>

      <ul className={menuStyle} id="lang-list">
        {languageOptions
          .filter((lang) => lang !== landingLanguage)
          .map((lang) => (
            <li key={genKeyId()} className={styles['header__lang-elem']}>
              <button
                className={styles['header__lang-btn']}
                onClick={() => handleLanguageClick(lang)}
              >
                <span>{lang.toUpperCase()}</span>
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
