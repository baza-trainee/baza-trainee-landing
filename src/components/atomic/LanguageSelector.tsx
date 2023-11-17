'use client';

import { useState } from 'react';

import { MultiArrow } from '@/components/common/icons';
import { TLandingLanguage } from '@/store/globalContext';

type TProps = {
  currLang: TLandingLanguage;
  changeComponentLang: (lang: TLandingLanguage) => void;
};

const languageOptions: TLandingLanguage[] = ['ua', 'en', 'pl'];

const btnStyle =
  'z-10 flex cursor-pointer focus:border-none focus:shadow-none focus:outline-none items-center gap-3 bg-transparent pl-5 text-[2rem] font-semibold h-[3.3rem]';

const underLineStyle =
  "relative after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 after:border-b after:transition-all after:content-[''] after:hover:scale-100";

const LanguageSelector = ({ currLang, changeComponentLang }: TProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((state) => !state);
  };

  const handleLanguageClick = (lang: TLandingLanguage) => {
    if (changeComponentLang) {
      changeComponentLang(lang);
    }

    handleMenuClick();
  };

  const menuStyle = `absolute left-0 top-[3.5rem] z-10 flex w-20 transform flex-col gap-[1.2rem] rounded-md bg-yellow-500 py-[1.2rem] ${
    isMenuOpen
      ? 'opacity-100 duration-100 ease-out'
      : 'invisible opacity-0 duration-75 ease-in'
  }`;

  return (
    <div className="relative">
      <button
        type="button"
        className={btnStyle}
        id="active-lang"
        onClick={handleMenuClick}
      >
        {currLang.toUpperCase()}

        <MultiArrow direction="bottom" open={isMenuOpen} />
      </button>

      <ul className={menuStyle} id="lang-list">
        {languageOptions
          .filter((lang) => lang !== currLang)
          .map((lang) => (
            <li key={`key_${lang}`}>
              <button
                type="button"
                className={btnStyle}
                onClick={() => handleLanguageClick(lang)}
              >
                <span className={underLineStyle}>{lang.toUpperCase()}</span>
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export { LanguageSelector };
