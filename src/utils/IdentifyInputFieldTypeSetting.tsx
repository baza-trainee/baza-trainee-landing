import { ReactNode } from 'react';

import {
  DateIcon,
  EyeClosed,
  EyeOpen,
  PenIcon,
  UploadIcon,
} from '@/components/common/icons';

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

    case 'uk':
      type = 'text';
      isIconActive = false;
      isTranslateShow = false;
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

    case 'pen':
      type = 'text';
      isIconActive = false;
      icon = <PenIcon />;
      break;

    default:
      type = 'text';
      isIconActive = false;
      icon = null;
      break;
  }

  return { icon, type, isIconActive, isTranslateShow };
};
