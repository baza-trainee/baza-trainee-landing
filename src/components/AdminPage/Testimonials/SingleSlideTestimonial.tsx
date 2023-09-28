import { SingleSlide } from '@/components/MainPage/Reviews/SingleSlide';
import { DeleteIcon, PenIcon } from '@/components/common/icons';
import { TLandingLanguage } from '@/store/globalContext';
import { TSlideReview } from '@/types';
import Link from 'next/link';
import { DeleteTestimonialsButton } from './DeleteTestimonialsButton';

export const SingleSlideTestimonial = ({
  slideData,
  lang,
}: {
  slideData: TSlideReview;
  lang: TLandingLanguage;
}) => {
  const imgEndpoint =
    process.env.NEXT_PUBLIC_PROXY_URL! +
    process.env.NEXT_PUBLIC_SERVER_URL +
    '/files/';
  const imageSrc = imgEndpoint + slideData.imageUrl;
  const isImageUrl = slideData.imageUrl?.split('.')[0] !== 'undefined';
  return (
    <div className="flex gap-[22px] px-[12px] py-[20px] text-neutral-700 shadow">
      <SingleSlide
        slideData={slideData}
        lang={lang}
        isImageUrl={isImageUrl}
        src={imageSrc}
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
