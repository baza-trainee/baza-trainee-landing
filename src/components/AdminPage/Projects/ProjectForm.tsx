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
  const { isEditMode, handleSubmit, onSubmit, cancelAction, control, errors } =
    useProjectFormContext();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-[109rem] grid-cols-3 gap-9">
        <div className={`${rowStyle} col-span-3`}>
          <Controller
            name="nameUk"
            rules={projectValidateOptions.fieldUk}
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
            rules={projectValidateOptions.fieldEn}
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
            rules={projectValidateOptions.fieldPl}
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
        <DateInput
            name="creationDate"
            rules={{ required: 'Оберіть дату' }}
            control={control}
            title="Старт проєкту"
            placeholder="Оберіть дату"
          />
          <DateInput
            name="launchDate"
            rules={projectValidateOptions.launchDate}
            control={control}
            title="Дата завершення проєкту"
            placeholder="Оберіть дату"
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
            rules={projectValidateOptions.deployUrl}
            control={control}
            render={({ field }) => (
              <TextInputField
                {...field}
                title="Адреса сайту"
                placeholder="Вкажіть адресу сайту"
                errorText={errors.deployUrl?.message}
              />
            )}
          />

          <FileInput
            name="projectImg"
            control={control}
            rules={{
              ...projectValidateOptions.img,
              required: isEditMode ? false : 'Додайте зображення проєкту',
            }}
            accept="image/*"
            placeholder="Завантажте зображення"
            title="Обкладинка"
          />
        </div>
      </div>

      <FormBtns {...{ isEditMode, cancelAction }} />
    </form>
  );
};

export { ProjectForm };
