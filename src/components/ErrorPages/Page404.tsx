'use client';

import { useEffect, useState } from 'react';

import { SupportBazaButton } from '@/components/atomic';
import { dictionaries } from '@/locales/dictionaries';
import { TLandingLanguage } from '@/store/globalContext';

const mockText = {
  button: '',
  title: '',
  description: '',
};

export const Page404 = () => {
  const [text, setText] = useState(mockText);

  useEffect(() => {
    const landingLanguage = (localStorage.getItem('landingLanguage') ||
      'ua') as TLandingLanguage;
    const { title, description, button } =
      dictionaries[landingLanguage].notFound || mockText;
    setText({ title, description, button });
  }, []);

  return (
    <section className="w-full py-40">
      <div className="flex flex-col items-center gap-[3.2rem]">
        <p className="text-9xl font-bold">404</p>
        <div className="text-center">
          <h2 className="text-[3.2rem] font-bold">{text.title}</h2>
          <p className="text-[2rem] font-medium">{text.description}</p>
        </div>

        <a href="/ua">
          <SupportBazaButton size="M" className="w-[37.8rem]">
            {text.button}
          </SupportBazaButton>
        </a>
      </div>
    </section>
  );
};
