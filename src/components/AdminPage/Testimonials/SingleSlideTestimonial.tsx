import Link from 'next/link';

import { DeleteTestimonialsButton } from './DeleteTestimonialsButton';

import { TSlideReview } from '@/types';

import { TLandingLanguage } from '@/store/globalContext';

import { DeleteIcon, PenIcon } from '@/components/common/icons';
import { SingleSlide } from '@/components/MainPage/Reviews/SingleSlide';

export const SingleSlideTestimonial = ({
  slideData,
  lang,
  isImage,
}: {
  slideData: TSlideReview;
  lang: TLandingLanguage;
  isImage: boolean;
}) => {
  const imgEndpoint =
    process.env.NEXT_PUBLIC_PROXY_URL! +
    process.env.NEXT_PUBLIC_SERVER_URL +
    '/files/';

  return (
    <div className="flex gap-[22px] px-[12px] py-[20px] text-neutral-700 shadow">
      <SingleSlide
        slideData={slideData}
        lang={lang}
        isImage={isImage}
        src={imgEndpoint + slideData.imageUrl}
      />

      <div className="flex gap-[8px] self-end">
        <Link href={`/admin/testimonials/edit/${slideData._id}`}>
          <PenIcon
            className="border border-white bg-neutral-800 fill-white p-[0.7rem]"
            width={40}
            height={40}
          />
        </Link>

        <DeleteTestimonialsButton id={slideData._id as string}>
          <DeleteIcon
            className="border border-white bg-neutral-800 p-[0.7rem] text-white"
            width={40}
            height={40}
          />
        </DeleteTestimonialsButton>
      </div>
    </div>
  );
};
