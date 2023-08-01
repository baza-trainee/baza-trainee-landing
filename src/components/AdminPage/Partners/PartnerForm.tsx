import { InputField } from '@/components/atomic';
import { CheckIcon } from '@/components/common/icons/CheckIcon';
import { PartnerFormProps } from '@/types';

export const PartnerForm = ({
  handleSubmit,
  formData,
  isFormValid,
  handleFieldChange,
}: PartnerFormProps) => {
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFieldChange('name', event.target.value);
  };

  const handleWebsiteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFieldChange('homeUrl', event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const imageFile = event.target.files[0];
      handleFieldChange('file', imageFile);
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
            <label htmlFor='' className='flex flex-col'>
              Назва
              <input
                type='text'
                value={formData.name}
                placeholder='Введіть назву'
                onChange={handleNameChange}
                className='mt-2 w-full rounded-[0.4rem] border border-neutral-300 py-[0.8rem] pl-[0.8rem] pr-[11.7rem] outline-0 placeholder:text-neutral-300 focus:outline-neutral-300'
              />
            </label>
            <InputField
              title='Логотип'
              inputType='file'
              accept='image/*'
              value={formData['file']?.name}
              onChange={handleImageChange}
              placeholderText='Завантажте зображення'
            />
            <label htmlFor='' className='flex flex-col'>
              Сайт партнера
              <input
                type='text'
                value={formData.homeUrl}
                placeholder='Додайте посилання'
                onChange={handleWebsiteChange}
                className='mt-2 w-full rounded-[0.4rem] border border-neutral-300 py-[0.8rem] pl-[0.8rem] pr-[11.7rem] outline-0 placeholder:text-neutral-300 focus:outline-neutral-300'
              />
            </label>
          </form>
        </div>
        <div className='mt-16 flex h-[4rem] w-[4rem] items-center justify-center rounded bg-neutral-50 p-2'>
          {isFormValid ? <CheckIcon fill={'#1CD41F'} /> : <CheckIcon />}
        </div>
      </div>
    </>
  );
};
