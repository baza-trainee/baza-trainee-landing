'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './styles.module.scss';

import { ProjectCardContent } from './ProjectCardContent';

import { IProject } from '@/types';
import { ProjectCardTeam } from './ProjectCardTeam';

type TProps = {
  project: IProject;
  animationDelay?: number;
};

const ProjectCard = ({ project, animationDelay = 0 }: TProps) => {
  const [isMembersVisible, setIsMembersVisible] = useState(false);

  const projectImg =
    process.env.NEXT_PUBLIC_PROXY_URL! +
    process.env.NEXT_PUBLIC_SERVER_URL! +
    '/files/' +
    project.imageUrl;

  const handleShowTeam = () => {
    setIsMembersVisible((prev) => !prev);
  };

  return (
    <li
      className={styles.animate}
      style={{ animationDelay: `${animationDelay / 8}s` }}
    >
      {/*<li className={styles['new-box']}>*/}
      <div className="group relative h-[46.4rem] w-full max-w-[37.8rem] cursor-default overflow-hidden rounded-md">
        <Image
          src={projectImg}
          alt="Project Image"
          fill
          sizes="(min-width: 300px) 100%"
          // style={{
          //   objectFit: 'cover',
          // }}
          // className={
          //   isMembersVisible
          //     ? 'contrast-50 grayscale-[.3]'
          //     : 'contrast-50 grayscale group-hover:contrast-100 group-hover:grayscale-0'
          // }
          className={`bg-cover contrast-50
          ${
            isMembersVisible
              ? 'grayscale-[.3]'
              : 'grayscale group-hover:contrast-100 group-hover:grayscale-0'
          }`}
        />

        <div
          className={`absolute h-full w-full bg-gradient-to-tr from-black
          ${
            isMembersVisible
              ? 'to-[#00000077]'
              : 'via-black via-20% to-[#cfa249e0] opacity-80 group-hover:via-0% group-hover:to-transparent'
          }`}
        />

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
