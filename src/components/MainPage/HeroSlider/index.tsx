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
import { getTranslatedSlides, slides } from './slides';

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SlickArrow direction="right" />,
  prevArrow: <SlickArrow direction="left" />,
};

export const HeroSlider = ({
  dictionary,
}: {
  dictionary: {
    navbar: {
      projects: string;
    };
    toFund: string;
    enterKeywordForSearch: string;
    heroSlider: {
      firstSlide: {
        title: string;
        description: string;
      };
      secondSlide: {
        title: string;
        description: string;
      };
      thirdSlide: {
        title: string;
        description: string;
      };
      fourthSlide: {
        title: string;
        description: string;
      };
      fifthSlide: {
        title: string;
        description: string;
      };
    };
  };
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const translatedSlides = getTranslatedSlides(slides, dictionary);
  return (
    <section className="relative">
      <Slider {...settings} afterChange={setCurrentSlide} lazyLoad="ondemand">
        {translatedSlides.map((slide: TSlide) => (
          <SingleSlide key={`key_${slide.title}`} slideData={slide} />
        ))}
      </Slider>

      <div className="bg-yellow-500">
        <ContainerMaxW1200 className="h-[8.8rem] items-center justify-between">
          <Dots currentSlide={currentSlide} />

          <Modal>
            <PrimaryButton>{dictionary.toFund}</PrimaryButton>
          </Modal>
        </ContainerMaxW1200>
      </div>
    </section>
  );
};
export type { TSlide };
