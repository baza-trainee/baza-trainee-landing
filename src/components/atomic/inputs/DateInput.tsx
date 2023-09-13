'use client';

import {
  ChangeEvent,
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from 'react';

import { formatDate } from '@/utils/formatDate';
import { DateIcon } from '@/components/common/icons';

interface DateInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
  translateValue?: string;
  placeholder?: string;
  setTranslatedValue?: (_data: string, _name: string) => void;
}

const DateInputRaw = (
  { title, errorText, value = '', placeholder, ...rest }: DateInputFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [date, setDate] = useState(value);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const inputWrapperClasses = `
    relative w-full max-w-[32.6rem] ${errorText ? 'text-critic-light' : ''}
  `;

  const inputContainerClasses = `
    mb-8 mt-[2.8rem] h-16 w-full overflow-hidden rounded-[0.4rem] border
    py-[0.8rem] pl-[0.8rem] pr-[4.7rem] outline-0 ${
      date ? '' : errorText ? 'text-critic-light' : 'text-neutral-300'
    }
     ${
       errorText
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
            ref={ref}
            className="calendar-picker-icon absolute right-0 top-0 h-full w-full opacity-0"
            type="date"
            // value={inputValue}
            onInput={handleInput}
          />
          <DateIcon
            className={errorText ? 'text-critic-light' : 'text-neutral-800'}
          />
        </div>

        {/* {rest.defaultValue
          ? formatDate(rest.defaultValue as string, 'spelled', 'ua')
          : placeholder} */}
        {date ? formatDate(date as string, 'spelled', 'ua') : placeholder}
      </div>

      {!!errorText && (
        <span className="absolute bottom-0 left-0 text-[1.2rem]">
          {errorText}
        </span>
      )}
    </div>
  );
};

export const DateInput = forwardRef(DateInputRaw);
