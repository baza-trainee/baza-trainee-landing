import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  MouseEventHandler,
  useId,
} from 'react';

import { IdentifyInputFieldTypeSetting } from '@/utils/IdentifyInputFieldTypeSetting';

import { TranslatorIcon } from '@/components/common/icons';

interface TextAreaFieldProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
  errorText?: string;
  inputType?: string;
  translateValue?: string;
  setTranslatedValue?: (_data: string, _name: string) => void;
  handleTranslate?: () => void;
}

const TextareaField = (
  {
    title,
    errorText,
    inputType = 'text',
    value = '',
    handleTranslate,
    ...rest
  }: TextAreaFieldProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) => {
  const id = useId();
  const { icon, isIconActive, isTranslateShow } =
    IdentifyInputFieldTypeSetting(inputType);

  const onClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    handleTranslate && handleTranslate();
  };

  const inputClassNames = `
    h-full  w-full overflow-hidden rounded-[0.4rem] border outline-0 placeholder:text-neutral-300
    ${icon ? 'py-[0.5rem] pl-[0.5rem]' : 'p-[0.5rem]'}
    ${
      errorText
        ? 'border-critic-light caret-critic-light outline-critic-light focus:outline-critic-light'
        : 'border-neutral-300 focus:outline-neutral-300'
    }
  `;

  return (
    <div
      className={`relative  w-full max-w-[32.6rem] ${
        errorText ? 'text-critic-light' : ''
      }`}
    >
      {title && <h4 className="absolute left-0 top-0">{title}</h4>}

      <div className="relative mb-8 mt-[2.8rem] h-48 w-full disabled:text-neutral-300">
        <label
          htmlFor={id}
          className="absolute right-[0.5rem] top-[0.5rem] flex items-center"
        >
          {icon && (
            <div className={`${isIconActive ? '' : 'text-neutral-300'}`}>
              {!value && icon}
            </div>
          )}
        </label>

        <textarea
          {...rest}
          id={id}
          className={inputClassNames}
          value={value}
          cols={12}
          rows={12}
        />
      </div>

      {errorText && (
        <span className="absolute bottom-0 left-0 text-[1.2rem]">
          {errorText}
        </span>
      )}

      {isTranslateShow && (
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

export const TextAreaField = forwardRef(TextareaField);
