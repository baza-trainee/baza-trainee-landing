'use client';
import { useState } from 'react';
import ProjectCardContent from './ProjectCardContent';
import ProjectCardTeam from './ProjectCardTeam';
import styles from './styles.module.scss';
const ProjectCard = ({
  project,
}: {
  project: {
    imageUrl: string;
    stack: string[];
    teamMembers: object[];
    status: string;
    description: string;
    link: string;
    createdAt: string;
    complexity: number;
  };
}) => {
  const [showTeamHandler, setShowTeamHandler] = useState(false);
  const onClick = () => {
    setShowTeamHandler(!showTeamHandler);
  };
  return (
    <>
      <li>
        <div
          className={styles['projects-section__projects-item']}
          style={{
            background: `url(${project.imageUrl})`,
          }}
        >
          <ProjectCardContent
            onClick={onClick}
            project={project}
            showTeamHandler={showTeamHandler}
          />
          {showTeamHandler === true && (
            <ProjectCardTeam onClick={onClick} project={project} />
          )}
        </div>
      </li>
    </>
  );
};

export default ProjectCard;
