'use client';
import Image from 'next/image';
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
    status: string;
    description: string;
    link: string;
    createdAt: string;
    complexity: number;
    teamMembers: {
      role: { name: string; _id: string };
      user: { _id: string; link: string; name: string };
    }[];
  };
}) => {
  const [showTeamHandler, setShowTeamHandler] = useState(false);
  const handleShowTeam = (value: boolean) => {
    setShowTeamHandler(value);
  };
  return (
    <>
      <li>
        <div
          className={
            styles['projects-section__projects-item__project-card-image']
          }
        >
          <Image
            src={project.imageUrl}
            alt="Project Image"
            width={378}
            height={464}
          />
          <div
            className={
              styles['projects-section__projects-item__project-card-content']
            }
          >
            <ProjectCardContent
              onShowTeamHandler={() => handleShowTeam(true)}
              project={project}
              showTeamHandler={showTeamHandler}
            />
            {showTeamHandler && (
              <ProjectCardTeam
                onShowTeamHandler={() => handleShowTeam(false)}
                project={project}
              />
            )}
          </div>
        </div>
      </li>
    </>
  );
};

export default ProjectCard;
