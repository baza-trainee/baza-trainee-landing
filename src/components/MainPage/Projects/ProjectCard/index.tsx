'use client';

import { useState } from 'react';
import Image from 'next/image';
import ProjectCardContent from './ProjectCardContent';
import ProjectCardTeam from './ProjectCardTeam';
import { ProjectStatus } from './ProjectStatus';
import { TProjects } from '../types';

const ProjectCard = ({ project }: { project: TProjects }) => {
  const [isMembersVIsible, setIsMembersVIsible] = useState(false);
  const handleShowTeam = () => {
    setIsMembersVIsible((prev) => !prev);
  };

  return (
    <li>
      <div className="relative h-[46.4rem] w-[37.8rem] overflow-hidden rounded-md">
        <Image
          src={project.imageUrl}
          alt="Project Image"
          fill
          objectFit="cover"
        />
        <div className="absolute h-full w-full bg-gradient-to-tr from-neutral-500 brightness-50" />

        <div className="flex h-full w-full flex-col justify-between p-[2.4rem]">
          <ProjectStatus statusName={'active'} />

          <div className=" h-1/2 w-full border border-neutral-900">
            <ProjectCardContent
              onShowTeamHandler={handleShowTeam}
              project={project}
              isMembersVIsible={isMembersVIsible}
            />
          </div>
        </div>
      </div>

      {/* {isMembersVIsible && (
          <ProjectCardTeam
            onShowTeamHandler={handleShowTeam}
            project={project}
          />
        )} */}
    </li>
  );
};

export default ProjectCard;
