'use client';

import { useContext, useState } from 'react';
import Slider from 'react-slick';

import { ContainerMaxW1200, SlickArrow } from '@/components/atomic';
import { GlobalContext } from '@/store/globalContext';
import { Dot } from './Dot';
import { SingleSlide } from './SingleSlide';

const sliderSettings = {
  dots: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
  nextArrow: <SlickArrow direction="right" />,
  prevArrow: <SlickArrow direction="left" />,
};

export const Reviews = ({
  dictionary,
  lang,
}: {
  dictionary: {
    reviews: {
      title: string;
    };
  };
  lang: 'en' | 'ua' | 'pl';
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const customPaging = (i: number) => Dot(i, currentSlide);

  const { testimonials } = useContext(GlobalContext);

  return (
    <section className="my-48">
      <ContainerMaxW1200>
        <div className="w-full">
          <h3 className="mb-12 text-center text-6xl font-bold">
            {dictionary.reviews.title}
          </h3>

          <Slider
            {...sliderSettings}
            customPaging={customPaging}
            afterChange={(index) => setCurrentSlide(index)}
            lazyLoad="ondemand"
          >
            {testimonials.map((review, index) => (
              <SingleSlide lang={lang} slideData={review} key={index + 'key'} />
            ))}
          </Slider>
        </div>
      </ContainerMaxW1200>
    </section>
  );
};
