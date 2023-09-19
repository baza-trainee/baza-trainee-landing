import { AdminPanelButton } from '@/components/atomic';
import { AdminTitle } from '@/components/atomic/AdminTitle';
import { GlobalContext } from '@/store/globalContext';
import partnersApi from '@/utils/API/partners';
import { useAPI } from '@/utils/hooks/useAPI';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { PartnerForm } from './PartnerForm';

export const PartnerEditor = ({
  params: { editorType, partnerId },
}: {
  params: { editorType: 'add' | 'edit'; partnerId: string | undefined };
}) => {
  const [title] = useState<string>(() =>
    editorType === 'add' ? 'Додати партнера' : 'Редагування'
  );
  const [createNew, newData, isNewError] = useAPI(partnersApi.createNew);
  const [updateById, updData, isUpdError] = useAPI(partnersApi.updateById);
  const [getById, partnerData] = useAPI(partnersApi.getById);
  const { push } = useRouter();
  const { setAlertInfo } = useContext(GlobalContext);

  useEffect(() => {
    if (!partnerData && partnerId) {
      getById(partnerId);
      return;
    }
  }, [partnerData, partnerId]);

  const setSuccess = (textInfo: string) => {
    setAlertInfo({
      state: 'success',
      title: 'Успіх',
      textInfo,
      func: () => {
        push('partners');
      },
    });
  };

  const handleSubmit = () => {
    //   if (isNew) {
    //     createNew(formData);
    //   } else {
    //     updateById([id, formData]);
    //   }

    if (!isUpdError && updData) {
      setSuccess('Оновлені дані успішно збережено.');
    }

    if (!isNewError && newData) {
      setSuccess('Ваші дані успішно збережено.');
    }
  };

  return (
    <div className="w-full bg-base-light">
      <AdminTitle className={`mb-9 ml-[0.8rem] mt-4 tracking-wide`}>
        {title}
      </AdminTitle>
      <PartnerForm handleSubmit={handleSubmit} partnerData={partnerData} />
      <Link href={'partners'}>
        <AdminPanelButton variant="secondary" className={`mt-[-7.7rem]`}>
          Скасувати
        </AdminPanelButton>
      </Link>
    </div>
  );
};
