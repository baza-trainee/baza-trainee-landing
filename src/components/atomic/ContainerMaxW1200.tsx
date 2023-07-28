import { JSX, ReactNode } from 'react';

type TProps = {
  className?: string;
  component?: keyof JSX.IntrinsicElements;
  id?: string;
  children?: ReactNode;
};

export const ContainerMaxW1200 = ({
  className = '',
  component: Component = 'div',
  children,
  id,
}: TProps) => (
  <div className="relative mx-[1.6rem] sm:mx-8 lg:mx-20 h-full">
    <Component
      className={`container relative m-auto flex max-w-[120rem] ${className}`}
      id={id}
    >
      {children}
    </Component>
  </div>
);
