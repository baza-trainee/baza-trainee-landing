'use client';

import { AdminTitle } from '@/components/atomic/AdminTitle';
import { useGlobalContext } from '@/store/globalContext';
import partnersApi from '@/utils/API/partners';
import { useAPI } from '@/utils/hooks/useAPI';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Container from './Container';
import { PartnerForm } from './PartnerForm';

export const EDITOR_TYPE = {
  ADD: 'add',
  EDIT: 'edit',
};

const PartnerEditor = ({
  params: { editorType, partnerId },
}: {
  params: { editorType: 'add' | 'edit'; partnerId?: string };
}) => {
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
  }, []);

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
  }, [isUpdError, updData, isNewError, newData]);

  if (isError) {
    console.log('isError');
  }

  return (
    <Container>
      <AdminTitle className={`mb-9 ml-[0.8rem] mt-4 tracking-wide`}>
        {title}
      </AdminTitle>

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
