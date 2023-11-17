import { TSlideReview } from '@/types';

import { TLandingLanguage } from '@/store/globalContext';

import { SingleSlide } from '@/components/MainPage/Reviews/SingleSlide';
import { ActionBtns } from '@/components/atomic';
import { useTestimonialsSWR } from '@/hooks/SWR/useTestimonialsSWR';
import { createImgUrl } from '@/utils/imageHandler';

type TProps = {
  slideData: TSlideReview;
  lang: TLandingLanguage;
  isImage: boolean;
};

export const SingleSlideTestimonial = ({
  slideData,
  lang,
  isImage,
}: TProps) => {
  const { deleteTestimonial } = useTestimonialsSWR();

  return (
    <div className="flex gap-[22px] px-[12px] py-[20px] text-neutral-700 shadow">
      <SingleSlide
        slideData={slideData}
        lang={lang}
        isImage={isImage}
        src={createImgUrl(slideData.imageUrl)}
      />

      <div className="flex gap-[8px] self-end">
        <ActionBtns
          entity="testimonials"
          id={slideData._id!}
          handleDelete={() => deleteTestimonial(slideData._id!)}
        />
      </div>
    </div>
  );
};
