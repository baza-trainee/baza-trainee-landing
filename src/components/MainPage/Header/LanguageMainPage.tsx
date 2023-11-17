'use client';

import { useRouter } from 'next/navigation';

import { LanguageSelector } from '@/components/atomic';
import { TLandingLanguage, useGlobalContext } from '@/store/globalContext';

export const LanguageMainPage = () => {
  const { landingLanguage, setLandingLanguage } = useGlobalContext();
  const { replace } = useRouter();

  const handleLanguageClick = (lang: TLandingLanguage) => {
    setLandingLanguage(lang);
    localStorage.setItem('landingLanguage', lang);
    replace(`/${lang}/`);
  };

  return (
    <LanguageSelector
      currLang={landingLanguage}
      changeComponentLang={handleLanguageClick}
    />
  );
};
