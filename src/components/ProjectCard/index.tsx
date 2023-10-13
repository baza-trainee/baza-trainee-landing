'use client';

import { useState } from 'react';
import Image from 'next/image';

import { ProjectCardContent } from './ProjectCardContent';
import { ProjectCardTeam } from './ProjectCardTeam';

import { TProjectResp } from '@/types';

import { TLandingLanguage } from '@/store/globalContext';

import styles from './styles.module.css';

type TProps = {
  project: TProjectResp;
  coverImgUrl: string;
  lang: TLandingLanguage;
  animationDelay?: number;
  isAdminMode?: boolean;
};

const ProjectCard = ({
  project,
  coverImgUrl,
  lang,
  animationDelay = 0,
  isAdminMode,
}: TProps) => {
  const [isMembersVisible, setIsMembersVisible] = useState(false);

  const handleShowTeam = () => {
    setIsMembersVisible((prev) => !prev);
  };

  return (
    <li
      className={styles.animate}
      style={{ animationDelay: `${animationDelay! / 8}s` }}
    >
      <div className="group relative h-[46.4rem] w-full max-w-[37.8rem] cursor-default overflow-hidden rounded-md">
        <Image
          src={coverImgUrl}
          alt="Project Image"
          fill
          sizes="100%"
          className={`object-cover contrast-50 ${
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
              {...{ project, lang, handleShowTeam, isAdminMode }}
            />
          ) : (
            <ProjectCardContent {...{ project, lang, handleShowTeam }} />
          )}
        </div>
      </div>
    </li>
  );
};

export { ProjectCard };
