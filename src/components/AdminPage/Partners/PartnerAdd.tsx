'use client';

import { AdminPanelButton } from '@/components/atomic';
import { AdminTitle } from '@/components/atomic/AdminTitle';
import { usePartnerForm } from '@/hooks/usePartnerForm';
import { GlobalContext } from '@/store/globalContext';
import { PartnerAddProps } from '@/types';
import partnersApi from '@/utils/API/partners';
import { useAPI } from '@/utils/hooks/useAPI';
import { useContext } from 'react';
import { PartnerForm } from './PartnerForm';

export const PartnerAdd = ({ cancelAdd }: PartnerAddProps) => {
  const [dispatch] = useAPI(partnersApi.createNew);
  const { setAlertInfo } = useContext(GlobalContext);
  const { formData, isFormValid, errors, handleFieldChange } = usePartnerForm({
    name: '',
    file: null,
    homeUrl: '',
  });

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
      const newPartner = new FormData() as any;
      newPartner.append('name', formData.name);
      newPartner.append('file', formData.file as Blob);
      newPartner.append('homeUrl', formData.homeUrl);
      setAlertInfo({
        state: 'success',
        title: 'Успіх',
        textInfo: 'Ваші дані успішно збережено.',
        func: cancelAdd,
      });
      dispatch(newPartner);
    }
  };

  return (
    <div className='w-full bg-base-light'>
      <AdminTitle className='mb-[2.4rem] ml-[0.4rem] mt-[0.9rem] tracking-wide'>
        Додати партнера
      </AdminTitle>
      <PartnerForm
        handleSubmit={handleSubmit}
        formData={formData}
        errors={errors}
        isFormValid={isFormValid}
        handleFieldChange={handleFieldChange}
      />
      <div className='ml-3.5 flex gap-[1.5rem] pt-[2.2rem]'>
        <AdminPanelButton
          type='submit'
          className='pl-[6.8rem] pr-[6.8rem]'
          onClick={handleSubmit}
        >
          Додати
        </AdminPanelButton>
        <AdminPanelButton onClick={cancelAdd} variant='secondary'>
          Скасувати
        </AdminPanelButton>
      </div>
    </div>
  );
};
