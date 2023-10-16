import Image from 'next/image';

import { TSlideResp } from '@/types';

import { TLandingLanguage } from '@/store/globalContext';

type TProps = {
  slideData: TSlideResp;
  index: number;
  lang: TLandingLanguage;
};

export const SingleSlide = ({ slideData, index, lang }: TProps) => {
  const { imageUrl, title, subtitle } = slideData;

  return (
    <div className="flex-center relative h-[50.4rem] w-full">
      <Image
        fill
        src={imageUrl}
        priority={index === 0}
        alt={title[lang]}
        className="object-cover"
        quality={90}
      />

      <div className="relative w-2/3 max-w-[79rem] text-white">
        <h2 className="mb-5 text-center text-[3.8rem] font-bold">
          {title[lang]}
        </h2>
        <p className="font-medium leading-[1.6] md:text-center md:text-[2rem]">
          {subtitle[lang]}
        </p>
      </div>
    </div>
  );
};
