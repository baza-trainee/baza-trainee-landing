'use client';

import {
  forwardRef,
  ForwardedRef,
  InputHTMLAttributes,
  useState,
  ChangeEvent,
} from 'react';

import { UploadIcon } from '@/components/common/icons';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
}

const InputRaw = (
  { title, errorText, placeholder, ...rest }: IProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [fileName, setFileName] = useState<string>();

  const inputWrapperClasses = `relative w-full max-w-[32.6rem] ${
    errorText ? 'text-critic-light' : ''
  }`;

  const inputContainerClasses = `mb-8 mt-[2.8rem] flex h-16 w-full gap-6 rounded-[0.4rem] border p-[0.8rem] cursor-pointer ${
    errorText ? 'border-critic-light' : 'border-neutral-300'
  }`;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFileName(e.target.files[0]?.name);
    }
  };

  return (
    <div className={inputWrapperClasses}>
      {!!title && <label className="absolute left-0 top-0">{title}</label>}

      <label htmlFor={title + 'file'}>
        <div className={inputContainerClasses}>
          <span className="w-full overflow-hidden text-ellipsis">
            {fileName || placeholder}
          </span>

          <UploadIcon className={!errorText ? 'text-neutral-800' : ''} />
        </div>
      </label>

      <input
        {...rest}
        ref={ref}
        type="file"
        id={title + 'file'}
        hidden
        onInput={handleChange}
      />

      {!!errorText && (
        <span className="absolute bottom-0 left-0 text-[1.2rem]">
          {errorText}
        </span>
      )}
    </div>
  );
};

export const FileInput = forwardRef(InputRaw);
