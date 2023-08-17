import Image from 'next/image';

import { TSlide } from '@/types';

export const SingleSlide = ({ slideData }: { slideData: TSlide }) => {
  const { image, title, text } = slideData;

  return (
    <div className="relative flex h-[50.4rem] items-center justify-center">
      <Image
        src={image}
        fill
        alt={title}
        style={{
          objectFit: 'cover',
        }}
        quality={90}
        priority
      />

      <div className="relative w-2/3 max-w-[79rem] text-white">
        <h2 className="mb-5 text-center text-[3.8rem] font-bold">{title}</h2>
        <p className="font-medium leading-[1.6] md:text-center md:text-[2rem]">
          {text}
        </p>
      </div>
    </div>
  );
};
