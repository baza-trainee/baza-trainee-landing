import { AdminPanelButton } from '@/components/atomic';
import { AdminTitle } from '@/components/atomic/AdminTitle';
import { usePartnerForm } from '@/hooks/usePartnerForm';
import { GlobalContext } from '@/store/globalContext';
import partnersApi from '@/utils/API/partners';
import { useAPI } from '@/utils/hooks/useAPI';
import { useContext, useEffect } from 'react';
import { PartnerForm } from './PartnerForm';

interface PartnerDataEdit {
  name: string;
  imageUrl: string;
  homeUrl: string;
}

interface PartnerEditorProps {
  mode: 'add' | 'edit';
  cancelAction: () => void;
  id?: string;
  partnerData?: PartnerDataEdit;
}

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
      <AdminTitle className='mb-9 ml-[0.8rem] tracking-wide'>
        {isNew ? 'Додати партнера' : 'Редагування'}
      </AdminTitle>
      <PartnerForm
        handleSubmit={handleSubmit}
        formData={formData}
        isFormValid={isFormValid}
        errors={errors}
        handleFieldChange={handleFieldChange}
      />
      <div className='ml-4 mt-[2.1rem] flex gap-[1.5rem]'>
        <AdminPanelButton
          type='submit'
          className='pl-[3.5rem] pr-[3.5rem]'
          onClick={handleSubmit}
        >
          {isNew ? 'Додати' : 'Зберегти зміни'}
        </AdminPanelButton>
        <AdminPanelButton onClick={cancelAction} variant='secondary'>
          Скасувати
        </AdminPanelButton>
      </div>
    </div>
  );
};
