import {
  ChangeEvent,
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
  useContext,
} from 'react';

import {
  DateIcon,
  TranslatorIcon,
  UploadIcon,
} from '@/components/common/icons';
import EyeClosed from '@/components/common/icons/EyeClosed';
import EyeOpen from '@/components/common/icons/EyeOpen';
import { GlobalContext } from '@/store/globalContext';
import { formatBytes } from '@/utils/formatBytes';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
  placeholderText?: string;
  iconClickHandler?: () => void;
  //icon?: ReactNode;
  //enableTranslator?: boolean;
  forwardedRef?: ForwardedRef<HTMLInputElement>;
  setValue: any;
  inputType?: any;
  maxSize?: number;
  name: string;
}

const InputField = ({
  title,
  errorText,
  placeholderText,
  value,
  setValue,
  inputType = 'text',
  maxSize = 1000,
  iconClickHandler,
  //icon,
  //enableTranslator,
  //forwardedRef,
  name,
  ...rest
}: InputFieldProps) => {
  let icon: ReactNode;
  let type: string;
  let isIconActive = true;
  let isTranslateShow = false;
  const { setAlertInfo } = useContext(GlobalContext);

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
      isIconActive = false;
      isTranslateShow = true;
      icon = <p className="text-[2rem] font-semibold">EN</p>;
      break;

    case 'ua':
      type = 'text';
      isIconActive = false;
      isTranslateShow = true;
      icon = <p className="text-[2rem] font-semibold">UA</p>;
      break;

    case 'pl':
      type = 'text';
      isIconActive = false;
      isTranslateShow = true;
      icon = <p className="text-[2rem] font-semibold">PL</p>;
      break;

    case 'date':
      type = 'date';
      icon = <DateIcon />;
      break;

    default:
      type = 'text';
      isIconActive = false;
      icon = null;
      break;
  }

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    switch (type) {
      case 'file':
        {
          const files = e.currentTarget.files;
          if (files && files[0].size <= maxSize) {
            setValue(files[0]);
          } else {
            setValue(null);
          }
          if (files && files[0].size >= maxSize)
            setAlertInfo({
              state: 'error',
              title: 'Перевищення розміру файлу',
              textInfo: `Максимальний розмір файлу не повинен перевищувати ${formatBytes(
                maxSize
              )}`,
            });
        }
        break;

      default:
        {
          setValue(e.currentTarget.value);
        }
        break;
    }
  };

  return (
    <div
      className={`relative mt-[2.8rem] w-full max-w-[32.6rem]
      ${errorText ? 'text-critic-light' : ''} `}
    >
      {title && <h4 className="absolute -top-[2.8rem]">{title}</h4>}

      {errorText && (
        <span className="absolute -bottom-[2.2rem] text-[1.2rem]">
          {errorText}
        </span>
      )}
      <div className={`${''} `}>
        <div
          className={`absolute right-[0rem] top-[0rem] h-full w-full disabled:text-neutral-300  `}
        >
          <label
            htmlFor={name}
            className="absolute right-[0.8rem] flex h-full items-center "
          >
            {icon && (
              <button
                className={`${isIconActive ? `` : ' text-neutral-300'} `}
                onClick={iconClickHandler}
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
            className={`${
              /* isIconActive ? 'cursor-pointer' : 'cursor-auto'*/ ''
            } h-full w-full rounded-[0.4rem] border border-neutral-300 outline-0 placeholder:text-neutral-300 focus:outline-neutral-300 ${
              type === 'file' ? 'opacity-0' : ''
            } ${icon ? 'py-[0.8rem] pl-[0.8rem] pr-[4.7rem]' : 'p-[0.8rem]'}`}
            onChange={inputChangeHandler}
            placeholder={placeholderText}
            //title={value || placeholderText} FixIt
            type={type}
            {...rest}
          />
        </div>
        <div
          //ref={forwardedRef}
          className={`
        h-full w-full  overflow-hidden rounded-[0.4rem] border
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

export { InputField };
