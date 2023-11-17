'use client';

import { InputHTMLAttributes } from 'react';
import {
  DeepMap,
  FieldError,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

import { formatDate } from '@/utils/formatDate';

import { DateIcon } from '@/components/common/icons';

type TProps<T extends FieldValues> = InputHTMLAttributes<HTMLInputElement> &
  UseControllerProps<T> & {
    title?: string;
    translateValue?: string;
    setTranslatedValue?: (_data: string, _name: string) => void;
  };

export const DateInput = <T extends FieldValues>({
  title,
  placeholder,
  control,
  name,
  rules,
  ...rest
}: TProps<T>) => {
  const { field, formState } = useController<T>({ name, control, rules });
  const value = field.value;

  const errorMessage = (
    formState.errors[name] as DeepMap<FieldValues, FieldError>
  )?.message;

  const inputWrapperClasses = `
    relative w-full max-w-[32.6rem] ${errorMessage ? 'text-critic-light' : ''}
  `;

  const inputContainerClasses = `
    mb-8 mt-[2.8rem] h-16 w-full overflow-hidden rounded-[0.4rem] border
    py-[0.8rem] pl-[0.8rem] pr-[4.7rem] outline-0 ${
      value ? '' : errorMessage ? 'text-critic-light' : 'text-neutral-300'
    }
     ${
       errorMessage
         ? 'border-critic-light caret-critic-light outline-critic-light focus:outline-critic-light'
         : 'border-neutral-300 focus:outline-neutral-300'
     }
  `;

  return (
    <div className={inputWrapperClasses}>
      {!!title && <label className="absolute left-0 top-0">{title}</label>}

      <div className={inputContainerClasses}>
        <div className="absolute right-[0.8rem]">
          <input
            {...rest}
            {...field}
            className="calendar-picker-icon absolute right-0 top-0 h-full w-full opacity-0"
            type="date"
          />

          <DateIcon
            className={errorMessage ? 'text-critic-light' : 'text-neutral-800'}
          />
        </div>

        {value ? formatDate(value as string, 'spelled', 'ua') : placeholder}
      </div>

      {!!errorMessage && (
        <span className="absolute bottom-0 left-0 text-[1.2rem]">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
