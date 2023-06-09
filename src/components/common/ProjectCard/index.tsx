'use client';
import { useState } from 'react';
import ProjectCardContent from '../ProjectCardContent';
import ProjectCardTeam from '../ProjectCardTeam';
import styles from './styles.module.scss';
const ProjectCard = ({ project }: { project: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(!isOpen);
  };
  function generateRandomNumber() {
    return Math.floor(Math.random() * 90000) + 10000;
  }

  return (
    <>
      <li key={generateRandomNumber()}>
        <div
          className={styles['projects-section__projects-item']}
          id="projects-item"
          style={{
            background: `url(${project.imageUrl})`,
          }}
        >
          <ProjectCardContent onClick={onClick} project={project} />
          {isOpen === true && (
            <ProjectCardTeam onClick={onClick} project={project} />
          )}
        </div>
      </li>
    </>
  );
};

export default ProjectCard;
