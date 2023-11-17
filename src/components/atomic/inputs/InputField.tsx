import { InputHTMLAttributes, useId } from 'react';

import { IdentifyInputFieldTypeSetting } from '@/utils/IdentifyInputFieldTypeSetting';

import { TranslatorIcon } from '@/components/common/icons';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
  placeholderText?: string;
  iconClickHandler?: () => void;
  inputType?: string;
}

export const InputField = ({
  title,
  errorText,
  placeholderText,
  value,
  inputType = 'text',
  iconClickHandler,
  ...rest
}: InputFieldProps) => {
  const id = useId();
  const { icon, type, isIconActive, isTranslateShow } =
    IdentifyInputFieldTypeSetting(inputType);

  return (
    <div
      className={`relative mt-[2.8rem] w-full max-w-[32.6rem] ${
        errorText ? 'text-critic-light' : ''
      }`}
    >
      {title && <h4 className="absolute -top-[2.8rem]">{title}</h4>}
      {errorText && (
        <span className="absolute -bottom-[2.2rem] text-[1.2rem]">
          {errorText}
        </span>
      )}
      <div>
        <div className="absolute right-[0rem] top-[0rem] w-full disabled:text-neutral-300">
          <label
            htmlFor={id}
            className="absolute right-[0.8rem] flex h-full items-center"
          >
            {icon && (
              <button
                className={`${isIconActive ? '' : ' text-neutral-300'} `}
                onClick={iconClickHandler}
                type="button"
              >
                {icon}
              </button>
            )}
          </label>
          <input
            id={id}
            className={` w-full rounded-[0.4rem] border border-neutral-300 outline-0 placeholder:text-neutral-300 focus:outline-neutral-300 ${
              type === 'file' ? 'opacity-0' : ''
            } ${icon ? 'py-[0.8rem] pl-[0.8rem] pr-[4.7rem]' : 'p-[0.8rem]'}`}
            placeholder={placeholderText}
            title={title}
            value={value}
            type={type}
            {...rest}
          />
        </div>
        <div
          className={`
            h-full w-full overflow-hidden rounded-[0.4rem] border
            ${icon ? 'mr-[4.7rem] py-[0.8rem] pl-[0.8rem]' : 'p-[0.8rem]'}
            ${
              errorText
                ? 'border-critic-light caret-critic-light focus:outline-critic-light'
                : `border-neutral-300 focus:outline-neutral-300 ${
                    value ? '' : 'text-neutral-300'
                  }`
            }
          `}
        >
          {value || placeholderText}
        </div>
      </div>
      {isTranslateShow && (
        <button className="absolute -top-12 right-[0.5rem] flex text-neutral-300">
          <TranslatorIcon />
        </button>
      )}
    </div>
  );
};

InputField.displayName = 'InputField';
