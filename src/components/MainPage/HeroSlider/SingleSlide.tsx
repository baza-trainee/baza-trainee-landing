import { useGlobalContext } from '@/store/globalContext';
import { TSlide } from '@/types';
// import { createImgUrl } from '@/utils/imageHandler';
import Image from 'next/image';

export const SingleSlide = ({
  slideData,
  index,
}: {
  slideData: TSlide;
  index: number;
}) => {
  const { imageUrl, title, subtitle } = slideData;
  const lang = useGlobalContext().landingLanguage;

  return (
    <div className="relative flex h-[50.4rem] items-center justify-center">
      <Image
        fill
        // src={createImgUrl(imageUrl)}
        src={imageUrl}
        priority={index === 0}
        alt={title[lang]}
        className="object-cover"
        quality={75}
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
