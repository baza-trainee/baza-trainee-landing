import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { MultiArrow } from '@/components/common/icons';
import { dictionaries } from '@/locales/dictionaries';
import { TLandingLanguage } from '@/store/globalContext';

interface TMoreProjectsButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  lang: TLandingLanguage;
}

export const MoreProjectsButton = ({
  lang,
  ...rest
}: TMoreProjectsButtonProps) => {
  const { moreProjects } = dictionaries[lang];
  return (
    <button
      {...rest}
      className="relative mx-auto h-32 max-w-fit rounded-md px-[0.8rem] py-[1.2rem]
      after:absolute after:left-0 after:top-1/2 after:w-full after:scale-x-0 after:border-t
      after:border-neutral-800 after:transition-all after:content-[''] after:hover:scale-90"
    >
      <span className="text-[2rem]">{moreProjects}</span>

      <MultiArrow direction="bottom" className="mx-auto mt-3" />
    </button>
  );
};
