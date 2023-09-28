import { DeleteIcon, PenIcon } from '@/components/common/icons';
import { createImgUrl } from '@/utils/imageHandler';
import Image from 'next/image';
import Link from 'next/link';
import { SliderDeleteButton } from './AdminSliderBtn';

export const AdminSingleSlide = ({ slideData, lang }: any) => {
  const { imageUrl, title, subtitle, _id } = slideData;
  const editLink = `slider/edit-slider/${_id}`;

  return (
    <li className="relative  h-[50.4rem] overflow-hidden">
      <Image
        src={createImgUrl(imageUrl)}
        fill
        alt={title[lang]}
        priority
        className="object-cover"
        quality={90}
      />
      <div
        style={{
          backgroundImage:
            'linear-gradient(81deg, rgba(0, 0, 0, 0.75) -3.18%, rgba(0, 0, 0, 0.75) 102.18%)',
        }}
        className="z-1 absolute left-0 top-0 flex h-full w-full items-center justify-center"
      >
        <div className="relative w-2/3 max-w-[79rem] text-white">
          <div>
            <h2 className="z-2 mb-5 text-center text-[3.8rem] font-bold">
              {title[lang]}
            </h2>
            <p className="font-medium leading-[1.6] md:text-center md:text-[2rem]">
              {subtitle[lang]}
            </p>
          </div>
        </div>
        <div className="absolute right-6 top-3 flex flex-col gap-3">
          <SliderDeleteButton id={_id}>
            <DeleteIcon
              className="rounded border border-white p-[0.7rem] text-white"
              width={40}
              height={40}
            />
          </SliderDeleteButton>

          <Link href={editLink}>
            <PenIcon
              className="rounded border border-white fill-white p-[0.7rem]"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>
    </li>
  );
};
