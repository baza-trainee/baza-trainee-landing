import { TSlide } from '@/types';

export const SingleSlide = ({
  slideData,
  slideLang,
}: {
  slideData: TSlide;
  slideLang: 'en' | 'pl' | 'ua';
}) => {
  const { title, imageUrl, subtitle } = slideData;
  return (
    <div
      className="flex h-[50.4rem] items-center justify-center  bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://baza-trainee.tech/api/v1/files/${imageUrl}')`,
      }}
    >
      <div className="w-2/3 max-w-[79rem] text-center text-white">
        <h2 className="mb-5 text-[3.8rem] font-bold">{title[slideLang]}</h2>
        <p className="text-[2rem] font-medium leading-[1.6]">
          {subtitle[slideLang]}
        </p>
      </div>
    </div>
  );
};
