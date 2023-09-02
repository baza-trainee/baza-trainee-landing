'use client';
import LanguageSelector from '@/components/MainPage/Header/LanguageSelector';
import { AdminPanelButton } from '@/components/atomic';
import AdminTitle from '@/components/common/AdminTitle';
import { responseDataType } from '@/types';
import heroSliderApi from '@/utils/API/heroSlider';
import { useEffect, useState } from 'react';

export const AdminHeroSlider = () => {
  const [data, setData] = useState<responseDataType>();
  const [curLang, setCurLang] = useState<string>('ua');
  const baseUrl = 'https://baza-trainee.tech/api/v1/files/';

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

  console.log(curLang);

  return (
    <div className="h-screen w-full px-10">
      <header className="slider-header flex w-full basis-1 items-center justify-between">
        <AdminTitle title="Слайдер" />
        <LanguageSelector />
      </header>
      <div className="slider-main flex h-auto flex-col gap-x-28">
        <div className="slide-container h-px-100 flex w-full flex-col items-center justify-center bg-cover bg-no-repeat">
          <AdminPanelButton variant="secondary">
            + Додати слайд
          </AdminPanelButton>
        </div>
        {data &&
          data.map((item: responseDataType) => (
            <div
              key={item._id}
              style={{ backgroundImage: `url(${baseUrl + item.imageUrl})` }}
              className="h-px-378 flex w-full flex-col items-center justify-center bg-cover bg-no-repeat"
            >
              <h2>{item.title[curLang]}</h2>
              <p>{item.subtitle[curLang]}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
