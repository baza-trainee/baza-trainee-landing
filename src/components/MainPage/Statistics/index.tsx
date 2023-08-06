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

      <ContainerMaxW1200 className="flex-center min-h-[14.4rem] text-center">
        <h2 className="mx-[5.95rem] my-12 text-[3.2rem] font-bold uppercase md:mx-44">
          5 проєктів та 3 команди чекають{' '}
          <span className="whitespace-nowrap">на тебе</span>
        </h2>
      </ContainerMaxW1200>
    </section>
  );
};
