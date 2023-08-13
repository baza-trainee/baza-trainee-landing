import { TranslatorIcon } from '@/components/common/icons';
import { IdentifyInputFieldTypeSetting } from '@/utils/IdentifyInputFieldTypeSetting';
import { InputHTMLAttributes, useId } from 'react';

interface TextInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
  inputType?: string;
}

export const TextInputField = ({
  title,
  errorText,
  inputType = 'text',
  ...rest
}: TextInputFieldProps) => {
  const id = useId();
  const { icon, type, isIconActive, isTranslateShow } =
    IdentifyInputFieldTypeSetting(inputType);

  const inputClassNames = `
    h-full w-full overflow-hidden rounded-[0.4rem] border outline-0 placeholder:text-neutral-300
    ${icon ? 'py-[0.8rem] pl-[0.8rem] pr-[4.7rem]' : 'p-[0.8rem]'}
    ${
      errorText
        ? 'border-critic-light caret-critic-light outline-critic-light focus:outline-critic-light'
        : 'border-neutral-300 focus:outline-neutral-300'
    }
  `;

  return (
    <div
      className={`relative w-full max-w-[32.6rem] ${
        errorText ? 'text-critic-light' : ''
      }`}
    >
      {title && <h4 className="absolute left-0 top-0">{title}</h4>}

      <div className="relative mb-8 mt-[2.8rem] h-16 w-full disabled:text-neutral-300">
        <label
          htmlFor={id}
          className="absolute right-[0.8rem] flex h-full items-center"
        >
          {icon && (
            <div className={`${isIconActive ? '' : 'text-neutral-300'}`}>
              {icon}
            </div>
          )}
        </label>
        <input id={id} className={inputClassNames} type={type} {...rest} />
      </div>

      {errorText && (
        <span className="absolute bottom-0 left-0 text-[1.2rem]">
          {errorText}
        </span>
      )}

      {isTranslateShow && (
        <button className="absolute -top-12 right-[0.5rem] flex text-neutral-300">
          <TranslatorIcon />
        </button>
      )}
    </div>
  );
};
