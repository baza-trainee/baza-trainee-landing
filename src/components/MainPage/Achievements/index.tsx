'use client';

import { useEffect, useRef, useState } from 'react';

import { dictionaries } from '@/locales/dictionaries';

import { TLandingLanguage } from '@/store/globalContext';

import counterHandler from '@/utils/counterHandler';

import { ContainerMaxW1200 } from '@/components/atomic';

const projects = 25;
const members = 1230;
const haveJob = 32;

export const Achievements = ({ lang }: { lang: TLandingLanguage }) => {
  const componentRef = useRef(null);
  const [projectsCount, setProjectsCount] = useState(0);
  const [membersCount, setMembersCount] = useState(0);
  const [haveJobCount, setHaveJobCount] = useState(0);
  const [isCountFinish, setIsCountFinish] = useState(false);

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

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        counterHandler(projectsCount, projects, setProjectsCount, () =>
          setIsCountFinish(true)
        );
        counterHandler(membersCount, members, setMembersCount);
        counterHandler(haveJobCount, haveJob, setHaveJobCount);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [isCountFinish]);

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
