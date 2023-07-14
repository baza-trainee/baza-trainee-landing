'use client';

import { useRef } from 'react';

import { UploadIcon } from '@/components/common/icons';
import { InputField } from './InputField';

export const FileInput = ({ ...rest }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlerClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <InputField
      forwardedRef={fileInputRef}
      type="file"
      iconClickHandler={handlerClick}
      readOnly
      icon={<UploadIcon />}
      {...rest}
    />
  );
};
