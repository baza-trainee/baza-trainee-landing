import Image from 'next/image';

import { dictionaries } from '@/locales/dictionaries';

import { TLandingLanguage } from '@/store/globalContext';

import { ContainerMaxW1200 } from '@/components/atomic';

export const Statistics = async ({ lang }: { lang: TLandingLanguage }) => {
  const { teamsWaitForYou } = dictionaries[lang].invite || {};
  return (
    <section className="relative">
      <Image
        src={'/img/statBg.webp'}
        alt={'statistic background'}
        fill
        style={{
          objectFit: 'cover',
        }}
        sizes="(min-width: 300px) 100vw"
        quality={90}
      />

      <ContainerMaxW1200 className="flex-center min-h-[14.4rem] text-center">
        <h2 className="mx-[5.95rem] my-12 text-[3.2rem] font-bold uppercase md:mx-44">
          {teamsWaitForYou}
        </h2>
      </ContainerMaxW1200>
    </section>
  );
};
