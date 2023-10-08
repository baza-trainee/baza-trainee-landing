import { useEffect, useState } from 'react';

import { useProjectFormContext } from './ProjectFormProvider';
import { prepareProject } from './projectUtils';
import { projectValidateOptions } from './validateOptions';

import { LogoMain } from '@/components/common/icons';
import LanguageSelector from '@/components/MainPage/Header/LanguageSelector';
import { ProjectCard } from '@/components/ProjectCard';
import { TProjectResp } from '@/types';
import { createImgUrl } from '@/utils/imageHandler';

const EmptyPreviewImg = () => (
  <div className="flex-center h-[46.4rem] rounded-md bg-neutral-75">
    <LogoMain className="h-72 w-72 text-neutral-200" />
  </div>
);

const ProjectPreview = () => {
  const { teamMemberData, watch } = useProjectFormContext();
  const currentValues = watch();
  const { projectImg } = currentValues;

  const [coverImgUrl, setCoverImgUrl] = useState<string>();

  useEffect(() => {
    if (!projectImg?.length) return;

    (async () => {
      if (projectImg[0].type === 'for-url') {
        setCoverImgUrl(createImgUrl(projectImg[0].name));
      } else {
        const isValidImg =
          await projectValidateOptions.projectImg.validate(projectImg);

        if (typeof isValidImg !== 'string') {
          setCoverImgUrl(URL.createObjectURL(projectImg[0]));
        }
      }
    })();
  }, [projectImg]);

  if (!coverImgUrl) {
    return <EmptyPreviewImg />;
  }

  const previewProject: TProjectResp = {
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
          lang="ua"
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
