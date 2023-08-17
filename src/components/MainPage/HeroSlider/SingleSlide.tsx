import Image from 'next/image';

import { TSlide } from '@/types';

export const SingleSlide = ({
  slideData,
  slideLang,
}: {
  slideData: TSlide;
  slideLang: 'en' | 'pl' | 'ua';
}) => {
  const { image, title, text } = slideData;

  return (
    <div className="relative flex h-[50.4rem] items-center justify-center">
      <Image
        src={image}
        fill
        alt={title}
        objectFit="cover"
        quality={85}
        priority
      />

      <div className="relative w-2/3 max-w-[79rem] text-white md:w-2/3 lg:w-2/3 xl:w-2/3">
        <h2 className="mb-5 text-center text-[3.8rem] font-bold">{title}</h2>
        <p className="font-medium leading-[1.6] md:text-center md:text-[2rem]">
          {text}
        </p>
      </div>
    </div>
  );
};
