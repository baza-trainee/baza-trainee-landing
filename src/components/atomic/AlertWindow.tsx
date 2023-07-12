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

export const AlertWindow = ({
  state = 'error',
  ...props
}: IStateInfoProps): React.JSX.Element => {
  const options = {
    info: {
      color: 'blue',
      icon: InfoIcon,
    },
    error: {
      color: 'critic-light',
      icon: ErrorIcon,
    },
    success: {
      color: 'success-dark',
      icon: SuccessIcon,
    },
    warning: {
      color: 'yellow-800',
      icon: WarningIcon,
    },
    submit: {
      color: 'dark',
      icon: SubmitIcon,
    },
  };

  const IconComponent = options[state].icon;
  const textData = {
    border: `border-${options[state].color}`,
    fill: `fill-${options[state].color}`,
    textColor: `text-${options[state].color}`,
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        className={`flex w-[38.7rem] flex-col  items-center justify-center rounded-md border border-solid ${textData.border} bg-white p-[2.4rem]`}
      >
        <div className="flex w-full justify-between">
          <IconComponent className={`${textData.fill}`} />
          <div className="w-[30rem]">
            <div
              className={`text text-left text-[2.2rem] font-semibold ${textData.textColor}`}
            >
              Інформація
            </div>
            <div className=" text-dark-gray mt-[1.2rem] text-left text-[1.6rem] font-normal leading-[3.2rem]">
              Якась додаткова інформація :)
            </div>
          </div>
        </div>
        <div className="mt-[1.6rem]">Кнопки</div>
      </div>
    </div>
  );
};
