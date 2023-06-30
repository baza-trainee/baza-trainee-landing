import Image from 'next/image';
import { TSlide } from '@/types';

export const SingleSlide = ({ slideData }: { slideData: TSlide }) => {
  const { image, title, text, specialization } = slideData;

  return (
    <div className="flex h-48 w-[80rem] items-center gap-[4.8rem] text-neutral-700">
      <div className="relative h-full w-48">
        <Image src={image} alt={'customer'} fill className="rounded-full" />
      </div>

      <div className="whitespace-nowrap font-secondary text-[2rem]">
        <h4 className="">{title}</h4>
        <p className="">{specialization}</p>
      </div>

      <div>
        <span>{text}</span>
      </div>
    </div>
  );
};
