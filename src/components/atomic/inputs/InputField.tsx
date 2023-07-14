import {
  ChangeEvent,
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
} from 'react';

import { TranslatorIcon, UploadIcon } from '@/components/common/icons';
import EyeClosed from '@/components/common/icons/EyeClosed';
import EyeOpen from '@/components/common/icons/EyeOpen';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
  placeholderText?: string;
  iconClickHandler?: () => void;
  //icon?: ReactNode;
  enableTranslator?: boolean;
  forwardedRef?: ForwardedRef<HTMLInputElement>;
  setValue: any;
  inputType: any;
}

const InputField = ({
  title,
  errorText,
  placeholderText,
  value,
  setValue,
  inputType = 'text',
  //iconClickHandler,
  //icon,
  enableTranslator,
  //forwardedRef,
  name,
  ...rest
}: InputFieldProps) => {
  let icon: ReactNode;
  let type: string;

  switch (inputType) {
    case 'file':
      type = 'file';
      icon = <UploadIcon />;
      break;

    case 'password-close':
      type = 'password';
      icon = <EyeClosed />;
      break;

    case 'password-open':
      type = 'text';
      icon = <EyeOpen />;
      break;

    case 'en':
      type = 'text';
      icon = <UploadIcon />; //Change to right icon
      break;

    case 'ua':
      type = 'text';
      icon = <UploadIcon />; //Change to right icon
      break;

    case 'pl':
      type = 'text';
      icon = <UploadIcon />; //Change to right icon
      break;

    case 'calendar':
      type = 'date';
      icon = <UploadIcon />; //Change to right icon
      break;

    default:
      type = 'text';
      icon = <UploadIcon />; //Change to right icon
      break;
  }

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    switch (type) {
      case 'file':
        {
          e.currentTarget.files
            ? setValue(e.currentTarget.files[0])
            : setValue(null);
        }
        break;
      case 'text':
        {
          setValue(e.currentTarget.value);
        }
        break;

      default:
        break;
    }
  };

  return (
    <div
      className={`relative mb-[2.2rem] mt-[2.8rem] max-w-[32.6rem] 
      ${errorText ? 'text-critic-light' : ''} `}
    >
      {title && <h4 className="absolute -top-[2.8rem]">{title}</h4>}

      <span className="absolute -bottom-[2.2rem] text-[1.2rem]">
        {errorText}
      </span>
      <div>
        <div className="absolute right-[0rem] top-[0rem] h-full w-full disabled:text-neutral-300">
          <label htmlFor={name}>
            {icon && (
              <button
                className="absolute right-[0.8rem] top-[0.8rem] cursor-pointer disabled:text-neutral-300"
                //onClick={iconClickHandler}
                //disabled={!iconClickHandler}
              >
                {icon}
              </button>
            )}
          </label>

          <input
            id={name}
            //ref={forwardedRef}
            name={name || title}
            className={`h-full w-full rounded-[0.4rem] border border-neutral-300 outline-0 placeholder:text-neutral-300 focus:outline-neutral-300 ${
              type === 'file' ? 'opacity-0' : ''
            } ${icon ? 'py-[0.8rem] pl-[0.8rem] pr-[4.7rem]' : 'p-[0.8rem]'}`}
            onChange={inputChangeHandler}
            placeholder={placeholderText}
            //title={value || placeholderText} FixIt
            type={type}
          />
        </div>
        <div
          //ref={forwardedRef}
          className={`
        h-full w-full rounded-[0.4rem] border
        ${icon ? 'py-[0.8rem] pl-[0.8rem] pr-[4.7rem]' : 'p-[0.8rem]'}
        ${
          errorText
            ? 'border-critic-light caret-critic-light focus:outline-critic-light'
            : `border-neutral-300 focus:outline-neutral-300 ${
                value ? '' : 'text-neutral-300'
              }`
        }
        `}
          {...rest}
        >
          {value || placeholderText}
        </div>
      </div>
      {enableTranslator && (
        <button className="absolute -top-12 right-[0.5rem] flex text-neutral-300">
          <TranslatorIcon />
        </button>
      )}
    </div>
  );
};

InputField.displayName = 'InputField';

export { InputField };
