'use client';

import { InputHTMLAttributes, useId } from 'react';
import {
  DeepMap,
  FieldError,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

type TProps<T extends FieldValues> = InputHTMLAttributes<HTMLInputElement> &
  UseControllerProps<T> & {
    title?: string;
  };

export const CheckboxInput = <T extends FieldValues>({
  title,
  placeholder,
  control,
  name,
  rules,
  ...rest
}: TProps<T>) => {
  const id = useId();
  const { field, formState } = useController<T>({ name, control, rules });

  const errorMessage = (
    formState.errors[name] as DeepMap<FieldValues, FieldError>
  )?.message;

  return (
    <div
      className={`peer relative w-full max-w-[32.6rem] ${
        errorMessage ? 'text-critic-light' : ''
      }`}
    >
      {title && (
        <label htmlFor={id} className="absolute left-0 top-0">
          {title}
        </label>
      )}

      <div className="relative mb-8 mt-[2.8rem] flex h-16 w-full items-center justify-between p-[0.8rem]">
        <label htmlFor={id}>{placeholder}</label>
        <input
          {...rest}
          {...field}
          checked={!!field.value}
          id={id}
          type="checkbox"
          className={`h-10 w-10 p-[0.8rem] accent-dark ${
            errorMessage ? 'focus:outline-critic-light' : ''
          }`}
        />
      </div>

      {errorMessage && (
        <span className="absolute bottom-0 left-0 text-[1.2rem]">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
