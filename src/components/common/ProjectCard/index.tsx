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
  const [isMembersVIsible, setIsMembersVIsible] = useState(false);
  const handleShowTeam = () => {
    setIsMembersVIsible((prev) => !prev);
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
              onShowTeamHandler={handleShowTeam}
              project={project}
              isMembersVIsible={isMembersVIsible}
            />
            {isMembersVIsible && (
              <ProjectCardTeam
                onShowTeamHandler={handleShowTeam}
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
