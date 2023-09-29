import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

const primary =
  'bg-neutral-800 text-white border-neutral-800 disabled:border-neutral-75 disabled:bg-neutral-75 disabled:text-neutral-300';
const secondary =
  'border-neutral-800 bg-white text-neutral-800 disabled:border-neutral-300 disabled:text-neutral-300';

interface AdminPanelButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
  iconOnly?: boolean;
}

export const AdminPanelButtonBlock: FC<AdminPanelButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  icon,
  disabled,
  iconOnly,
  ...rest
}) => {
  const hoverClasses = !disabled
    ? variant === 'primary'
      ? 'hover:bg-white hover:text-neutral-800'
      : 'hover:bg-neutral-500 hover:text-white'
    : '';

  const buttonClasses = `
    relative flex-center gap-[1.2rem] h-[5.6rem] shrink-0 pr-[3.2rem] rounded-[0.4rem]
    border text-[2.2rem] font-semibold overflow-hidden transition-colors w-full mt-7
    ${icon ? 'pl-[1.2rem]' : 'pl-[3.2rem]'}
    ${iconOnly && icon ? 'w-[4.7rem]' : ''}
    ${variant === 'primary' ? primary : secondary}
    ${hoverClasses}
    ${className}
  `;

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      type="button"
      {...rest}
    >
      {icon && (
        <div
          className={`h-[2.4rem] w-[2.4rem] ${iconOnly ? 'block-center' : ''}`}
        >
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
