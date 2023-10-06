'use client';
import Image from 'next/image';
import Slider from 'react-slick';

import { ContainerMaxW1200 } from '@/components/atomic';
import { usePartnersSWR } from '@/hooks/SWR/usePartnersSWR';
import { dictionaries } from '@/locales/dictionaries';
import { TLandingLanguage } from '@/store/globalContext';
import { TPartnerResp } from '@/types';
import { createImgUrl } from '@/utils/imageHandler';

const sliderSettings = {
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  draggable: true,

  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 485,
      settings: {
        slidesToShow: 1,
        //        rows: 2,
      },
    },
  ],
};

export const Partners = ({ lang }: { lang: TLandingLanguage }) => {
  const { title } = dictionaries[lang].partners || {};
  const { partnersData } = usePartnersSWR();
  const partners: TPartnerResp[] = partnersData?.results || [];

  return (
    <section id="partners">
      <ContainerMaxW1200 className="flex-col">
        <div className="max-w-full">
          <h2 className="mb-[3.8rem] text-center text-6xl font-bold">
            {title}
          </h2>

          <Slider {...sliderSettings} lazyLoad="progressive">
            {partners.map((partner) => (
              <a
                key={partner._id}
                href={partner.homeUrl}
                aria-label={`Visit ${partner.name} site`}
                target="_blank"
                className="relative h-[10rem] w-[16.5rem] md:w-[21.4rem]"
              >
                <Image
                  fill
                  sizes="100%"
                  className="m-auto object-contain contrast-50 grayscale hover:contrast-100 hover:grayscale-0"
                  src={createImgUrl(partner.imageUrl)}
                  alt={partner.name}
                />
              </a>
            ))}
          </Slider>
        </div>
      </ContainerMaxW1200>
    </section>
  );
};
