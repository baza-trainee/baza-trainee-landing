'use client';

import Image from 'next/image';
import { useState } from 'react';

import { ProjectCardContent } from './ProjectCardContent';

import { TProjects } from '../types';
import { ProjectCardTeam } from './ProjectCardTeam';

const ProjectCard = ({ project }: { project: TProjects }) => {
  const [isMembersVisible, setIsMembersVisible] = useState(false);

  const handleShowTeam = () => {
    setIsMembersVisible((prev) => !prev);
  };

  return (
    <li>
      <div className="relative h-[46.4rem] w-[37.8rem] overflow-hidden rounded-md">
        <Image
          src={project.imageUrl}
          alt="Project Image"
          fill
          objectFit="cover"
          className={isMembersVisible ? 'sepia-[50%]' : ''}
        />
        <div className="absolute h-full w-full bg-gradient-to-tr from-black" />

        <div className="relative h-full p-[2.4rem] text-white">
          {isMembersVisible ? (
            <ProjectCardTeam
              project={project}
              handleShowTeam={handleShowTeam}
            />
          ) : (
            <ProjectCardContent
              project={project}
              handleShowTeam={handleShowTeam}
            />
          )}
        </div>
      </div>
    </li>
  );
};

export { ProjectCard };
