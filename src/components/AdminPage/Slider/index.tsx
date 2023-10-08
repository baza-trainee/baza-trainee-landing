'use client';
import { AdminSingleSlide } from './AdminSingleSlide.tsx/AdminSingleSlide';
import { AddSlideButton } from './AddSlideBtn';

import { IHeroSlider } from '@/types';

import { useHeroSliderSWR } from '@/hooks/SWR/useHeroSlidersSWR';

import { useGlobalContext } from '@/store/globalContext';

import { AdminTitle } from '@/components/atomic';
import LanguageSelector from '@/components/MainPage/Header/LanguageSelector';

export const AdminHeroSlider = () => {
  const { data } = useHeroSliderSWR();
  const curLang = useGlobalContext().landingLanguage;

  return (
    <div className="max-h-screen w-full overflow-y-auto bg-base-light px-10">
      <header className="slider-header mb-4 flex h-[10.4rem] w-full basis-1 items-center justify-between">
        <AdminTitle>Слайдер</AdminTitle>
        <div className="h-[5.6rem] rounded-md bg-yellow-500 py-5">
          <LanguageSelector />
        </div>
      </header>
      <ul className="slider-main flex h-auto flex-col gap-y-28">
        <li className="slide-container flex h-[23.6rem] w-full items-center justify-center bg-base-dark shadow">
          {data && <AddSlideButton dataInfo={data?.info} />}
        </li>
        {data &&
          data.results.map((item: IHeroSlider) => (
            <AdminSingleSlide key={item._id} slideData={item} lang={curLang} />
          ))}
      </ul>
    </div>
  );
};
