'use client';

import { ChangeEvent, InputHTMLAttributes } from 'react';

import {
  DeepMap,
  FieldError,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

import { UploadIcon } from '@/components/common/icons';

type TProps<T extends FieldValues> = InputHTMLAttributes<HTMLInputElement> &
  UseControllerProps<T> & { title?: string };

export const FileInput = <T extends FieldValues>({
  title,
  placeholder,
  control,
  name,
  rules,
  ...rest
}: TProps<T>) => {
  const { field, formState } = useController<T>({ name, control, rules });
  const fileName = field.value && field.value[0]?.name;

  const errorMessage = (
    formState.errors[name] as DeepMap<FieldValues, FieldError>
  )?.message;

  const inputWrapperStyle = `relative w-full max-w-[32.6rem] ${
    errorMessage ? 'text-critic-light' : ''
  }`;

  const inputContainerStyle = `mb-8 mt-[2.8rem] flex h-16 w-full gap-6 rounded-[0.4rem] border p-[0.8rem] cursor-pointer ${
    errorMessage ? 'border-critic-light' : 'border-neutral-300'
  }`;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      field.onChange(e.target.files);
    }
  };

  return (
    <div className={inputWrapperStyle}>
      {!!title && <label className="absolute left-0 top-0">{title}</label>}

      <label htmlFor={title + 'file'}>
        <div className={inputContainerStyle}>
          <span className="w-full truncate">{fileName || placeholder}</span>

          <UploadIcon className={!errorMessage ? 'text-neutral-800' : ''} />
        </div>
      </label>

      <input
        {...rest}
        ref={field.ref}
        type="file"
        id={title + 'file'}
        hidden
        onChange={handleChange}
      />

      {!!errorMessage && (
        <span className="absolute bottom-0 left-0 text-[1.2rem]">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
