import { AdminPanelButton } from '@/components/atomic';
import { AdminTitle } from '@/components/atomic/AdminTitle';
import { usePartnerForm } from '@/hooks/usePartnerForm';
import { GlobalContext } from '@/store/globalContext';
import partnersApi from '@/utils/API/partners';
import { useAPI } from '@/utils/hooks/useAPI';
import { useContext, useEffect } from 'react';
import { PartnerForm } from './PartnerForm';
import { PartnerEditorProps } from '@/types';

export const PartnerEditor = ({
  mode,
  cancelAction,
  id,
  partnerData,
}: PartnerEditorProps) => {
  const apiMethods = {
    add: partnersApi.createNew,
    edit: partnersApi.updateById,
  };
  const [dispatch] = useAPI(apiMethods[mode] as any);
  const { setAlertInfo } = useContext(GlobalContext);
  const isNew = mode === 'add';
  const { formData, isFormValid, errors, handleFieldChange } = usePartnerForm();

  useEffect(() => {
    if (!isNew && partnerData) {
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
    } else {
      if (isNew) {
        setAlertInfo({
          state: 'success',
          title: 'Успіх',
          textInfo: 'Ваші дані успішно збережено.',
          func: cancelAction,
        });
      } else {
        setAlertInfo({
          state: 'success',
          title: 'Успіх',
          textInfo: 'Оновлені дані успішно збережено.',
        });
      }

      if (isNew) {
        dispatch(formData);
      } else {
        dispatch([id, formData]);
      }
    }
  };

  return (
    <div className='w-full bg-base-light'>
      <AdminTitle
        className={`mb-9 ml-[0.8rem] tracking-wide ${isNew ? 'mt-4' : ''}`}
      >
        {isNew ? 'Додати партнера' : 'Редагування'}
      </AdminTitle>
      <PartnerForm
        handleSubmit={handleSubmit}
        formData={formData}
        isFormValid={isFormValid}
        errors={errors}
        handleFieldChange={handleFieldChange}
        isNew={isNew}
      />
      <AdminPanelButton
        onClick={cancelAction}
        variant='secondary'
        className={`mt-[-7.7rem] ${isNew ? 'ml-96' : 'ml-[25rem]'}`}
      >
        Скасувати
      </AdminPanelButton>
    </div>
  );
};
