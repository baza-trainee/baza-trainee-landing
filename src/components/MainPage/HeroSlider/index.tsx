'use client';

import { useState } from 'react';
import Slider from 'react-slick';

import {
  ContainerMaxW1200,
  PrimaryButton,
  SlickArrow,
} from '@/components/atomic';

import { TSlide } from '@/types';
import { Modal } from '../Modal';
import { Dots } from './Dots';
import { SingleSlide } from './SingleSlide';
import { slides } from './slides';

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SlickArrow direction="right" />,
  prevArrow: <SlickArrow direction="left" />,
};

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative">
      <Slider {...settings} afterChange={setCurrentSlide} lazyLoad="ondemand">
        {slides.map((slide: TSlide) => (
          <SingleSlide key={`key_${slide.title}`} slideData={slide} />
        ))}
      </Slider>

      <div className="bg-yellow-500">
        <ContainerMaxW1200 className="h-[8.8rem] items-center justify-between">
          <Dots currentSlide={currentSlide} />

          <Modal>
            <PrimaryButton>Фондувати</PrimaryButton>
          </Modal>
        </ContainerMaxW1200>
      </div>
    </section>
  );
};
