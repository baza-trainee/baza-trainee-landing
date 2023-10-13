'use client';

import { useState } from 'react';
import Slider from 'react-slick';

import { Dot } from './Dot';
import { SingleSlide } from './SingleSlide';
import { slides } from './slides';

import { TSlideReview } from '@/types';

import { dictionaries } from '@/locales/dictionaries';

import { TLandingLanguage } from '@/store/globalContext';

import { ContainerMaxW1200, SlickArrow } from '@/components/atomic';

export const Reviews = ({ lang }: { lang: TLandingLanguage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    nextArrow: <SlickArrow direction="right" />,
    prevArrow: <SlickArrow direction="left" />,
  };

  const { title } = dictionaries[lang].reviews || {};
  const customPaging = (i: number) => Dot(i, currentSlide);

  return (
    <section>
      <ContainerMaxW1200>
        <div className="w-full">
          <h3 className="mb-12 text-center text-6xl font-bold">{title}</h3>
          <Slider
            {...sliderSettings}
            customPaging={customPaging}
            afterChange={setCurrentSlide}
            lazyLoad="progressive"
          >
            {slides?.map((review: TSlideReview) => (
              <SingleSlide
                slideData={review}
                key={review._id!}
                lang={lang}
                src={review.imageUrl}
                isImage={review?.imageUrl.split('.')[0] !== 'undefined'}
              />
            ))}
          </Slider>
        </div>
      </ContainerMaxW1200>
    </section>
  );
};
