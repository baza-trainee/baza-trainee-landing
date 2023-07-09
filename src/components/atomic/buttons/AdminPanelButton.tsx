import { FC } from 'react';
import { TButtonProps } from '../types';

const primaryEnabled = 'bg-neutral-75 text-neutral-300';
const primaryDisabled = 'bg-neutral-800 text-white hover:bg-white hover:text-neutral-800';
const secondaryEnabled = 'border-neutral-300 text-neutral-300';
const secondaryDisabled = 'border-neutral-800 bg-white text-neutral-800 hover:bg-neutral-800 hover:text-white';

export const AdminPanelButton: FC<TButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  icon,
  disabled,
  iconOnly,
  ...rest
}) => {
const buttonClasses = `h-[5.6rem] shrink-0 items-center justify-center
    ${icon ? 'pl-[1.2rem]' : 'pl-[3.2rem]'}
    ${icon && iconOnly ? 'pr-[1.2rem]' : 'pr-[3.2rem]'}
    ${variant === 'primary' && (disabled ? primaryEnabled : primaryDisabled)}
    ${variant === 'secondary' && (disabled ? secondaryEnabled : secondaryDisabled)}
    rounded-[0.4rem] border text-[2.2rem] font-semibold ${className}`

  return (
    <button className={buttonClasses} disabled={disabled} {...rest}>
      {icon ? (
        <div className="flex max-h-[2.4rem] items-center gap-[1.2rem] text-inherit">
          {icon} {!iconOnly && children}
        </div>
      ) : (
        children
      )}
    </button>
  );
};
