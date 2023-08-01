'use client';

import { ActionButton } from '@/components/atomic/buttons/ActionAdminPanelButton';
import { DeleteIcon } from '@/components/common/icons/DeleteIcon';
import { EditIcon } from '@/components/common/icons/EditIcon';
import { GlobalContext } from '@/store/globalContext';
import { PartnerItemProps } from '@/types';
import partnersApi from '@/utils/API/partners';
import { useAPI } from '@/utils/hooks/useAPI';
import Image from 'next/image';
import { useContext } from 'react';

export const PartnerItem = ({
  id,
  name,
  image,
  handleEditPartnerClick,
  handleDataUpdate,
}: PartnerItemProps) => {
  const [dispatch] = useAPI(partnersApi.deleteById);
  const { setAlertInfo } = useContext(GlobalContext);
  const imageUrl = `https://baza-trainee.tech/api/v1/files/${image}`;

  const handleEditClick = () => {
    handleEditPartnerClick(id);
  };

  const handleDeleteAndUpdate = () => {
    dispatch(id);
    handleDataUpdate();
  };

  const handleDeleteClick = () => {
    setAlertInfo({
      state: 'submit',
      title: 'Підтвердити видалення',
      textInfo: 'Бажаєте видалити дані?',
      func: handleDeleteAndUpdate,
    });
  };

  return (
    <>
      <div className='relative  flex h-[100px] min-w-[276px] bg-[#CECECE]'>
        <Image
          src={imageUrl}
          alt={name}
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }}
        />
        <div className='absolute bottom-4 right-[1.3rem] flex items-center justify-end gap-[1rem]'>
          <ActionButton icon={<EditIcon />} onClick={handleEditClick} />
          <ActionButton icon={<DeleteIcon />} onClick={handleDeleteClick} />
        </div>
      </div>
    </>
  );
};
