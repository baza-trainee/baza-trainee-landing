import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full bg-base-light px-[2.4rem] pb-[5.6rem] pt-[3.2rem]">
      {children}
    </div>
  );
};

export default Container;
