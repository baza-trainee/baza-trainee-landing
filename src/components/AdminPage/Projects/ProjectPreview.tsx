import { useProjectFormContext } from './ProjectFormProvider';

import { createImgUrl } from '@/utils/imageHandler';
import { prepareProject } from './projectUtils';
import { projectValidateOptions } from './validateOptions';

import LanguageSelector from '@/components/MainPage/Header/LanguageSelector';
import { ProjectCard } from '@/components/ProjectCard';
import { LogoMain } from '@/components/common/icons';

import { TProject } from '@/types';

const EmptyPreviewImg = () => (
  <div className="flex-center h-[46.4rem] rounded-md bg-neutral-75">
    <LogoMain className="h-72 w-72 text-neutral-200" />
  </div>
);

const ProjectPreview = () => {
  const { teamMemberData, watch } = useProjectFormContext();
  const currentValues = watch();
  const { projectImg } = currentValues;

  const getCoverImgUrl = () => {
    if (!projectImg?.length) return;

    if (projectImg[0].type === 'for-url') {
      return createImgUrl(projectImg[0].name);
    }


    
    // const isValidImg = projectValidateOptions.img.validate(projectImg);
    // if (isValidImg) {
      return URL.createObjectURL(projectImg[0]);
    // }
  };

  const coverImgUrl = getCoverImgUrl();

  if (!coverImgUrl) {
    return <EmptyPreviewImg />;
  }

  const previewProject: TProject = {
    _id: '',
    imageUrl: '',
    ...prepareProject(currentValues),
    teamMembers: teamMemberData,
  };

  return (
    <div className="group relative w-full max-w-[37.8rem]">
      <ul>
        <ProjectCard
          project={previewProject}
          coverImgUrl={coverImgUrl}
          lang={'ua'}
          isAdminMode={true}
        />
      </ul>

      <div className="absolute right-0 top-0 rounded-md bg-yellow-500 py-5">
        <LanguageSelector />
      </div>
    </div>
  );
};

export { ProjectPreview };

