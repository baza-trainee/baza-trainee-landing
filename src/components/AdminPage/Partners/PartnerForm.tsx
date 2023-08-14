import { InputField } from '@/components/atomic';
import { TextInputField } from '@/components/atomic/inputs';
import { CheckIcon } from '@/components/common/icons/CheckIcon';
import { SETTINGS } from '@/config/settings';
import { GlobalContext } from '@/store/globalContext';
import { PartnerFormProps } from '@/types';
import { formatBytes } from '@/utils/formatBytes';
import { useContext } from 'react';

export const PartnerForm = ({
  handleSubmit,
  formData,
  isFormValid,
  errors,
  handleFieldChange,
}: PartnerFormProps) => {
  const { setAlertInfo } = useContext(GlobalContext);
  const maxFileSize = SETTINGS.fileSizeLimits.partnerLogo;

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
        handleFieldChange('file', file);
      }
    }
  };

  return (
    <>
      <div className='flex max-w-[1102px] justify-between py-[2.1rem]'>
        <div className='max-w-[1050px] flex-1 bg-base-dark'>
          <form
            className='flex flex-wrap gap-[2.5rem] py-5 pl-4'
            onSubmit={handleSubmit}
          >
            <TextInputField
              title='Назва'
              inputType='text'
              errorText={errors.name}
              value={formData.name}
              onChange={handleNameChange}
              placeholder='Введіть назву'
            />
            <InputField
              title='Логотип'
              inputType='file'
              errorText={errors.file}
              accept='image/*'
              value={
                formData.file instanceof File
                  ? formData.file.name
                  : formData.file || ''
              }
              onChange={handleImageChange}
              placeholderText='Завантажте зображення'
            />
            <TextInputField
              title='Сайт партнера'
              inputType='text'
              errorText={errors.website}
              value={formData.homeUrl}
              onChange={handleWebsiteChange}
              placeholder='Додайте посилання'
            />
          </form>
        </div>
        <div className='mt-16 flex h-[4rem] w-[4rem] items-center justify-center rounded bg-neutral-50 p-2'>
          {isFormValid ? (
            <CheckIcon className='text-success-dark' />
          ) : (
            <CheckIcon className='text-neutral-100' />
          )}
        </div>
      </div>
    </>
  );
};
