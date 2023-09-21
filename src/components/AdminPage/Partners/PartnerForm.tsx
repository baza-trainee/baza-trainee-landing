import { AdminPanelButton, InputField } from '@/components/atomic';
import { TextInputField } from '@/components/atomic/inputs/TextInputField';
import { CheckIcon } from '@/components/common/icons/CheckIcon';
import { SETTINGS } from '@/config/settings';
import { usePartnerForm } from '@/hooks/usePartnerForm';
import { useGlobalContext } from '@/store/globalContext';
import { PartnerFormProps } from '@/types';
import { formatBytes } from '@/utils/formatBytes';
import Link from 'next/link';
import { SyntheticEvent, useEffect, useState } from 'react';
import { EDITOR_TYPE } from './EditorLayout';

export const PartnerForm = ({
  handleSubmit,
  editorType,
  partnerData,
}: PartnerFormProps) => {
  const { formData, isFormValid, isFormEmpty, errors, handleFieldChange } =
    usePartnerForm();
  const [file, setFile] = useState<Blob | null>(null);
  const { setAlertInfo } = useGlobalContext();
  const maxFileSize = SETTINGS.fileSizeLimits.partnerLogo;

  useEffect(() => {
    if (partnerData) {
      handleFieldChange('name', partnerData.name);
      handleFieldChange('homeUrl', partnerData.homeUrl);
      handleFieldChange('file', partnerData.imageUrl);
    }
  }, [partnerData, handleFieldChange]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFieldChange('name', event.target.value);
  };

  const handleWebsiteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFieldChange('homeUrl', event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.size >= maxFileSize) {
        setAlertInfo({
          state: 'error',
          title: 'Перевищення розміру файлу',
          textInfo: `Максимальний розмір файлу не повинен перевищувати ${formatBytes(
            maxFileSize
          )}`,
        });
      } else {
        handleFieldChange('file', file.name);
        setFile(file);
      }
    }
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!isFormValid || isFormEmpty) {
      return setAlertInfo({
        state: 'warning',
        title: 'Незаповнена інформація',
        textInfo:
          'Деякі поля не заповнені. Будь ласка, заповніть всі необхідні поля перед збереженням.',
      });
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('homeUrl', formData.homeUrl);
    data.append('file', file as File);

    handleSubmit(data);
  };

  return (
    <>
      <div className="flex max-w-[1102px] justify-between py-[2.1rem]">
        <div className="max-w-[1050px] flex-1">
          <form onSubmit={onSubmit}>
            <div className="flex flex-wrap gap-[2.5rem] bg-base-dark py-5 pl-4">
              <TextInputField
                title="Назва"
                inputType="text"
                errorText={errors.name}
                value={formData.name}
                onChange={handleNameChange}
                placeholder="Введіть назву"
              />
              <InputField
                title="Логотип"
                inputType="file"
                errorText={errors.file}
                accept="image/*"
                value={
                  formData.file instanceof File
                    ? formData.file.name
                    : formData.file || ''
                }
                onChange={handleImageChange}
                placeholderText="Завантажте зображення"
              />
              <TextInputField
                title="Сайт партнера"
                inputType="text"
                errorText={errors.website}
                value={formData.homeUrl}
                onChange={handleWebsiteChange}
                placeholder="Додайте посилання"
              />
            </div>
            <ul className="flex gap-4">
              <li>
                <AdminPanelButton
                  type="submit"
                  className={`mt-10 ${
                    editorType === EDITOR_TYPE.ADD
                      ? 'ml-4 pl-[6.5rem] pr-[6.5rem]'
                      : 'ml-[1.4rem]'
                  }`}
                >
                  {editorType === EDITOR_TYPE.ADD ? 'Додати' : 'Зберегти зміни'}
                </AdminPanelButton>
              </li>
              <li>
                <Link href={'/admin/partners'}>
                  <AdminPanelButton
                    variant="secondary"
                    className={`static mt-10`}
                  >
                    Скасувати
                  </AdminPanelButton>
                </Link>
              </li>
            </ul>
          </form>
        </div>
        <div className="mt-16 flex h-[4rem] w-[4rem] items-center justify-center rounded bg-neutral-50 p-2">
          {isFormValid ? (
            <CheckIcon className="text-success-dark" />
          ) : (
            <CheckIcon className="text-neutral-100" />
          )}
        </div>
      </div>
    </>
  );
};
