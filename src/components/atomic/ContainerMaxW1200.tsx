import { CSSProperties, FC, PropsWithChildren, JSX } from 'react';

type TProps = PropsWithChildren & {
  className?: string;
  component?: keyof JSX.IntrinsicElements;
  style?: CSSProperties;
};

export const ContainerMaxW1200: FC<TProps> = ({
  className = '',
  component: Component = 'div',
  children,
  style,
}) => (
  <div className="flex w-full justify-center px-4 sm:px-8 lg:px-28">
    <Component
      style={style}
      id="custom-container"
      className={`container relative flex max-w-[75rem] ${className}`}
    >
      {children}
    </Component>
  </div>
);
