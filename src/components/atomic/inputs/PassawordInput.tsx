'use client';

import EyeClosed from '@/components/common/icons/EyeClosed';
import EyeOpen from '@/components/common/icons/EyeOpen';
import { ReactElement, useEffect, useState } from 'react';

export const PassawordInput = ({
  title = '',
  errorText = 'sdfsdf',
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
    <div className="w-[32.6rem]">
 
    </div>
  );
};
