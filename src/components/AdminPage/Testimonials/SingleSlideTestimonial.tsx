import Image from 'next/image';

import { DeleteIcon, PenIcon } from '@/components/common/icons';
import { TLandingLanguage } from '@/store/globalContext';
import { ITestimonial } from '@/types';

export const SingleSlideTestimonial = ({
  slideData,
  lang,
}: {
  slideData: ITestimonial;
  lang: TLandingLanguage;
}) => {
  const { role, date, review, imageUrl, name } = slideData;

  return (
    <div className="min-h-48 flex mx-auto flex-col gap-[48px] text-neutral-700 md:flex-row md:gap-[2rem] xl:w-[85rem] xl:gap-[4.8rem]">
      <div className="relative h-[116px] w-[120px] shrink-0 overflow-hidden rounded-full">
        <Image
          src={`https://baza-trainee.tech/api/v1/files/${imageUrl}`}
          alt={name[lang]}
          fill
          sizes="(min-width: 300px) 120px"
          style={{
            objectFit: 'cover',
          }}
          quality={85}
        />
      </div>

      <div className="w-[200px]">
        <h4 className="text-[2rem] font-medium">{name[lang]}</h4>
        <p>{role}</p>
        <p className="text-[1.4rem] text-neutral-400">{date}</p>
      </div>

      <span className="w-[448px]">{review[lang]}</span>
      
      <div className="flex gap-[8px] self-end">
        {/* <Link href={editLink}> */}
        <PenIcon
          className="border border-white bg-neutral-800 fill-white p-[0.7rem]"
          width={40}
          height={40}
        />
        {/* </Link> */}

        {/* <SliderDeleteButton id={_id}> */}
        <DeleteIcon
          className="border border-white bg-neutral-800 p-[0.7rem] text-white"
          width={40}
          height={40}
        />
        {/* </SliderDeleteButton> */}
      </div>
    </div>
  );
};
