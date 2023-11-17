'use client';

import Image from 'next/image';

import { PartnerItemProps } from '@/types';

import { createImgUrl } from '@/utils/imageHandler';

import { ActionBtns } from '@/components/atomic';

export const PartnerItem = ({
  partner: { _id, name, imageUrl, homeUrl },
  handleDelete,
}: PartnerItemProps) => {
  return (
    <li className="relative h-40 w-[27.6rem] rounded-lg border">
      <a className="cursor-pointer" href={homeUrl} target="_blank">
        <Image
          src={createImgUrl(imageUrl)}
          alt={name || 'Partner logo'}
          fill
          sizes="100%"
          className="rounded-lg object-contain"
        />
      </a>

      <div className="absolute bottom-3 right-3">
        <ActionBtns entity="partners" id={_id} handleDelete={handleDelete} />
      </div>
    </li>
  );
};
