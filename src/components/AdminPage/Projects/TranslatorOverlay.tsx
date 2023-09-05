import { ReactElement } from 'react';

import LanguageSelector from '@/components/MainPage/Header/LanguageSelector';

type Props = {
  children: ReactElement;
};

export const TranslatorOverlay = ({ children }: Props) => {
  const id = children.props.project._id;

  return (
    <div className="group relative w-full max-w-[37.8rem]">
      {children}

      <div className="absolute right-0 top-0">
        <LanguageSelector/>
      </div>
    </div>
  );
};
