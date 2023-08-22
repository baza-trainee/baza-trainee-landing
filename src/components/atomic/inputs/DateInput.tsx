import { DateIcon } from '@/components/common/icons';
import { InputHTMLAttributes } from 'react';

interface DateInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
  value: string;
  translateValue?: string;
  name?: string;
  placeholder?: string;
  setTranslatedValue?: (_data: string, _name: string) => void;
}

export const DateInput = ({
  title,
  errorText,
  name,
  value,
  placeholder,
  ...rest
}: DateInputFieldProps) => {
  const inputWrapperClasses = `
    relative w-full max-w-[32.6rem] ${errorText ? 'text-critic-light' : ''}
  `;

  const inputContainerClasses = `
    mb-8 mt-[2.8rem] h-16 w-full overflow-hidden rounded-[0.4rem] border 
    py-[0.8rem] pl-[0.8rem] pr-[4.7rem] outline-0 ${
      value ? '' : 'text-neutral-300'
    }
     ${
       errorText
         ? 'border-critic-light caret-critic-light outline-critic-light focus:outline-critic-light'
         : 'border-neutral-300 focus:outline-neutral-300'
     }
  `;

  return (
    <div className={inputWrapperClasses}>
      {!!title && <h4 className="absolute left-0 top-0">{title}</h4>}

      <div className={inputContainerClasses}>
        <div className=" absolute right-[0.8rem] ">
          <input
            className="calendar-picker-icon absolute right-0 top-0 h-full w-full opacity-0"
            type="date"
            name={name}
            value={value}
            {...rest}
          />
          <DateIcon className="text-neutral-800" />
        </div>
        {value ? value : placeholder}
      </div>

      {!!errorText && (
        <span className="absolute bottom-0 left-0 text-[1.2rem]">
          {errorText}
        </span>
      )}
    </div>
  );
};
