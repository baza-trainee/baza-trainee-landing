import Image from 'next/image';

import { TSlide } from '@/types';

export const SingleSlide = ({ slideData }: { slideData: TSlide }) => {
  const { image, title, text, specialization } = slideData;

  return (
    <div
      className="min-h-48 m-auto flex w-3/5 flex-col flex-wrap items-center 
      gap-[2rem] text-neutral-700 sm:flex-row md:gap-[4.8rem] lg:flex-nowrap xl:w-[80rem]"
    >
      <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full">
        <Image src={image} alt={'customer'} fill objectFit="cover" quality={85}/>
      </div>

      <div className="whitespace-nowrap font-secondary text-[2rem]">
        <h4 className="">{title}</h4>
        <p className="">{specialization}</p>
      </div>

      <span className="font-secondary">{text}</span>
    </div>
  );
};
