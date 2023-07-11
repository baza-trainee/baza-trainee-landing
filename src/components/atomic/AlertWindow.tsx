/* Code generated with AutoHTML Plugin for Figma */
//import './StateInfo.css';

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
  state = 'info',
  ...props
}: IStateInfoProps): React.JSX.Element => {
  const options = {
    info: { color: 'light-mode-primaryblue', icon: <InfoIcon /> },
    error: { color: 'critic-light', icon: <ErrorIcon /> },
    success: { color: 'light-mode-primaryblue', icon: <SuccessIcon /> },
    warning: { color: 'light-mode-primaryblue', icon: <WarningIcon /> },
    submit: { color: 'light-mode-primaryblue', icon: <SubmitIcon /> },
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        className={`flex w-[38.7rem] flex-col  items-center justify-center rounded-md border border-solid border-${options[state].color} bg-white p-[2.4rem]`}
      >
        <div className="flex w-full justify-between">
          {React.cloneElement(options[state].icon, {
            className: `fill-${options[state].color}`,
          })}
          <div className="w-[30rem]">
            <div
              className={`text text-left text-[2.2rem] font-semibold text-${options[state].color}`}
            >
              Інформація
            </div>
            <div
              className=" mt-[1.2rem] text-left text-[1.6rem] font-normal leading-[3.2rem] text-dark-gray"
              style={{
                font: "var(--regular-16-px-text, 400 16px/32px 'Exo 2', sans-serif)",
              }}
            >
              Якась додаткова інформація :)
            </div>
          </div>
        </div>
        <div className="mt-[1.6rem]">dsfsdf</div>
      </div>
    </div>
  );
};
