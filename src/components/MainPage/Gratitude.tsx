import { dictionaries } from '@/app/[lang]/dictionaries';
import { TLandingLanguage } from '@/store/globalContext';
import { TDictionary } from '@/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const Gratitude = ({ lang }: { lang: TLandingLanguage }) => {
  const [dict, setDict] = useState<TDictionary>();
  const getDictionary = async () => {
    setDict(await dictionaries[lang]());
  };
  useEffect(() => {
    getDictionary();
  }, []);
  return (
    <div className="flex h-full flex-col items-center justify-center px-[3.5rem] py-[2.4rem] uppercase text-neutral-800">
      <h2 className="text-[3.2rem] font-bold ">
        {dict?.yourHelpIsWorth.title}
      </h2>
      <p className="mt-11 max-w-[58.4rem] text-center text-[2.4rem] font-semibold md:mt-7 lg:mt-[4.8rem]">
        {dict?.yourHelpIsWorth.firstPart}
        <span className="sm:whitespace-nowrap">
          {dict?.yourHelpIsWorth.secondPart}
        </span>
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
