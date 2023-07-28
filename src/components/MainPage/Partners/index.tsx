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
  slidesToShow: 5,
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
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        rows: 2,
      },
    },
  ],
};

export const Partners = () => {
  return (
    <section id="partners">
      <ContainerMaxW1200 className="flex-col">
        <h2 className=" text-center text-6xl font-bold">Партнери</h2>

        <Slider {...sliderSettings}>
          {partners.map((partner) => (
            <Link
              className="mt-[3.2rem] flex justify-center"
              href={partner.homeUrl}
              key={partner._id}
              target="_blank"
            >
              <Image
                width={214}
                height={100}
                className={
                  'py-4 contrast-50 grayscale hover:contrast-100 hover:grayscale-0'
                }
                src={partner.imageUrl}
                alt={partner.name}
              />
            </Link>
          ))}
        </Slider>
      </ContainerMaxW1200>
    </section>
  );
};

/*className={
            isMembersVisible
              ? 'contrast-50 grayscale-[.3]'
              : 'contrast-50 grayscale group-hover:grayscale-0'
          } */
