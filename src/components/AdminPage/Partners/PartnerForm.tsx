import { SyntheticEvent, useEffect, useState } from 'react';

import { EDITOR_TYPE } from './EditorLayout';

import { AdminPanelButton, FileInput } from '@/components/atomic';
import { CancelLinkButton } from '@/components/atomic/buttons/CancelLinkButton';
import { TextInputField } from '@/components/atomic/inputs/TextInputField';
import { CheckIcon } from '@/components/common/icons/CheckIcon';
import { SETTINGS } from '@/config/settings';
import { usePartnerForm } from '@/hooks/usePartnerForm';
import { useGlobalContext } from '@/store/globalContext';
import { PartnerFormProps } from '@/types';
import { checkImageDimension } from '@/utils/checkImageDimensions';
import { formatBytes } from '@/utils/formatBytes';

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
  const maxFileDimensions = SETTINGS.fileSizeLimits.partnerLogoDimensions;

  const handleFileSizeError = (textInfo: string): void => {
    handleFieldChange('file', 'size error');
    setFile(null);
    setAlertInfo({
      state: 'error',
      title: 'Перевищення розміру файлу',
      textInfo,
    });
  };

  useEffect(() => {
    if (partnerData) {
      handleFieldChange('name', partnerData.name);
      handleFieldChange('homeUrl', partnerData.homeUrl);
      handleFieldChange('file', partnerData.imageUrl);
    }
  }, [partnerData]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFieldChange('name', event.target.value.trim());
  };

  const handleWebsiteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFieldChange('homeUrl', event.target.value.trim());
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      const checkImage = (isAllowed: boolean) => {
        if (!isAllowed) {
          handleFileSizeError(
            `Ширина і висота зображення повинні бути 214x100 px`
          );
          return;
        }

        if (file.size >= maxFileSize) {
          handleFileSizeError(
            `Максимальний розмір файлу не повинен перевищувати ${formatBytes(
              maxFileSize
            )}`
          );
          return;
        }

        handleFieldChange('file', file.name);
        setFile(file);
      };

      checkImageDimension(file, maxFileDimensions, checkImage);
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
      <div className="flex max-w-[1102px] justify-between ">
        <div className="max-w-[1050px] flex-1">
          <form onSubmit={onSubmit} autoComplete="off">
            <div className="flex flex-wrap gap-[2.5rem] bg-base-dark px-4 py-[2.8rem]">
              <TextInputField
                title="Назва"
                inputType="text"
                errorText={errors.name}
                value={formData.name}
                onChange={handleNameChange}
                placeholder="Введіть назву"
              />
              <FileInput  // TODO: fix it !
                title="Логотип"
                // errorText={errors.file}
                accept="image/jpeg, image/png, image/webp, image/jpg, image/svg"
                onChange={handleImageChange}
                placeholder={formData.file || 'Завантажте зображення'}
                name={''}
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
            <ul className="flex gap-4 px-3">
              <li>
                <AdminPanelButton
                  type="submit"
                  disabled={!isFormValid || isFormEmpty}
                  className={`${
                    editorType === EDITOR_TYPE.ADD
                      ? 'pl-[6.5rem] pr-[6.5rem]'
                      : ''
                  }`}
                >
                  {editorType === EDITOR_TYPE.ADD ? 'Додати' : 'Зберегти зміни'}
                </AdminPanelButton>
              </li>
              <li>
                <CancelLinkButton href={'/admin/partners'}>
                  Скасувати
                </CancelLinkButton>
              </li>
            </ul>
          </form>
        </div>
        <div className="mt-[5.4rem] flex h-[4rem] w-[4rem] items-center justify-center rounded bg-neutral-50 p-2">
          {isFormValid && !isFormEmpty ? (
            <CheckIcon className="text-success-dark" />
          ) : (
            <CheckIcon className="text-neutral-100" />
          )}
        </div>
      </div>
    </>
  );
};
