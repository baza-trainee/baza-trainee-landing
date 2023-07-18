import {
  DateIcon,
  EyeClosed,
  EyeOpen,
  UploadIcon,
} from '@/components/common/icons';
import { ReactNode } from 'react';

export const IdentifyInputFieldTypeSetting = (inputType: string) => {
  let icon: ReactNode;
  let type: string;
  let isIconActive = true;
  let isTranslateShow = false;

  switch (inputType) {
    case 'file':
      type = 'file';
      icon = <UploadIcon />;
      break;

    case 'password-hide':
      type = 'password';
      icon = <EyeClosed />;
      break;

    case 'password-show':
      type = 'text';
      icon = <EyeOpen />;
      break;

    case 'en':
      type = 'text';
      isIconActive = false;
      isTranslateShow = true;
      icon = <p className="text-[2rem] font-semibold">EN</p>;
      break;

    case 'ua':
      type = 'text';
      isIconActive = false;
      isTranslateShow = true;
      icon = <p className="text-[2rem] font-semibold">UA</p>;
      break;

    case 'pl':
      type = 'text';
      isIconActive = false;
      isTranslateShow = true;
      icon = <p className="text-[2rem] font-semibold">PL</p>;
      break;

    case 'date':
      type = 'date';
      icon = <DateIcon />;
      break;

    default:
      type = 'text';
      isIconActive = false;
      icon = null;
      break;
  }

  return { icon, type, isIconActive, isTranslateShow };
};
