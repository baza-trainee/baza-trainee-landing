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
  const [isPlusVisible, setIsPlusVisible] = useState(false);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      counterHandler(projectsCount, projects, setProjectsCount, () =>
        setIsPlusVisible(true)
      );
      counterHandler(membersCount, members, setMembersCount);
      counterHandler(haveJobCount, haveJob, setHaveJobCount);
    }
  };

  useEffect(() => {
    const options = {
      threshold: 0.5,
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
  }, []);
  return (
    <section className={styles.achievements} ref={componentRef}>
      <div className="container">
        <ul className={styles.achievements__list}>
          <li className={styles.achievements__item}>
            <p className={styles.achievements__number}>
              <span>{projectsCount}</span>
            </p>
            <p className={styles.achievements__text}>Виконаних проєктів</p>
          </li>
          <li className={styles.achievements__item}>
            <p className={styles.achievements__number}>
              <span>{membersCount}</span>
              {isPlusVisible && '+'}
            </p>
            <p className={styles.achievements__text}>Залучених учасників</p>
          </li>
          <li className={styles.achievements__item}>
            <p className={styles.achievements__number}>
              <span>{haveJobCount}</span>
            </p>
            <p className={styles.achievements__text}>Працевлаштовано</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
