'use client';

import { ContainerMaxW1200, PrimaryButton } from '@/components/atomic';
import { MultiArrow } from '@/components/common/icons';
import { TSlide } from '@/types';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import { Modal } from '../Modal';
import { Dots } from './Dots';
import { SingleSlide } from './SingleSlide';
import { slides } from './slides';

const settings = {
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
  arrows: false,
};

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slickRef = useRef<Slider | null>(null);

  const goToSlide = (slideIndex: number) => {
    if (slickRef.current) {
      slickRef.current.slickGoTo(slideIndex);
      console.log(slickRef.current);
    }
  };

  const arrowHandler = (direction: 'next' | 'prev') => {
    if (slickRef.current) {
      direction === 'next'
        ? slickRef.current.slickNext()
        : slickRef.current.slickPrev();
    }
  };

  return (
    <section className="relative text-white ">
      <div className="relative">
        <div className="absolute z-20 h-full w-full">
          <ContainerMaxW1200 className="absolute h-full items-center justify-between text-white">
            <button onClick={() => arrowHandler('prev')}>
              <MultiArrow
                direction="left"
                bigSize
                className={` ${currentSlide === 0 && 'hidden'}`}
              />
            </button>
            <button onClick={() => arrowHandler('next')}>
              <MultiArrow
                direction="right"
                bigSize
                className={` ${currentSlide === slides.length - 1 && 'hidden'}`}
              />
            </button>
          </ContainerMaxW1200>
        </div>

        <Slider
          {...settings}
          afterChange={setCurrentSlide}
          lazyLoad="progressive"
          ref={slickRef}
        >
          {slides.map((slide: TSlide) => (
            <SingleSlide key={`key_${slide.title}`} slideData={slide} />
          ))}
        </Slider>
      </div>

      <div className="bg-yellow-500">
        <ContainerMaxW1200 className="h-[8.8rem] items-center justify-between">
          <Dots currentSlide={currentSlide} goToSlide={goToSlide} />

          <Modal>
            <PrimaryButton>Фондувати</PrimaryButton>
          </Modal>
        </ContainerMaxW1200>
      </div>
    </section>
  );
};
