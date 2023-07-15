'use client';

import { useState } from 'react';
import { InputField, InputFieldProps } from './InputField';

export const PasswordInput = ({ ...rest }: InputFieldProps) => {
  const [inputType, setInputType] = useState<
    'password-open' | 'password-close'
  >('password-close');

  const iconClickHandler = () => {
    setInputType((prev) =>
      prev === 'password-open' ? 'password-close' : 'password-open'
    );
  };

  return (
    <InputField
      iconClickHandler={iconClickHandler}
      inputType={inputType}
      {...rest}
    />
  );
};
