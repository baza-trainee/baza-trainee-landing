import Image from 'next/image';

import { ContainerMaxW1200 } from '@/components/atomic';

export const Statistics = () => {
  return (
    <section className="relative">
      <Image
        src={'/img/statBg.jpg'}
        alt={''}
        fill
        objectFit="cover"
        quality={90}
      />

      <ContainerMaxW1200 className="min-h-[14.4rem] items-center justify-center text-center">
        <h2 className="mx-36 my-12 text-[3.2rem] font-bold uppercase">
          5 проектів та 3 команди чекають на тебе
        </h2>
      </ContainerMaxW1200>
    </section>
  );
};
