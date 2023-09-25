import LanguageSelector from '@/components/MainPage/Header/LanguageSelector';
import { createImgUrl } from '@/utils/imageHandler';
import Image from 'next/image';
import { testimonialValidateOptions } from './testimonialValidateOptions';
import { TTestimonialFormInput } from './types';

type PreviewCardProps = {
  currentValues: TTestimonialFormInput;
};

const TestimonialPreviewCard = ({ currentValues }: PreviewCardProps) => {
  const { authorImg } = currentValues;

  const getImageUrl = () => {
    if (!authorImg?.length) return;

    if (authorImg[0].type === 'for-url') {
      return createImgUrl(authorImg[0].name);
    }

    const isValidImg = testimonialValidateOptions.img.validate(authorImg);
    if (isValidImg) {
      return URL.createObjectURL(authorImg[0]);
    }
  };

  const authorImageUrl = getImageUrl();

  return (
    <div className="relative sm:flex flex-wrap gap-[2.4rem] bg-base-dark p-12 shadow-md ">
      {currentValues.nameUa && authorImg[0].name !== 'undefined' ? (
        <Image
          src={authorImageUrl || ''}
          alt={currentValues.nameUa}
          width={100}
          height={100}
          className="aspect-square rounded-full object-cover"
        />
      ) : (
        <div className="h-[7.5rem] w-[7.5rem] rounded-full bg-gray-500" />
      )}
      <div className="flex flex-col items-start justify-center">
        <span className="text-3xl font-medium text-neutral-700 ">
          {currentValues.nameUa ? currentValues.nameUa : 'Ім’я'}
        </span>
        <span className="text-2xl text-neutral-700 ">
          {currentValues.specialization
            ? currentValues.specialization
            : 'Спеціалізація'}
        </span>
        <span className="text-xl text-neutral-400 ">
          {currentValues.creationDate ? currentValues.creationDate : 'Дата'}
        </span>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <p className="w-2/3">
          {currentValues.textUa
            ? `"${currentValues.textUa}"`
            : `“Я останні два тижні щодня думаю про те, що на Базу варто було прийти мінімум для того, щоб усвідомити значущість роботи дизайнера в розробці ПЗ”`}
        </p>
      </div>
      <div className="w-25 absolute right-0 top-0 flex h-20 items-center justify-center rounded-md bg-accent-light">
        <LanguageSelector />
      </div>
    </div>
  );
};

export default TestimonialPreviewCard;
