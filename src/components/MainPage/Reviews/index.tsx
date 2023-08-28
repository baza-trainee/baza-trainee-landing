'use client';

import { useEffect, useState } from 'react';
import Slider from 'react-slick';

import { dictionaries } from '@/app/[lang]/dictionaries';
import { ContainerMaxW1200, SlickArrow } from '@/components/atomic';
import { TLandingLanguage } from '@/store/globalContext';
import { TDictionary, TSlideReview } from '@/types';
import { Dot } from './Dot';
import { SingleSlide } from './SingleSlide';
import { slides } from './slides';

export const Reviews = ({ lang }: { lang: TLandingLanguage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dict, setDict] = useState<TDictionary>();

  const sliderSettings = {
    dots: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    nextArrow: <SlickArrow direction="right" />,
    prevArrow: <SlickArrow direction="left" />,
  };

  const getDictionary = async () => {
    setDict(await dictionaries[lang]());
  };

  const customPaging = (i: number) => Dot(i, currentSlide);

  useEffect(() => {
    getDictionary();
  }, []);

  return (
    <section>
      <ContainerMaxW1200>
        <div className="w-full">
          <h3 className="mb-12 text-center text-6xl font-bold">
            {dict?.reviews.title}
          </h3>
          <Slider
            {...sliderSettings}
            customPaging={customPaging}
            afterChange={setCurrentSlide}
            lazyLoad="progressive"
          >
            {slides.map((review: TSlideReview, index) => (
              <SingleSlide slideData={review} lang={lang} key={index + 'key'} />
            ))}
          </Slider>
        </div>
      </ContainerMaxW1200>
    </section>
  );
};
