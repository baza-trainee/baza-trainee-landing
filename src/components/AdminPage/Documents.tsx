'use client';

import { ChangeEvent, useEffect, useState } from 'react';

import { AdminPanelButton, InputField } from '@/components/atomic';
import { AdminTitle } from '@/components/atomic/AdminTitle';
import { SETTINGS } from '@/config/settings';
import { useGlobalContext } from '@/store/globalContext';
import { documentsApi } from '@/utils/API/documents';
import { formatBytes } from '@/utils/formatBytes';
import { useAPI } from '@/utils/hooks/useAPI';

type TFormData = {
  [key: string]: File | null;
};

export const Documents = () => {
  const { setAlertInfo } = useGlobalContext();

  const [formData, setFormData] = useState<TFormData>({});
  const [filesUpdated, setFilesUpdated] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const [dispatch, data, isError] = useAPI(documentsApi.update);

  const maxFileSize = SETTINGS.fileSizeLimits.report;

  const resetHandler = () => {
    setFormData({});
  };

  useEffect(() => {
    const isFormData = !!Object.values(formData).join();

    setIsFormValid(isFormData);
  }, [formData]);

  useEffect(() => {
    if (!isError && data) {
      setAlertInfo({
        state: 'info',
        title: 'Документи оновленні успішно',
        textInfo: `Оновлено ${filesUpdated} документ(ів)`,
      });
      resetHandler();
    }
    if (isError)
      setAlertInfo({
        state: 'error',
        title: 'Помилка при оновленні документів',
        textInfo: 'Спробуйте пізніше',
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, data, setAlertInfo]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData();
    setFilesUpdated(0);
    for (const key in formData) {
      if (formData[key] !== null) {
        form.append(key, formData[key] as Blob);
        setFilesUpdated((prev) => prev + 1);
      }
    }

    isFormValid && dispatch(form);
  };

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    name: string,
    maxSize: number
  ) => {
    const files = e.currentTarget.files;
    if (files && files[0]?.size <= maxSize) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: null }));
    }
    if (files && files[0]?.size >= maxSize)
      setAlertInfo({
        state: 'error',
        title: 'Перевищення розміру файлу',
        textInfo: `Максимальний розмір файлу не повинен перевищувати ${formatBytes(
          { bytes: maxSize }        )}`,
      });
  };

  return (
    <div className="w-full bg-base-light px-[2.4rem] py-[3.2rem]">
      <AdminTitle className="mb-[4.5rem] ml-[1.2rem]">Документи</AdminTitle>

      <form className="flex flex-col gap-16" onSubmit={handleSubmit}>
        <div className="bg-base-dark px-[1.2rem] py-8">
          <InputField
            title="Звітність"
            inputType="file"
            accept=".pdf"
            value={formData['report']?.name}
            onChange={(e) => onInputChange(e, 'report', maxFileSize)}
            placeholderText="Завантажте документ"
          />
        </div>
        <div className="bg-base-dark px-[1.2rem] py-8">
          <InputField
            title="Статут"
            inputType="file"
            accept=".pdf"
            value={formData['statute']?.name}
            onChange={(e) => onInputChange(e, 'statute', maxFileSize)}
            placeholderText="Завантажте документ"
          />
        </div>
        <div className="flex w-full flex-wrap gap-[2.4rem] bg-base-dark px-[1.2rem] py-8">
          <InputField
            title="Політика конфіденційності"
            inputType="file"
            accept=".pdf"
            value={formData['privacyPolicy[ua]']?.name}
            onChange={(e) => onInputChange(e, 'privacyPolicy[ua]', maxFileSize)}
            placeholderText="Завантажте документ"
          />
          <InputField
            title="Privacy Policy"
            inputType="file"
            accept=".pdf"
            value={formData['privacyPolicy[en]']?.name}
            onChange={(e) => onInputChange(e, 'privacyPolicy[en]', maxFileSize)}
            placeholderText="Завантажте документ"
          />
          <InputField
            title="Polityka prywatności"
            inputType="file"
            accept=".pdf"
            value={formData['privacyPolicy[pl]']?.name}
            onChange={(e) => onInputChange(e, 'privacyPolicy[pl]', maxFileSize)}
            placeholderText="Завантажте документ"
          />
        </div>
        <div className="flex w-full flex-wrap gap-[2.4rem] bg-base-dark px-[1.2rem] py-8">
          <InputField
            title="Правила користування сайтом"
            inputType="file"
            accept=".pdf"
            value={formData['termsOfUse[ua]']?.name}
            onChange={(e) => onInputChange(e, 'termsOfUse[ua]', maxFileSize)}
            placeholderText="Завантажте документ"
          />
          <InputField
            title="Terms of use of the site"
            inputType="file"
            accept=".pdf"
            value={formData['termsOfUse[en]']?.name}
            onChange={(e) => onInputChange(e, 'termsOfUse[en]', maxFileSize)}
            placeholderText="Завантажте документ"
          />
          <InputField
            title="Warunki korzystania z serwisu"
            inputType="file"
            accept=".pdf"
            value={formData['termsOfUse[en]']?.name}
            onChange={(e) => onInputChange(e, 'termsOfUse[en]', maxFileSize)}
            placeholderText="Завантажте документ"
          />
        </div>
        <div className="ml-5 flex gap-[1.8rem]">
          <AdminPanelButton type="submit" disabled={!isFormValid}>
            Зберегти зміни
          </AdminPanelButton>
          <AdminPanelButton variant="secondary" onClick={resetHandler}>
            Скасувати
          </AdminPanelButton>
        </div>
      </form>
    </div>
  );
};
