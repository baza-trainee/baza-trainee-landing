'use client';

import { Controller } from 'react-hook-form';

import {
  CheckboxInput,
  ComplexityInput,
  DateInput,
  FileInput,
  FormBtns,
  TextInputField,
} from '@/components/atomic';

import { useProjectFormContext } from './ProjectFormProvider';
import { ProjectPreview } from './ProjectPreview';
import { projectValidateOptions } from './validateOptions';

const rowStyle = 'flex gap-10 rounded-md bg-base-dark px-5 py-10 shadow-md';

const ProjectForm = () => {
  const {
    isEditMode,
    register,
    handleSubmit,
    onSubmit,
    cancelAction,
    control,
    errors,
  } = useProjectFormContext();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-[109rem] grid-cols-3 gap-9">
        <div className={`${rowStyle} col-span-3`}>
          <Controller
            name="nameUk"
            rules={projectValidateOptions.name}
            control={control}
            render={({ field }) => (
              <TextInputField
                {...field}
                inputType="uk"
                title="Назва проєкту"
                placeholder="Введіть назву"
                errorText={errors.nameUk?.message}
              />
            )}
          />
          <Controller
            name="nameEn"
            rules={projectValidateOptions.name}
            control={control}
            render={({ field }) => (
              <TextInputField
                {...field}
                inputType="en"
                errorText={errors.nameEn?.message}
              />
            )}
          />
          <Controller
            name="namePl"
            rules={projectValidateOptions.name}
            control={control}
            render={({ field }) => (
              <TextInputField
                {...field}
                inputType="pl"
                errorText={errors.namePl?.message}
              />
            )}
          />
        </div>

        <div className={`${rowStyle} col-span-2`}>
          <Controller
            name="creationDate"
            rules={{ required: 'Оберіть дату' }}
            control={control}
            render={({ field }) => (
              <DateInput
                {...field}
                title="Старт проєкту"
                placeholder="Оберіть дату"
                errorText={errors.creationDate?.message}
              />
            )}
          />
          <Controller
            name="launchDate"
            control={control}
            render={({ field }) => (
              <DateInput
                {...field}
                title="Дата завершення проєкту"
                placeholder="Оберіть дату"
              />
            )}
          />
        </div>

        <div className="col-span-1 row-span-3 shadow-md">
          <ProjectPreview />
        </div>

        <div className={`${rowStyle} col-span-2`}>
          <Controller
            name="isTeamRequired"
            control={control}
            render={({ field }) => (
              <CheckboxInput
                {...field}
                placeholder="Формування команди"
                title="Стан"
              />
            )}
          />
          <Controller
            name="complexity"
            control={control}
            render={({ field }) => (
              <ComplexityInput {...field} title="Оберіть складність проєкту" />
            )}
          />
        </div>

        <div className={`${rowStyle} col-span-2`}>
          <Controller
            name="deployUrl"
            control={control}
            render={({ field }) => (
              <TextInputField
                {...field}
                inputType="uk"
                title="Адреса сайту"
                placeholder="Вкажіть адресу сайту"
              />
            )}
          />

          <FileInput
            {...register('projectImg', {
              ...projectValidateOptions.img,
              required: isEditMode ? false : 'Додайте зображення проєкту',
            })}
            accept="image/*"
            placeholder="Завантажте зображення"
            title="Обкладинка"
            errorText={errors.projectImg?.message}
          />
        </div>
      </div>

      <FormBtns isEditMode={isEditMode} cancelAction={cancelAction} />
    </form>
  );
};

export { ProjectForm };

