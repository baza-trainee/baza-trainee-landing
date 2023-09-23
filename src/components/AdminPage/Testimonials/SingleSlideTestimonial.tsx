import { DeleteIcon, PenIcon } from '@/components/common/icons';
import { TLandingLanguage } from '@/store/globalContext';
import { ITestimonial } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { DeleteTestimonialsButton } from './DeleteTestimonialsButton';

export const SingleSlideTestimonial = ({
  slideData,
  lang,
}: {
  slideData: ITestimonial;
  lang: TLandingLanguage;
}) => {
  const { role, date, review, imageUrl, name, _id } = slideData;
  const editLink = `/admin/testimonials/edit/${_id}`;
  const formattedDate = new Date(date).toISOString().split('T')[0];

  return (
    <div className="flex gap-[22px] text-neutral-700 shadow px-[12px] py-[20px]">
      <div className='py-[32px] pr-[32px] pl-[90px] flex gap-[48px]'>
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

        <div className="w-[200px] self-center">
          <h4 className="text-[2rem] font-medium">{name[lang]}</h4>
          <p>{role}</p>
          <p className="text-[1.4rem] text-neutral-400">{formattedDate}</p>
        </div>

        <span className="w-[448px] self-center">{review[lang]}</span>
      </div>

      <div className="flex gap-[8px] self-end">
        <Link href={editLink}>
          <PenIcon
            className="border border-white bg-neutral-800 fill-white p-[0.7rem]"
            width={40}
            height={40}
          />
        </Link>

        <DeleteTestimonialsButton id={_id}>
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
