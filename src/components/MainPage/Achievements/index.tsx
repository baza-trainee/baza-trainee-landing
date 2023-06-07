import counterHandler from '@/utils/counterHandler';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

const projects = 7;
const members = 420;
const haveJob = 212;

const Achievements = () => {
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
    <section className={styles.achievements} ref={componentRef}>
      <div className="container">
        <ul className={styles.achievements__list}>
          {achievementData.map((achievement, index) => (
            <li key={index} className={styles.achievements__item}>
              <p className={styles.achievements__number}>
                <span>{achievement.count}</span>
                {achievement.plusVisible && '+'}
              </p>
              <p className={styles.achievements__text}>{achievement.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
