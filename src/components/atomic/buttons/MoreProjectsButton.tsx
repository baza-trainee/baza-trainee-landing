'use client';
import { dictionaries } from '@/app/[lang]/dictionaries';
import { MultiArrow } from '@/components/common/icons';
import { TLandingLanguage } from '@/store/globalContext';
import { TDictionary } from '@/types';
import { useEffect, useState } from 'react';

export const MoreProjectsButton = ({
  open = false,
  lang,
}: {
  open?: boolean;
  lang: TLandingLanguage;
}) => {
  const [dict, setDict] = useState<TDictionary>();
  const getDictionary = async () => {
    setDict(await dictionaries[lang]());
  };

  useEffect(() => {
    getDictionary();
  }, []);

  return (
    <button
      className="relative mx-auto h-32 max-w-fit rounded-md px-[0.8rem]
    py-[1.2rem] after:absolute after:left-0 after:top-1/2 after:w-full after:scale-x-0 after:border-t after:border-neutral-800 after:transition-all after:content-[''] after:hover:scale-90"
    >
      <span className="text-[2rem]">{dict?.moreProjects}</span>

      <MultiArrow direction="bottom" className="mx-auto mt-3" />
    </button>
  );
};
