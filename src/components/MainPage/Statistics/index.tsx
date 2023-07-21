import Image from 'next/image';

import { ContainerMaxW1200 } from '@/components/atomic';

export const Statistics = () => {
  return (
    <section className="relative my-[5.3rem] h-[14.4rem] overflow-hidden">
      <Image src={'/img/statBg.jpg'} alt={''} fill objectFit="cover" quality={85} />

      <ContainerMaxW1200 className="h-full items-center justify-center">
        <h2 className="text-[3.2rem] font-bold uppercase">
          5 проектів та 3 команди чекають на тебе
        </h2>
      </ContainerMaxW1200>
    </section>
  );
};
