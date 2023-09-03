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
    <div className="max-h-screen w-full overflow-y-auto bg-base-light px-10">
      <header
        style={{ height: '104px' }}
        className="slider-header mb-4 flex w-full basis-1 items-center justify-between"
      >
        <AdminTitle title="Слайдер" />
        <LanguageSelector />
      </header>
      <div className="slider-main flex h-auto flex-col gap-y-28">
        <div
          style={{ height: '236px' }}
          className="slide-container h-px-236 flex w-full items-center justify-center bg-base-dark shadow-2sm"
        >
          <AdminPanelButton variant="secondary">
            + Додати слайд
          </AdminPanelButton>
        </div>
        {data &&
          data.map((item: responseDataType) => (
            <div
              key={item._id}
              style={{
                backgroundImage: `url(${baseUrl + item.imageUrl})`,
                height: '378px',
              }}
              className="slide-items h-px-378 relative flex w-full flex-col items-center justify-center bg-base-dark bg-cover bg-center bg-no-repeat"
            >
              <h2>{item.title[curLang]}</h2>
              <p>{item.subtitle[curLang]}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
