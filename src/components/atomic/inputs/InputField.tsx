'use client';

import EyeClosed from '@/components/common/icons/EyeClosed';
import EyeOpen from '@/components/common/icons/EyeOpen';
import { ReactElement, useEffect, useState } from 'react';

export const InputField = ({
  label = 'Input label',
  errorText = '',
  type = 'text',
  ...rest
}) => {
  const [inputType, setInputType] = useState<string>(type);
  const [icon, setIcon] = useState<ReactElement | null>(null);

  const iconClickHandler = () => {
    if (type === 'password') {
      setInputType((prev) => (prev === 'password' ? 'text' : 'password'));
    }
  };

  useEffect(() => {
    const iconSelector = () =>
      inputType === 'password' ? <EyeOpen /> : <EyeClosed />;

    type === 'password' && setIcon(iconSelector);
  }, [inputType, type]);

  return (
    <div
      className={`relative w-[32.6rem] border ${
        errorText && 'text-critic-light caret-critic-light'
      }`}
    >
      <p className="">{label}</p>

      <div
        className={`relative my-[0.4rem] flex rounded-[0.4rem] border ${
          errorText && 'border-critic-light'
        }`}
      >
        <input
          // type={inputType}
          type=""
          className={`h-[14rem] w-full rounded-[0.4rem] bg-white py-[1.5rem] pl-[0.8rem] pr-[4.7rem]`}
          {...rest}
        />

        <div
          className="absolute right-[0.8rem] top-[0.8rem] h-16 w-16 border"
          onClick={iconClickHandler}
        >
          {icon}
        </div>
      </div>

      <p className="text-[1.2rem]">{errorText || '\u00A0'}</p>
    </div>
  );
};
