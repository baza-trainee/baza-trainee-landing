'use client';
import LanguageSelector from '@/components/MainPage/Header/LanguageSelector';
import { AdminPanelButton } from '@/components/atomic';
import AdminTitle from '@/components/common/AdminTitle';
import { TAdminSlide, responseDataType } from '@/types';
import heroSliderApi from '@/utils/API/heroSlider';
import { FC, useEffect, useState } from 'react';
import { AdminSingleSlide } from './AdminSingleSlide.tsx/AdminSingleSlide';

interface TAdminHeroSlider {
  key: string;
  slideData: never;
}

export const AdminHeroSlider: FC<TAdminHeroSlider> = () => {
  const [data, setData] = useState<responseDataType>();
  const [curLang, setCurLang] = useState<string>('ua');
  // const baseUrl = 'https://baza-trainee.tech/api/v1/files/';

  async function getData() {
    try {
      const res: responseDataType = await heroSliderApi.getAll();
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData().then((item: never[]) => {
      setData(item);
    });
    setCurLang(localStorage.getItem('landingLanguage') || 'ua');
  }, []);
  console.log(data);

  return (
    <div className="max-h-screen w-full overflow-y-auto bg-base-light px-10">
      <header className="slider-header mb-4 flex h-[10.4rem] w-full basis-1 items-center justify-between">
        <AdminTitle title="Слайдер" />
        <LanguageSelector />
      </header>
      <div className="slider-main flex h-auto flex-col gap-y-28">
        <div className="slide-container flex h-[23.6rem] w-full items-center justify-center bg-base-dark shadow-2sm">
          <AdminPanelButton variant="secondary">
            + Додати слайд
          </AdminPanelButton>
        </div>
        {data &&
          data.map((item: TAdminSlide) => (
            <AdminSingleSlide key={item._id} slideData={item} lang={curLang} />
            // <div
            //   key={item._id}
            //   style={{
            //     backgroundImage: `linear-gradient(81deg, rgba(0, 0, 0, 0.75) -3.18%, rgba(0, 0, 0, 0.75) 102.18%), url(<path-to-image>), url(${
            //       baseUrl + item.imageUrl
            //     })`,
            //   }}
            //   className="slide-items relative flex h-[37.8rem] w-full flex-col items-center justify-center bg-cover bg-no-repeat"
            // >
            //   <div className="w-2/4">
            //     <h2 className="mb-9 text-center text-2xl font-bold leading-8 text-white">
            //       {item.title[curLang]}
            //     </h2>
            //     <p className="text-center text-sm font-normal text-white">
            //       {item.subtitle[curLang]}
            //     </p>
            //   </div>
            //   <div className="absolute right-6 top-3 flex flex-col gap-3">
            //     <DeleteIcon
            //       className="rounded border border-white p-[0.7rem] text-white"
            //       width={40}
            //       height={40}
            //     />

            //     <PenIcon
            //       className="rounded border border-white fill-white p-[0.7rem]"
            //       width={40}
            //       height={40}
            //     />
            //   </div>
            // </div>
          ))}
      </div>
    </div>
  );
};
