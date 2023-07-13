import { TranslatorIcon, TranslatorIcon2 } from '@/components/common/icons';
import { ReactNode } from 'react';

interface InputFieldProps {
  label?: string;
  errorText?: string;
  type?: string;
  iconClickHandler?: () => void;
  icon?: ReactNode;
  enableTranslator?: boolean;
}

const InputField = ({
  label,
  errorText,
  type = 'text',
  iconClickHandler,
  icon,
  enableTranslator,
  ...rest
}: InputFieldProps) => {
  return (
    <div
      className={`relative mb-[2.2rem] mt-[2.8rem] max-w-[32.6rem]
      ${errorText && 'text-critic-light'}`}
    >
      {label && <label className="absolute -top-[2.8rem]">{label}</label>}

      {/* Without conditional rendering */}
      <span className="absolute -bottom-[2.2rem] text-[1.2rem]">
        {errorText}
      </span>

      <input
        className={`
        h-[4rem] w-full rounded-[0.4rem] border
        ${icon ? 'py-[0.8rem] pl-[0.8rem] pr-[4.7rem]' : 'p-[0.8rem]'}
        ${
          errorText
            ? 'border-critic-light caret-critic-light focus:outline-critic-light'
            : 'border-neutral-300 focus:outline-neutral-300'
        }
        `}
        type={type}
        {...rest}
      />

      {icon && (
        <button
          className="absolute right-[0.8rem] top-[0.8rem] text-neutral-300"
          onClick={iconClickHandler}
          disabled={!iconClickHandler}
        >
          {icon}
        </button>
      )}

      {enableTranslator && (
        <button className="absolute -top-12 right-[0.5rem] flex text-neutral-300">
          <TranslatorIcon />
          {/* <TranslatorIcon2 /> */}
        </button>
      )}
    </div>
  );
};

InputField.displayName = 'InputField';

export { InputField };
