'use client';

import { useEffect, useRef, useState } from 'react';

import counterHandler from '@/utils/counterHandler';

import { ContainerMaxW1200 } from '@/components/atomic';

const projects = 7;
const members = 420;
const haveJob = 212;

export const Achievements = () => {
  const componentRef = useRef(null);
  const [projectsCount, setProjectsCount] = useState(0);
  const [membersCount, setMembersCount] = useState(0);
  const [haveJobCount, setHaveJobCount] = useState(0);
  const [isCountFinish, setIsCountFinish] = useState(false);

  const achievementData = [
    { count: projectsCount, text: 'Виконаних проєктів' },
    {
      count: membersCount,
      text: 'Залучених учасників',
      plusVisible: isCountFinish,
    },
    { count: haveJobCount, text: 'Працевлаштовано' },
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
      <ContainerMaxW1200 className="justify-between">
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
