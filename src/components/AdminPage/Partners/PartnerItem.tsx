'use client';

import Image from 'next/image';

import { ActionBtns } from '@/components/atomic';
import { PartnerItemProps } from '@/types';
import { createImgUrl } from '@/utils/imageHandler';

export const PartnerItem = ({
  partner: { _id, name, imageUrl, homeUrl },
  handleDelete,
}: PartnerItemProps) => {
  return (
    <li className="relative h-40 w-[27.6rem] bg-[#CECECE]">
      <a className="cursor-pointer" href={homeUrl} target="_blank">
        <Image
          src={createImgUrl(imageUrl)}
          alt={name || 'Partner logo'}
          fill
          sizes="100%"
          className="object-cover"
        />
      </a>

      <div className="absolute bottom-3 right-3">
        <ActionBtns entity="partners" id={_id} handleDelete={handleDelete} />
      </div>
    </li>
  );
};
