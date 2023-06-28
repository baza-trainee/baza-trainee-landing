'use client';

import { GlobalContext, TLandingLanguage } from '@/store/globalContext';
import { useContext, useState } from 'react';

import { ArrowBottomIcon } from '@/components/common/icons';

const languageOptions: TLandingLanguage[] = ['ua', 'en', 'pl'];

const btnStyle =
  'z-10 flex cursor-pointer items-center gap-3 bg-transparent pl-5 text-[2rem] font-semibold';

const underLineStyle =
  "relative after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 after:border-b after:transition-all after:content-[''] after:hover:scale-100";

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

  const menuStyle = `absolute left-0 top-[3.5rem] z-10 flex w-20 transform flex-col gap-[1.2rem] rounded-md bg-accent py-[1.2rem] pr-[0.5rem]  ${
    isMenuOpen
      ? 'opacity-100 duration-100 ease-out'
      : 'invisible opacity-0 duration-75 ease-in'
  }`;

  return (
    <div className="relative">
      <button className={btnStyle} id="active-lang" onClick={handleMenuClick}>
        {landingLanguage.toUpperCase()}

        <ArrowBottomIcon open={isMenuOpen} />
      </button>

      <ul className={menuStyle} id="lang-list">
        {languageOptions
          .filter((lang) => lang !== landingLanguage)
          .map((lang) => (
            <li key={`key_${lang}`}>
              <button
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

export default LanguageSelector;
