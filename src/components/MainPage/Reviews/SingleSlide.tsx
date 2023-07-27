import Image from 'next/image';

import { TSlideReview } from '@/types';

export const SingleSlide = ({ slideData }: { slideData: TSlideReview }) => {
  const { role, date, review, imageUrl, name } = slideData;

  return (
    <div
      className="min-h-48 m-auto flex w-4/5 flex-col flex-wrap items-center gap-[2rem]
      text-[1.6rem] font-normal text-neutral-700 md:flex-row md:flex-nowrap md:gap-[4.8rem] xl:w-[80rem]"
    >
      <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full">
        <Image
          src={imageUrl}
          alt={name}
          fill
          objectFit="cover"
          quality={85}
          priority
        />
      </div>

      <div className="w-80 self-baseline whitespace-nowrap text-[2rem] md:self-center">
        <h4 className="text-[2rem] font-medium">{name}</h4>
        <p className="text-[1.6rem]">{role}</p>
        <p className="text-[1.4rem] text-neutral-400">{date}</p>
      </div>

      <span className="w-full">{review}</span>
    </div>
  );
};
