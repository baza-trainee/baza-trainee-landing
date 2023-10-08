import Image from 'next/image';

import { dictionaries } from '@/locales/dictionaries';

import { TLandingLanguage } from '@/store/globalContext';

export const Gratitude = ({ lang }: { lang: TLandingLanguage }) => {
  const { firstPart, secondPart, title } = dictionaries[lang].yourHelpIsWorth;
  return (
    <div className="flex h-full flex-col items-center justify-center px-[3.5rem] py-[2.4rem] uppercase text-neutral-800">
      <h2 className="text-[3.2rem] font-bold ">{title}</h2>
      <p className="mt-11 max-w-[58.4rem] text-center text-[2.4rem] font-semibold md:mt-7 lg:mt-[4.8rem]">
        {firstPart}
        <span className="sm:whitespace-nowrap">{secondPart}</span>
      </p>
      <Image
        width={230}
        height={230}
        src={'/img/gratitude-icon.png'}
        alt={'Gratitude icon'}
        className="mt-16 h-[15rem] w-[15rem] object-contain md:mt-[5.4rem] md:h-[23rem] md:w-[23rem] lg:mt-[4.8rem]"
      />
      {/*<GratitudeIcon />*/}
    </div>
  );
};
