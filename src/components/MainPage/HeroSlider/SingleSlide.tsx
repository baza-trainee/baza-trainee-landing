import { TLandingLanguage } from '@/store/globalContext';
import { TSlide } from '@/types';
import Image from 'next/image';

export const SingleSlide = ({
  slideData,
  index,
  slideLang,
}: {
  slideData: TSlide;
  index: number;
  slideLang: TLandingLanguage;
}) => {
  const { image, title, text } = slideData;

  return (
    <div className="relative flex h-[50.4rem] items-center justify-center">
      <Image
        src={image}
        fill
        priority={index === 0}
        alt={title[slideLang]}
        style={{
          objectFit: 'cover',
        }}
        quality={90}
      />

      <div className="relative w-[75%] max-w-[79rem] text-white md:w-2/3 lg:w-2/3 xl:w-2/3">
        <h2 className="mb-5 text-center text-[3.8rem] font-bold">
          {title[slideLang]}
        </h2>
        <p className="font-medium leading-[1.6] md:text-center md:text-[2rem]">
          {text[slideLang]}
        </p>
      </div>
    </div>
  );
};
