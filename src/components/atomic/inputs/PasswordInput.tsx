'use client';

import { useState } from 'react';
import { InputField } from './InputField';
import { Eyes } from '@/components/common/icons';

export const PasswordInput = ({ ...rest }) => {
  const [inputType, setInputType] = useState<'text' | 'password'>('password');

  const iconClickHandler = () => {
    setInputType((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  return (
    <InputField
      icon={<Eyes open={inputType !== 'password'} />}
      type={inputType}
      iconClickHandler={iconClickHandler}
      {...rest}
    />
  );
};
