import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  MouseEventHandler,
  useId,
} from 'react';

import { TranslatorIcon } from '@/components/common/icons';
import { IdentifyInputFieldTypeSetting } from '@/utils/IdentifyInputFieldTypeSetting';

interface TextInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
  inputType?: string;
  translateValue?: string;
  handleTranslate?: () => void;
  setTranslatedValue?: (_data: string, _name: string) => void;
}

const InputField = (
  {
    title,
    errorText,
    inputType = 'text',
    translateValue = '',
    value = '',
    handleTranslate,
    setTranslatedValue,
    ...rest
  }: TextInputFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
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

  const onClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    handleTranslate && handleTranslate();
  };

  return (
    <div
      className={`relative  w-full max-w-[32.6rem] ${
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

        <input
          {...rest}
          id={id}
          className={inputClassNames}
          type={type}
          value={value}
        />
      </div>

      {errorText && (
        <span className="absolute bottom-0 left-0 text-[1.2rem]">
          {errorText}
        </span>
      )}

      {isTranslateShow && (
        // <Translator
        //   translateValue={translateValue}
        //   setTranslatedValue={setTranslatedValue}
        //   fieldName={rest.name}
        //   lang={inputType}
        // />
        <button
          className="absolute right-[0.5rem] top-0 text-neutral-300"
          onClick={onClick}
        >
          <TranslatorIcon />
        </button>
      )}
    </div>
  );
};

export const TextInputField = forwardRef(InputField);
