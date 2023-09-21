import { convertDate } from '@/utils/formatDate';
import { createImgUrl } from '@/utils/imageHandler';
import { projectValidateOptions } from './projectValidateOptions';

import LanguageSelector from '@/components/MainPage/Header/LanguageSelector';
import { ProjectCard } from '@/components/ProjectCard';
import { LogoMain } from '@/components/common/icons';

import { TProject } from '@/types';
import { TFormInput } from './types';

type Props = {
  // TODO: possibly delete.
  currentValues: TFormInput;
};

const EmptyPreviewImg = () => (
  <div className="flex-center h-[46.4rem] rounded-md bg-neutral-75">
    <LogoMain className="h-72 w-72 text-neutral-200" />
  </div>
);

const ProjectPreview = ({ currentValues }: Props) => {
  const { projectImg } = currentValues;
  // console.log("projectImg", projectImg[0].type );

  const getCoverImgUrl = () => {
    if (!projectImg?.length) return;

    if (projectImg[0].type === 'for-url') {
      return createImgUrl(projectImg[0].name);
    }

    const isValidImg = projectValidateOptions.img.validate(projectImg);
    if (isValidImg) {
      return URL.createObjectURL(projectImg[0]);
    }
  };

  const coverImgUrl = getCoverImgUrl();

  if (!coverImgUrl) {
    return <EmptyPreviewImg />;
  }

  // console.log('pervVal >>', currentValues.launchDate);

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
    creationDate: convertDate.toMsec(currentValues.creationDate),
    launchDate: convertDate.toMsec(currentValues.launchDate),
    complexity: +currentValues.complexity,
    teamMembers: []
  };

  return (
    <div className="group relative w-full max-w-[37.8rem]">
      <ul>
        <ProjectCard
          project={previewProject}
          coverImgUrl={coverImgUrl}
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

