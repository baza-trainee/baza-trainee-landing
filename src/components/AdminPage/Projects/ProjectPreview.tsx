import { useEffect } from 'react';

import LanguageSelector from '@/components/MainPage/Header/LanguageSelector';
import { LogoMain } from '@/components/common/icons';
import { TFormInput } from './types';
import { ProjectCard } from '@/components/ProjectCard';
import { TProject } from '@/types';
import { projectValidator } from './projectValidator';

type Props = {
  currentValues: TFormInput;
};

const EmptyImg = () => (
  <div className="flex-center h-[46.4rem] rounded-md bg-neutral-75">
    <LogoMain className="h-72 w-72 text-neutral-200" />
  </div>
);

const ProjectPreview = ({ currentValues }: Props) => {
  const { projectImg } = currentValues;

  const getPreviewImg = () => {
    if (!projectImg?.length) return;

    const isValidImg = projectValidator.imgOptions.validate(projectImg);

    return isValidImg ? URL.createObjectURL(projectImg[0]) : undefined;
  };

  const previewImg = getPreviewImg();

  if (!previewImg) {
    return <EmptyImg />;
  }

  const previewProject: TProject = {
    _id: '',
    title: {
      en: currentValues.nameEn,
      pl: currentValues.namePl,
      ua: currentValues.nameUk,
    },
    imageUrl: '',
    deployUrl: currentValues.deployUrl,
    isTeamRequired: !!currentValues.isTeamRequired,
    creationDate: currentValues.creationDate,
    launchDate: currentValues.launchDate || 0,
    complexity: currentValues.complexity,
    // teamMembers?: Array<{
    //   teamMember: TTeamMember;
    //   teamMemberRole: TTeamMemberRole;
    // }>;
  };

  return (
    <div className="group relative w-full max-w-[37.8rem]">
      <ul>
        <ProjectCard
          project={previewProject}
          previewImg={previewImg}
          lang={'ua'}
        />
      </ul>

      <div className="absolute right-0 top-0 rounded-md bg-yellow-500 py-5">
        <LanguageSelector />
      </div>
    </div>
  );
};

export { ProjectPreview };
