'use client';

import { useRef } from 'react';

export const FileInput = ({ ...rest }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlerClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return null;
  /*    <InputField
      forwardedRef={fileInputRef}
      type="file"
      iconClickHandler={handlerClick}
      readOnly
      icon={<UploadIcon />}
      {...rest}
    />*/
};
