'use client';

import Link from 'next/link';
import Slider from 'react-slick';

import { ContainerMaxW1200 } from '@/components/atomic';

const nestedElemStyle = 'h-40 w-11/12 bg-neutral-75 text-center py-4';

const sliderSettings = {
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: false,
  draggable: false,
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
          <Link className="mt-[3.2rem]" href="#">
            <div className={nestedElemStyle}>1</div>
          </Link>

          <Link className="mt-[3.2rem]" href="#">
            <div className={nestedElemStyle}>2</div>
          </Link>

          <Link className="mt-[3.2rem]" href="#">
            <div className={nestedElemStyle}>3</div>
          </Link>

          <Link className="mt-[3.2rem]" href="#">
            <div className={nestedElemStyle}>4</div>
          </Link>

          <Link className="mt-[3.2rem]" href="#">
            <div className={nestedElemStyle}>5</div>
          </Link>

          <Link className="mt-[3.2rem]" href="#">
            <div className={nestedElemStyle}>6</div>
          </Link>

          <Link className="mt-[3.2rem]" href="#">
            <div className={nestedElemStyle}>7</div>
          </Link>

          <Link className="mt-[3.2rem]" href="#">
            <div className={nestedElemStyle}>8</div>
          </Link>

          <Link className="mt-[3.2rem]" href="#">
            <div className={nestedElemStyle}>9</div>
          </Link>

          <Link className="mt-[3.2rem]" href="#">
            <div className={nestedElemStyle}>10</div>
          </Link>
        </Slider>
      </ContainerMaxW1200>
    </section>
  );
};
