import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full bg-base-light px-[2.4rem] pb-[2.9rem] pt-8">
      {children}
    </div>
  );
};

export default Container;
