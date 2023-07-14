'use client';

import { useState } from 'react';

export const PasswordInput = ({ ...rest }) => {
  const [inputType, setInputType] = useState<'text' | 'password'>('password');

  const iconClickHandler = () => {
    setInputType((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  return null;
  /*   <InputField
      icon={<Eyes open={inputType !== 'password'} />}
      type={inputType}
      iconClickHandler={iconClickHandler}
      {...rest}
    />*/
};
