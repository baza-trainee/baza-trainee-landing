'use client';
import { useState } from 'react';
import ProjectCardContent from './ProjectCardContent';
import ProjectCardTeam from './ProjectCardTeam';
import styles from './styles.module.scss';
const ProjectCard = ({
  project,
  dictionary,
}: {
  project: {
    // imageUrl: string;
    // stack: string[];
    // status: string;
    // description: string;
    // link: string;
    // createdAt: string;
    // complexity: number;
    // teamMembers: {
    //   role: { name: string; _id: string };
    //   user: { _id: string; link: string; name: string };
    // }[];
    _id: string;
    complexity: number;
    creationDate: number;
    imageUrl: string;
    isTeamRequired: boolean;
    launchDate?: number;
    deployUrl?: string;
    teamMembers:
      | {
          user: {
            _id: string;
            name: string;
          };
          role: {
            _id: string;
            name: string;
          };
        }[]
      | [];
    title: {
      en: string;
      pl: string;
      ua: string;
    };
  };
  dictionary: {
    monthsNames: {
      january: string;
      february: string;
      march: string;
      april: string;
      may: string;
      june: string;
      july: string;
      august: string;
      september: string;
      october: string;
      november: string;
      december: string;
    };
    projects: {
      projectStart: string;
      projectCycle: string;
      complexity: string;
      time: string;
      projectTeam: string;
      status: {
        teamFormation: string;
        underDevelopment: string;
        completed: string;
      };
    };
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
          {/* <Image
            src={project.imageUrl}
            alt="Project Image"
            width={378}
            height={464}
          /> */}
          <div className="bg-red-500"></div>
          <div
            className={
              styles['projects-section__projects-item__project-card-content']
            }
          >
            <ProjectCardContent
              dictionary={dictionary}
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
