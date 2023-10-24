'use client';

import { useEffect, useState } from 'react';

import { dictionaries } from '@/locales/dictionaries';

import { TLandingLanguage } from '@/store/globalContext';

import { ContainerMaxW1200 } from '@/components/atomic';

type TAchievments = {
  projects: number;
  members: number;
  employed: number;
};

export const Achievements = ({ lang }: { lang: TLandingLanguage }) => {
  const [data, setData] = useState<TAchievments>();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/achievements')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setIsloading(false);
      });
  }, []);

  const dict = dictionaries[lang];
  const { stats } = dict || {};
  const { completedProjects, involvedParticipants, employed } = stats || {};

  const achievementData = [
    { count: data?.projects, text: completedProjects },
    {
      count: data?.members,
      text: involvedParticipants,
    },
    { count: data?.employed, text: employed },
  ];

  return (
    <section className="bg-yellow-500 py-[5.2rem]">
      {!isLoading && (
        <ContainerMaxW1200 className="flex-col justify-between md:flex-row">
          {achievementData.map(({ count, text }, i) => (
            <div
              key={`achievement_key_${count! + i}`}
              className={'text-center'}
            >
              <p className={'text-[5.6rem] font-semibold'}>{count}</p>

              <p className={'text-[2rem] font-medium uppercase'}>{text}</p>
            </div>
          ))}
        </ContainerMaxW1200>
      )}
    </section>
  );
};
