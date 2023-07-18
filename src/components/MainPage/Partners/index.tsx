'use client';

import Link from 'next/link';
import Slider from 'react-slick';

import { ContainerMaxW1200 } from '@/components/atomic';
import { GlobalContext } from '@/store/globalContext';
import Image from 'next/image';
import { useContext } from 'react';

const nestedElemStyle = 'h-40 w-11/12 bg-neutral-75 text-center py-4';

const sliderSettings = {
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 2000,
  slidesToShow: 5,
  slidesToScroll: 5,
  infinite: true,
  draggable: false,
};

export const Partners = ({
  dictionary,
}: {
  dictionary: {
    partners: {
      title: string;
    };
  };
}) => {
  const { partners } = useContext(GlobalContext);
  return (
    <section className="mb-[12rem]" id="partners">
      <ContainerMaxW1200 className="flex-col">
        <h2 className="mb-[3.2rem] text-center text-6xl font-bold">
          {dictionary.partners.title}
        </h2>
      </ContainerMaxW1200>
      <Slider {...sliderSettings}>
        {partners?.map(
          (partner: { _id: string; imageUrl: string; homeUrl: string }) => (
            <Link key={partner._id} className="mb-5" href={partner.homeUrl}>
              {/* <div className={nestedElemStyle}>{partner.imageUrl}</div> */}
              <div className={nestedElemStyle}>
                <Image
                  // https://baza-trainee.tech/api/v1/files/
                  src={`https://baza-trainee.tech/api/v1/files/${partner.imageUrl}`}
                  height={100}
                  width={200}
                  alt="partner"
                />
              </div>
              {/* {partner.homeUrl} */}
            </Link>
          )
        )}
      </Slider>
    </section>
  );
};
