import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

import { UploadIcon } from '@/components/common/icons';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
}

export const InputRaw = (
  { title, errorText, ...rest }: IProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const inputWrapperClasses = `
  relative w-full max-w-[32.6rem] ${errorText ? 'text-critic-light' : ''}
  `;

  const inputContainerClasses = `
    mb-8 mt-[2.8rem] h-16 w-full rounded-[0.4rem] border flex p-[0.8rem] outline-0 gap-6
    ${errorText ? 'border-critic-light' : 'border-neutral-300'}
    `;

  return (
    <div className={inputWrapperClasses}>
      {!!title && <label className="absolute left-0 top-0">{title}</label>}

      <div className={inputContainerClasses}>
        <input
          {...rest}
          ref={ref}
          className={`w-full ${errorText ? 'outline-critic-light' : ''}`}
          type="file"
          id={title + 'file'}
        />

        <label htmlFor={title + 'file'}>
          <UploadIcon className={!errorText ? 'text-neutral-800' : ''} />
        </label>
      </div>

      {!!errorText && (
        <span className="absolute bottom-0 left-0 text-[1.2rem]">
          {errorText}
        </span>
      )}
    </div>
  );
};

export const FileInput = forwardRef(InputRaw);
