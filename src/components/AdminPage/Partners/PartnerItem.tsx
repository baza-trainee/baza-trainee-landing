'use client';

import { ActionButton } from '@/components/atomic/buttons/ActionAdminPanelButton';
import { DeleteIcon } from '@/components/common/icons/DeleteIcon';
import { EditIcon } from '@/components/common/icons/EditIcon';
import { GlobalContext } from '@/store/globalContext';
import { PartnerItemProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

export const PartnerItem = ({
  partner: { _id: id, name: name, imageUrl: image },
  handleDelete,
}: PartnerItemProps) => {
  const { setAlertInfo } = useContext(GlobalContext);
  const imageUrl = `https://baza-trainee.tech/api/v1/files/${image}`;

  const handleDeleteClick = () => {
    setAlertInfo({
      state: 'submit',
      title: 'Підтвердити видалення',
      textInfo: 'Бажаєте видалити дані?',
      func: () => handleDelete(id),
    });
  };

  return (
    <li className="relative  flex h-[100px] min-w-[276px] bg-[#CECECE]">
      <Image
        src={imageUrl}
        alt={name}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
      <div className="absolute bottom-4 right-[1.3rem] flex items-center justify-end gap-[1rem]">
        <Link href={`partners/edit/${id}`}>
          <ActionButton icon={<EditIcon />} />
        </Link>
        <ActionButton icon={<DeleteIcon />} onClick={handleDeleteClick} />
      </div>
    </li>
  );
};
