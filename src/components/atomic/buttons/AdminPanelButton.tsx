import { FC } from 'react';

const primaryEnabled = 'bg-neutral-75 text-neutral-300';
const primaryDisabled =
  'bg-neutral-800 text-white hover:bg-white hover:text-neutral-800';
const secondaryEnabled = 'border-neutral-300 text-neutral-300';
const secondaryDisabled =
  'border-neutral-800 bg-white text-neutral-800 hover:bg-neutral-500 hover:text-white';

export const AdminPanelButton: FC<any> = ({
  //fix any
  children,
  className = '',
  variant = 'primary',
  icon,
  disabled,
  iconOnly,
  ...rest
}) => {
  const buttonClasses = `relative flex-center gap-[1.2rem] h-[5.6rem] shrink-0 pr-[3.2rem]
    ${icon ? 'pl-[1.2rem]' : 'pl-[3.2rem]'}
    ${icon && iconOnly && 'w-[4.7rem]'}
    ${variant === 'primary' && (disabled ? primaryEnabled : primaryDisabled)}
    ${
      variant === 'secondary' &&
      (disabled ? secondaryEnabled : secondaryDisabled)
    }
    rounded-[0.4rem] border text-[2.2rem] font-semibold overflow-hidden ${className}`;

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      type="button"
      {...rest}
    >
      {icon && (
        <div className={` h-[2.4rem] w-[2.4rem] ${iconOnly && 'block-center'}`}>
          {icon}
        </div>
      )}

      <span
        className={`transition-transform ${
          icon && iconOnly ? 'scale-0' : 'scale-100'
        }`}
      >
        {children}
      </span>
    </button>
  );
};
