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
  return (
    <div className="flex gap-[22px] px-[12px] py-[20px] text-neutral-700 shadow">
      <SingleSlide
        slideData={slideData}
        lang={lang}
        src={`https://baza-trainee.tech/api/v1/files/${slideData.imageUrl}`}
      />

      <div className="flex gap-[8px] self-end">
        <Link href={`/admin/testimonials/edit/${slideData._id}`}>
          <PenIcon
            className="border border-white bg-neutral-800 fill-white p-[0.7rem]"
            width={40}
            height={40}
          />
        </Link>

        <DeleteTestimonialsButton id={slideData._id}>
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
