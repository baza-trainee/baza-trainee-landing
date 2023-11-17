'use client';

import { useState } from 'react';

import { AddSlideButton } from './AddSlideBtn';

import { SingleSlide } from '@/components/MainPage/HeroSlider/SingleSlide';
import { AdminTitle, LanguageSelector } from '@/components/atomic';
import { useHeroSliderSWR } from '@/hooks/SWR/useHeroSlidersSWR';
import { TLandingLanguage } from '@/store/globalContext';
import { TSlideResp } from '@/types';
import { createImgUrl } from '@/utils/imageHandler';
import { BtnsOverlay } from './BtnsOverlay';

export const AdminHeroSlider = () => {
  const { data, delByIdSlider } = useHeroSliderSWR();
  const [curLang, setCurLang] = useState<TLandingLanguage>('ua');

  const changeComponentLang = (lang: TLandingLanguage) => {
    setCurLang(lang);
  };

  return (
    <div className="max-h-screen w-full overflow-y-auto bg-base-light px-10">
      <header className="mb-4 flex h-[10.4rem] w-full basis-1 items-center justify-between">
        <AdminTitle>Слайдер</AdminTitle>

        <div className="h-[5.6rem] rounded-md bg-yellow-500 py-5">
          <LanguageSelector
            currLang={curLang}
            changeComponentLang={changeComponentLang}
          />
        </div>
      </header>

      <ul className="flex h-auto flex-col gap-y-28">
        <li className="flex-center h-[23.6rem] w-full bg-base-dark shadow">
          <AddSlideButton {...data?.info} />
        </li>

        {data &&
          data.results.map((slide: TSlideResp) => (
            <BtnsOverlay key={slide._id} handleDelete={delByIdSlider}>
              <SingleSlide
                slideData={{ ...slide, imageUrl: createImgUrl(slide.imageUrl) }}
                lang={curLang}
                index={0}
              />
            </BtnsOverlay>
          ))}
      </ul>
    </div>
  );
};
