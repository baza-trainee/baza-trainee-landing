'use client';

import { useState } from 'react';

import { InputField, InputFieldProps } from './InputField';

export const PasswordInput = ({ ...rest }: InputFieldProps) => {
  const [inputType, setInputType] = useState<'password-show' | 'password-hide'>(
    'password-hide'
  );

  const iconClickHandler = () => {
    setInputType((prev) =>
      prev === 'password-show' ? 'password-hide' : 'password-show'
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
