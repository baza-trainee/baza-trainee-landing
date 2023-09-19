'use client';
import LanguageSelector from '@/components/MainPage/Header/LanguageSelector';
import { AdminPanelButton } from '@/components/atomic';
import AdminTitle from '@/components/common/AdminTitle';
import { useHeroSliderSWR } from '@/hooks/SWR/useHeroSlidersSWR';
import { TAdminSlide } from '@/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AdminSingleSlide } from './AdminSingleSlide.tsx/AdminSingleSlide';

export const AdminHeroSlider = () => {
  const [curLang, setCurLang] = useState<string>('ua');

  const { data: sliderData } = useHeroSliderSWR();

  useEffect(() => {
    setCurLang(localStorage.getItem('landingLanguage') || 'ua');
  }, []);

  return (
    <div className="max-h-screen w-full overflow-y-auto bg-base-light px-10">
      <header className="slider-header mb-4 flex h-[10.4rem] w-full basis-1 items-center justify-between">
        <AdminTitle title="Слайдер" />
        <LanguageSelector />
      </header>
      <ul className="slider-main flex h-auto flex-col gap-y-28">
        <li className="slide-container flex h-[23.6rem] w-full items-center justify-center bg-base-dark shadow-2sm">
          <AdminPanelButton variant="secondary">
            <Link href="/admin/slider/add-slider">+ Додати слайд</Link>
          </AdminPanelButton>
        </li>
        {sliderData &&
          sliderData?.data.map((item: TAdminSlide) => (
            <AdminSingleSlide key={item._id} slideData={item} lang={curLang} />
          ))}
      </ul>
    </div>
  );
};
