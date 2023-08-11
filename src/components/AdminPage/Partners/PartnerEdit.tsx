'use client';

import { AdminPanelButton } from '@/components/atomic';
import { AdminTitle } from '@/components/atomic/AdminTitle';
import { usePartnerForm } from '@/hooks/usePartnerForm';
import { GlobalContext } from '@/store/globalContext';
import { PartnerEditProps } from '@/types';
import partnersApi from '@/utils/API/partners';
import { useAPI } from '@/utils/hooks/useAPI';
import { useContext, useEffect } from 'react';
import { PartnerForm } from './PartnerForm';

export const PartnerEdit = ({
  cancelEdit,
  id,
  partnerData,
}: PartnerEditProps) => {
  const [dispatch] = useAPI(partnersApi.updateById);
  const { setAlertInfo } = useContext(GlobalContext);

  const { formData, isFormValid, handleFieldChange } = usePartnerForm({
    name: '',
    file: null,
    homeUrl: '',
  });

  useEffect(() => {
    if (partnerData) {
      handleFieldChange('name', partnerData.name);
      handleFieldChange('homeUrl', partnerData.homeUrl);
      handleFieldChange('file', partnerData.imageUrl);
    }
  }, [partnerData]);

  const handleSubmit = () => {
    if (!isFormValid) {
      setAlertInfo({
        state: 'warning',
        title: 'Незаповнена інформація',
        textInfo:
          'Деякі поля не заповнені. Будь ласка, заповніть всі необхідні поля перед збереженням.',
      });
    }

    if (isFormValid) {
      const newPartner = new FormData();
      newPartner.append('name', formData.name);
      newPartner.append('homeUrl', formData.homeUrl);
      newPartner.append('file', formData.file as Blob);

      setAlertInfo({
        state: 'success',
        title: 'Успіх',
        textInfo: 'Оновлені дані успішно збережено.',
      });

      dispatch([id, newPartner]);
    }
  };

  if (!partnerData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-full bg-base-light'>
      <AdminTitle className='mb-9 ml-[0.8rem] tracking-wide'>
        Редагування
      </AdminTitle>
      <PartnerForm
        handleSubmit={handleSubmit}
        formData={formData}
        isFormValid={isFormValid}
        handleFieldChange={handleFieldChange}
      />
      <div className='ml-4 mt-[2.1rem] flex gap-[1.5rem]'>
        <AdminPanelButton
          type='submit'
          className='pl-[3.5rem] pr-[3.5rem]'
          onClick={handleSubmit}
        >
          Зберегти зміни
        </AdminPanelButton>
        <AdminPanelButton onClick={cancelEdit} variant='secondary'>
          Скасувати
        </AdminPanelButton>
      </div>
    </div>
  );
};
