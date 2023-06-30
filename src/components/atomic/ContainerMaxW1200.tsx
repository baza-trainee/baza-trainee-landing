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
  <div className="relative mx-4 flex justify-center sm:mx-8 lg:mx-20">
    <Component
      className={`container relative flex ${className}`}
      {...otherProps}
    >
      {children}
    </Component>
  </div>
);
