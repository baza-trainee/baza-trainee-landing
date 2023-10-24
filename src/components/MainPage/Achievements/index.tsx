'use client';

import { useEffect, useRef, useState } from 'react';

import { dictionaries } from '@/locales/dictionaries';

import { TLandingLanguage } from '@/store/globalContext';

import { ContainerMaxW1200 } from '@/components/atomic';
import counterHandler from '@/utils/counterHandler';

export const Achievements = ({ lang }: { lang: TLandingLanguage }) => {
  const componentRef = useRef(null);
  const [projectsCount, setProjectsCount] = useState(0);
  const [membersCount, setMembersCount] = useState(0);
  const [haveJobCount, setHaveJobCount] = useState(0);
  const [isCountFinish, setIsCountFinish] = useState(false);
  const [data, setData] = useState<any>();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/achievements')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setIsloading(false);
      });
  }, []);

  console.log(data);

  const dict = dictionaries[lang];
  const { stats } = dict || {};
  const { completedProjects, involvedParticipants, employed } = stats || {};

  const achievementData = [
    { count: projectsCount, text: completedProjects },
    {
      count: membersCount,
      text: involvedParticipants,
      plusVisible: isCountFinish,
    },
    { count: haveJobCount, text: employed },
  ];

  useEffect(() => {
    const options = {
      threshold: 0.2,
    };

    if (!isLoading) {
      const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) {
          counterHandler(projectsCount, data?.projects, setProjectsCount, () =>
            setIsCountFinish(true)
          );
          counterHandler(membersCount, data?.members, setMembersCount);
          counterHandler(haveJobCount, data?.employed, setHaveJobCount);
        }
      };

      const observer = new IntersectionObserver(handleIntersection, options);

      if (componentRef.current && data && !isLoading) {
        observer.observe(componentRef.current);
      }

      return () => {
        if (componentRef.current) {
          observer.unobserve(componentRef.current);
        }
      };
    }
  }, [projectsCount]);

  return (
    <section className="bg-yellow-500 py-[5.2rem]" ref={componentRef}>
      <ContainerMaxW1200 className="flex-col justify-between md:flex-row">
        {achievementData.map(({ count, plusVisible, text }, i) => (
          <div key={`achievement_key_${count + i}`} className={'text-center'}>
            <p className={'text-[5.6rem] font-semibold'}>
              {count}
              {plusVisible && '+'}
            </p>

            <p className={'text-[2rem] font-medium uppercase'}>{text}</p>
          </div>
        ))}
      </ContainerMaxW1200>
    </section>
  );
};
