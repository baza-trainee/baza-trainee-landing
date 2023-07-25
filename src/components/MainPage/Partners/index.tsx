'use client';

import Link from 'next/link';
import Slider from 'react-slick';

import { ContainerMaxW1200 } from '@/components/atomic';

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

export const Partners = () => {
  return (
    <section>
      <ContainerMaxW1200 className="flex-col">
        <h2 className="mb-[3.2rem] text-center text-6xl font-bold">Партнери</h2>

        <Slider {...sliderSettings}>
          <Link className="" href="#">
            <div className={nestedElemStyle}>1</div>
          </Link>

          <Link className="" href="#">
            <div className={nestedElemStyle}>2</div>
          </Link>

          <Link className="" href="#">
            <div className={nestedElemStyle}>3</div>
          </Link>

          <Link className="" href="#">
            <div className={nestedElemStyle}>4</div>
          </Link>

          <Link className="" href="#">
            <div className={nestedElemStyle}>5</div>
          </Link>

          <Link className="" href="#">
            <div className={nestedElemStyle}>6</div>
          </Link>

          <Link className="" href="#">
            <div className={nestedElemStyle}>7</div>
          </Link>

          <Link className="" href="#">
            <div className={nestedElemStyle}>8</div>
          </Link>

          <Link className="" href="#">
            <div className={nestedElemStyle}>9</div>
          </Link>

          <Link className="" href="#">
            <div className={nestedElemStyle}>10</div>
          </Link>
        </Slider>
      </ContainerMaxW1200>
    </section>
  );
};
