'use client';

import { useContext, useEffect, useRef, useState } from 'react';

import counterHandler from '@/utils/counterHandler';

import { ContainerMaxW1200 } from '@/components/atomic';
import { GlobalContext } from '@/store/globalContext';

const projects = 7;
const members = 420;
const haveJob = 212;

export const Achievements = ({
  dictionary,
}: {
  dictionary: {
    stats: {
      completedProjects: string;
      involvedParticipants: string;
      employed: string;
    };
  };
}) => {
  const componentRef = useRef(null);
  const [projectsCount, setProjectsCount] = useState(0);
  const [membersCount, setMembersCount] = useState(0);
  const [haveJobCount, setHaveJobCount] = useState(0);
  const [isCountFinish, setIsCountFinish] = useState(false);

  const { achievements } = useContext(GlobalContext);

  const achievementData = [
    { count: projectsCount, text: dictionary.stats.completedProjects },
    {
      count: membersCount,
      text: dictionary.stats.involvedParticipants,
      plusVisible: isCountFinish,
    },
    { count: haveJobCount, text: dictionary.stats.employed },
  ];

  const achievementsTexts = [
    {
      text: dictionary.stats.completedProjects,
    },
    {
      text: dictionary.stats.involvedParticipants,
    },
    {
      text: dictionary.stats.employed,
    },
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
        {[achievements].map((achievement, i) => (
          <>
            {Object.keys(achievement).map((_, index) => (
              <div
                key={`achievement_key_${Object.keys(achievement)[i] + i}`}
                className={'text-center'}
              >
                <p key={index} className={'text-[5.6rem] font-semibold'}>
                  {Object.values(achievement)[i]}
                </p>
                <p className={'text-[2rem] font-medium uppercase'}>
                  {' '}
                  {achievementsTexts[index].text}
                </p>
              </div>
            ))}
            {/* {plusVisible && '+'} */}
          </>
        ))}
      </ContainerMaxW1200>
    </section>
  );
};
