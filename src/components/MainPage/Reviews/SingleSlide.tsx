import Image from 'next/image';

import { TLandingLanguage } from '@/store/globalContext';
import { TSlideReview } from '@/types';
import { formatDate } from '@/utils/formatDate';

export const SingleSlide = ({
  slideData,
  lang,
  src,
}: {
  slideData: TSlideReview;
  lang: TLandingLanguage;
  src: string;
}) => {
  const { role, date, review, name } = slideData; 

  return (
    <div className="min-h-48 flex-center m-auto w-4/5 flex-col gap-[3.2rem] text-neutral-700 md:flex-row md:gap-[2rem] xl:w-[85rem] xl:gap-[4.8rem] py-[32px] pr-[32px] pl-[90px]">
      <div className="relative h-[114px] w-[120px] shrink-0 overflow-hidden rounded-full">       
          <Image
            src={src}
            alt={name[lang]}
            fill
            sizes="(min-width: 300px) 120px"
            style={{
              objectFit: 'cover',
            }}
            quality={85}
          />       
      </div>

      <div className="w-80 self-start whitespace-nowrap md:self-center">
        <h4 className="text-[2rem] font-medium">{name[lang]}</h4>
        <p>{role}</p>
        <p className="text-[1.4rem] text-neutral-400">
          {formatDate(date, 'nouns', lang)}
        </p>
      </div>

      <span className="w-full">{review[lang]}</span>
    </div>
  );
};
