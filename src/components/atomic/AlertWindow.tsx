'use client';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import {
  CancelIcon,
  ErrorIcon,
  InfoIcon,
  OkIcon,
  SuccessIcon,
  WarningIcon,
} from '../common/icons';

const options = {
  info: { color: 'blue', icon: InfoIcon, cancel: false },
  error: { color: 'critic-light', icon: ErrorIcon, cancel: false },
  success: { color: 'success-dark', icon: SuccessIcon, cancel: false },
  warning: { color: 'yellow-800', icon: WarningIcon, cancel: false },
  submit: { color: 'yellow-800', icon: SuccessIcon, cancel: true },
};

interface IStateInfoProps {
  state: keyof typeof options;
  title: string;
  textInfo: string;
  onOkClickHandler?: () => void;
  onCancelClickHandler?: () => void;
}

export const AlertWindow: React.FC<IStateInfoProps> = ({
  state = 'info',
  title,
  textInfo,
  onOkClickHandler,
  onCancelClickHandler,
}) => {
  const { color, icon: IconComponent, cancel } = options[state];
  const bodyScrollLockRef = useBodyScrollLock(true);

  return (
    <div
      className="backdrop-brightness-10 fixed inset-0 flex items-center justify-center backdrop-blur-sm"
      ref={bodyScrollLockRef}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="alert-window-title"
        className={`flex w-[38.7rem] flex-col items-center justify-center rounded-md border border-solid border-${color} bg-white p-[2.4rem]`}
      >
        <div className="flex w-full justify-between">
          <IconComponent className={`fill-${color}`} />
          <div className="w-[30rem]">
            <h2
              id="alert-window-title"
              className={`text text-left text-[2.2rem] font-semibold text-${color}`}
            >
              {title}
            </h2>
            <p className="text-dark-gray mt-[1.2rem] text-left text-[1.6rem] font-normal leading-[3.2rem]">
              {textInfo}
            </p>
          </div>
        </div>
        <div className="mt-[1.7rem] flex">
          <button
            className="flex cursor-pointer items-center text-success-dark"
            onClick={onOkClickHandler}
          >
            <OkIcon />
            <span className="ml-[0.8rem]">Ok</span>
          </button>
          {cancel && (
            <button
              className="ml-[4rem] flex cursor-pointer items-center text-critic-light"
              onClick={onCancelClickHandler}
            >
              <CancelIcon />
              <span className="ml-[0.8rem]">Скасувати</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
