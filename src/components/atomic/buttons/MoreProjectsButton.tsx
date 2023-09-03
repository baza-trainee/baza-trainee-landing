'use client';
import { dictionaries } from '@/app/[lang]/dictionaries';
import { MultiArrow } from '@/components/common/icons';
import { TLandingLanguage } from '@/store/globalContext';

export const MoreProjectsButton = ({ ...rest }) => {
  const dict = dictionaries[rest.lang as TLandingLanguage];
  const { moreProjects } = dict;
  return (
    <button
      className="relative mx-auto h-32 max-w-fit rounded-md px-[0.8rem]
    py-[1.2rem] after:absolute after:left-0 after:top-1/2 after:w-full after:scale-x-0 after:border-t after:border-neutral-800 after:transition-all after:content-[''] after:hover:scale-90"
      {...rest}
    >
      <span className="text-[2rem]">{moreProjects}</span>

      <MultiArrow direction="bottom" className="mx-auto mt-3" />
    </button>
  );
};
