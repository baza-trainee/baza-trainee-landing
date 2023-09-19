'use client';

import partnersApi from '@/utils/API/partners';
import { useAPI } from '@/utils/hooks/useAPI';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { PartnerEditor } from './PartnerEditor';
import { PartnersList } from './PartnersList';

export const PartnersPage = () => {
  const [addNewPartner, setAddNewPartner] = useState<boolean>(false);
  const [editPartner, setEditPartner] = useState<boolean>(false);
  const [partnerId, setPartnerId] = useState<string>('');
  const { push } = useRouter();
  const [dispatch, data] = useAPI(partnersApi.getById);

  const handleAddPartnerClick = () => {
    console.log('qwe');
    // setAddNewPartner(!addNewPartner);
    // push('/add');
  };

  const handleEditPartnerClick = (id: string) => {
    dispatch(id);
    setPartnerId(id);
    setEditPartner(!editPartner);
  };

  const cancelAdd = () => {
    setAddNewPartner(!addNewPartner);
  };

  const cancelEdit = () => {
    setEditPartner(!editPartner);
  };

  return (
    <div className="w-full bg-base-light px-[2.4rem] pb-[2.9rem] pt-8">
      {!addNewPartner && !editPartner ? (
        <PartnersList
          handleAddPartnerClick={handleAddPartnerClick}
          handleEditPartnerClick={handleEditPartnerClick}
        />
      ) : addNewPartner ? (
        <PartnerEditor mode="add" cancelAction={cancelAdd} />
      ) : (
        <PartnerEditor
          mode="edit"
          cancelAction={cancelEdit}
          id={partnerId}
          partnerData={data}
        />
      )}
    </div>
  );
};
