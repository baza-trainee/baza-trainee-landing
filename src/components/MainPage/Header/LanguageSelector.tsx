'use client';

import { GlobalContext, TLandingLanguage } from '@/store/globalContext';
import { useContext, useEffect, useState } from 'react';

import { MultiArrow } from '@/components/common/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const languageOptions: TLandingLanguage[] = ['ua', 'en', 'pl'];

type TLang = 'ua' | 'en' | 'pl';

const btnStyle =
  'z-10 flex cursor-pointer items-center gap-3 bg-transparent pl-5 text-[2rem] font-semibold h-[3.3rem] w-32';

const underLineStyle =
  "relative after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 after:border-b after:transition-all after:content-[''] after:hover:scale-100";

export const LanguageSelector = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const [curLang, setCurLang] = useState<TLang>('ua');

  const { landingLanguage, setLandingLanguage } = useContext(GlobalContext);

  useEffect(() => {
    const getLang = () => {
      const langArr = ['en', 'pl', 'ua'];

      const url = new URL(window.location.href).pathname;
      const segments = url.split('/');
      const languageCode = segments[segments.length - 1];
      const isLangCorrect = langArr.includes(languageCode);
      const normalizedLang = isLangCorrect ? languageCode : 'ua';
      !isLangCorrect && router.replace(normalizedLang);
      setCurLang(normalizedLang as TLang);
    };
    getLang();
  }, [router]);

  const handleMenuClick = () => {
    setIsMenuOpen((state) => !state);
  };

  const menuStyle = `absolute left-0 top-[3.5rem] z-10 flex w-20 transform flex-col gap-[1.2rem] rounded-md bg-yellow-500 py-[1.2rem] pr-[0.5rem]  ${
    isMenuOpen
      ? 'opacity-100 duration-100 ease-out'
      : 'invisible opacity-0 duration-75 ease-in'
  }`;

  return (
    <div className="relative">
      <button className={btnStyle} id="active-lang" onClick={handleMenuClick}>
        {curLang.toUpperCase()}

        <MultiArrow direction="bottom" open={isMenuOpen} />
      </button>

      <ul className={menuStyle} id="lang-list">
        {languageOptions
          .filter((lang) => lang !== curLang)
          .map((lang) => (
            <li key={`key_${lang}`}>
              <Link href={lang} className={btnStyle}>
                <span className={underLineStyle}>{lang.toUpperCase()}</span>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
