import { PropsWithChildren, JSX } from 'react';

type TProps = PropsWithChildren & {
  className?: string;
  component?: keyof JSX.IntrinsicElements;
  id?: string;
};

export const ContainerMaxW1200 = ({
  className = '',
  component: Component = 'div',
  children,
  ...otherProps
}: TProps) => (
  <div className="flex w-full justify-center px-4 sm:px-8 lg:px-28">
    <Component
      className={`container relative flex max-w-[75rem] ${className}`}
      {...otherProps}
    >
      {children}
    </Component>
  </div>
);
