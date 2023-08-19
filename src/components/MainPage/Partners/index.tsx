'use client';

import Link from 'next/link';
import Slider from 'react-slick';

import { ContainerMaxW1200 } from '@/components/atomic';
import Image from 'next/image';
import { partners } from './partners';

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

export const Partners = () => {
  return (
    <section id="partners">
      <ContainerMaxW1200 className="flex-col">
        <div className=" max-w-full">
          <h2 className="mb-[3.8rem] text-center text-6xl font-bold">
            Партнери
          </h2>
          <Slider {...sliderSettings} lazyLoad="progressive">
            {partners.map((partner) => (
              <Link
                key={partner._id}
                href={partner.homeUrl}
                aria-label={`Visit ${partner.name} site`}
                target="_blank"
                className="relative h-[10rem] w-[16.5rem] md:h-[10rem] md:w-[21.4rem]"
                style={{ width: 'min-content' }}
              >
                <Image
                  fill
                  sizes="(min-width: 300px) 100%"
                  aria-label={partner.name}
                  //  width={214}
                  //  height={100}
                  //sizes="(max-width: 214px)"
                  className={
                    'm-auto object-contain  contrast-50 grayscale hover:contrast-100 hover:grayscale-0'
                  }
                  src={partner.imageUrl}
                  alt={partner.name}
                />
              </Link>
            ))}
          </Slider>
        </div>
      </ContainerMaxW1200>
    </section>
  );
};
