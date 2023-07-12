import React from 'react';
import {
  ErrorIcon,
  InfoIcon,
  SubmitIcon,
  SuccessIcon,
  WarningIcon,
} from '../common/icons';

export interface IStateInfoProps {
  state?: 'error' | 'info' | 'success' | 'warning' | 'submit';
}

const options = {
  info: {
    text: 'text-blue',
    border: 'border-blue',
    icon: InfoIcon,
  },
  error: {
    text: 'text-critic-light',
    border: 'border-critic-light',
    icon: ErrorIcon,
  },
  success: {
    text: 'text-success-dark',
    border: 'border-success-dark',
    icon: SuccessIcon,
  },
  warning: {
    text: 'text-yellow-800',
    border: 'border-yellow-800',
    icon: WarningIcon,
  },
  submit: { text: 'text-dark', border: 'border-dark', icon: SubmitIcon },
};

export const AlertWindow = ({
  state = 'error',
  ...props
}: IStateInfoProps): React.JSX.Element => {
  const { text, border, icon: IconComponent } = options[state];

  return (
    <div className="flex-center fixed inset-0">
      <div className={`relative w-[38.7rem] rounded-md border ${border} bg-white`}>
        <div className={`absolute left-[2.4rem] top-[2.4rem] h-[2.4rem] w-[2.4rem] ${text}`}>
          <IconComponent />
        </div>

        <div className="mb-[5.6rem] ml-[6.5rem] mr-[2.4rem] mt-[2.4rem] w-[30rem]">
          <div className={`text-[2.2rem] font-semibold ${text}`}>
            Інформація
          </div>

          <div className="text-dark-gray mt-[1.2rem] leading-[2.4rem]">
            Якась додаткова інформація :)
          </div>
        </div>

        <div className="absolute bottom-[2.4rem] left-1/2 -translate-x-1/2 text-[1.4rem]">
          <button>Кнопки</button>
        </div>
      </div>
    </div>
  );
};
