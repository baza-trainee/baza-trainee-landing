'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Container from './Container';
import { PartnerForm } from './PartnerForm';

import { AdminTitle } from '@/components/atomic/AdminTitle';
import { useGlobalContext } from '@/store/globalContext';
import { PartnerEditorProps } from '@/types';
import partnersApi from '@/utils/API/partners';
import { useAPI } from '@/utils/hooks/useAPI';

export const EDITOR_TYPE = {
  ADD: 'add',
  EDIT: 'edit',
};

const PartnerEditor = ({
  params: { editorType, partnerId },
}: PartnerEditorProps) => {
  const [title] = useState<string>(() =>
    editorType === EDITOR_TYPE.ADD ? 'Додати партнера' : 'Редагування'
  );
  const [createNew, newData, isNewError] = useAPI(partnersApi.createNew);
  const [updateById, updData, isUpdError] = useAPI(partnersApi.updateById);
  const [getById, partnerData, isError, isLoading] = useAPI(
    partnersApi.getById
  );
  const { push } = useRouter();
  const { setAlertInfo } = useGlobalContext();

  useEffect(() => {
    if (editorType === EDITOR_TYPE.ADD || partnerData) {
      return;
    }
    getById(partnerId);
  }, [editorType, getById, partnerData, partnerId]);

  const handleSubmit = (data: any) => {
    if (editorType === EDITOR_TYPE.ADD) {
      createNew(data);
    } else {
      updateById([partnerId || '', data]);
    }
  };

  useEffect(() => {
    const setSuccess = (textInfo: string) => {
      setAlertInfo({
        state: 'success',
        title: 'Успіх',
        textInfo,
        func: () => {
          push('/admin/partners');
        },
      });
    };

    if (!isUpdError && updData) {
      setSuccess('Оновлені дані успішно збережено.');
    }

    if (!isNewError && newData) {
      setSuccess('Ваші дані успішно збережено.');
    }
  }, [isUpdError, updData, isNewError, newData, push, setAlertInfo]);

  if (isError) {
    setAlertInfo({
      state: 'error',
      title: 'Помилка',
      textInfo: partnerData?.message,
    });
  }

  return (
    <Container>
      <AdminTitle className={`mb-[4.4rem] tracking-wide`}>{title}</AdminTitle>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <PartnerForm
          handleSubmit={handleSubmit}
          partnerData={partnerData}
          editorType={editorType}
        />
      )}
    </Container>
  );
};

export default PartnerEditor;
