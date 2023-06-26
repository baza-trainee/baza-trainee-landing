'use client';

import { genKeyId } from '@/utils/genKeyId';

import { GlobalContext } from '@/store/globalContext';
import { ReducerActionType } from '@/store/globalReducer';
import { StoreContextType } from '@/types/storeTypes';
import { useContext, useEffect, useState } from 'react';

import styles from './styles.module.scss';

import { ArrowBottomIcon } from '@/components/common/icons';

const LanguageSelector = () => {
//   const [activeLang, setActiveLang] = useState('ua');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state, dispatch } = useContext<StoreContextType>(GlobalContext);

  const languageOptions: {
    lang: 'ua' | 'en' | 'pl';
  }[] = [{ lang: 'ua' }, { lang: 'en' }, { lang: 'pl' }];

  const handleLanguageClick = (lang: 'ua' | 'en' | 'pl') => {
    // setActiveLang(lang);
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
    // setActiveLang(lang);
    dispatch({
      type: ReducerActionType.SET_LANDING_LANGUAGE,
      payload: lang as 'ua' | 'en' | 'pl',
    });
  }, [ dispatch]);

  const handleMenuClick = () => {
    setIsMenuOpen((state) => !state);
  };

  return (
    <div className={styles['header__lang']}>
      <button
        className={styles['header__lang-btn']}
        id="active-lang"
        onClick={handleMenuClick}
      >
        {state.landingLanguage.toUpperCase()}

        <ArrowBottomIcon />
      </button>

      <ul
        className={`${styles['header__lang-list']} ${
          isMenuOpen && styles['header__lang-list--visible']
        }`}
        id="lang-list"
      >
        {languageOptions
          .filter((el) => el.lang !== state.landingLanguage)
          .map((option) => (
            <li key={genKeyId()} className={styles['header__lang-elem']}>
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
  );
};

export default LanguageSelector;
