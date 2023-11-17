import Image from 'next/image';

import { TSlideReview } from '@/types';

import { TLandingLanguage } from '@/store/globalContext';

import { formatDate } from '@/utils/formatDate';

interface SingleSlideProps {
  slideData: TSlideReview;
  lang: TLandingLanguage;
  isImage?: boolean;
  src?: string;
}

export const SingleSlide = ({
  slideData,
  lang,
  isImage,
  src,
}: SingleSlideProps) => {
  const { role, date, review, imageUrl, name } = slideData;
  const formattedDate = formatDate(date, 'nouns', lang);

  return (
    <div className="min-h-48 flex-center m-auto w-4/5 flex-col gap-[3.2rem] text-neutral-700 md:flex-row md:gap-[2rem] xl:w-[95rem] xl:gap-[4.8rem]">
      <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full bg-[#c4c4c4]">
        {isImage && (
          <Image
            src={src || imageUrl}
            alt={name[lang]}
            fill
            sizes="100%"
            className="object-cover"
            quality={85}
          />
        )}
      </div>

      <div className="w-80 self-start whitespace-nowrap md:self-center">
        <h4 className="text-[2rem] font-medium">{name[lang]}</h4>
        <p>{role}</p>
        <p className="text-[1.4rem] text-neutral-400">{formattedDate}</p>
      </div>
      <span className="w-full">{review[lang] && `"${review[lang]}"`}</span>
    </div>
  );
};
