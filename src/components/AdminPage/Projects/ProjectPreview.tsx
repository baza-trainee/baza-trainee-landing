'use client';

import { useEffect, useState } from 'react';
import { useWatch } from 'react-hook-form';

import { defaultValues } from './initFormData';
import { useProjectFormContext } from './ProjectFormProvider';
import { prepareProject } from './projectUtils';
import { projectValidateOptions } from './validateOptions';

import { LanguageSelector } from '@/components/atomic';
import { LogoMain } from '@/components/common/icons';
import { ProjectCard } from '@/components/ProjectCard';
import { useProjectsSWR } from '@/hooks/SWR/useProjectsSWR';
import { TLandingLanguage } from '@/store/globalContext';
import { TProjectResp } from '@/types';
import { createImgUrl } from '@/utils/imageHandler';

const EmptyPreviewImg = () => (
  <div className="flex-center h-[46.4rem] rounded-md bg-neutral-75">
    <LogoMain className="h-72 w-72 text-neutral-200" />
  </div>
);

const ProjectPreview = () => {
  const { projectId, teamMemberData, control } = useProjectFormContext();
  const { getProjectById } = useProjectsSWR();

  const currentValues = useWatch({ control });
  const { projectImg } = currentValues;

  const [coverImgUrl, setCoverImgUrl] = useState<string>();
  const [componentLang, setComponentLang] = useState<TLandingLanguage>('ua');

  const changeComponentLang = (lang: TLandingLanguage) => {
    setComponentLang(lang);
  };

  useEffect(() => {
    if (projectId) {
      const projectDataById = getProjectById(projectId);
      projectDataById && setCoverImgUrl(createImgUrl(projectDataById.imageUrl));
    }
  }, []);

  useEffect(() => {
    if (!projectImg?.length) return;

    (async () => {
      const isValidImg = await projectValidateOptions
        .projectImg()
        .validate(projectImg);

      if (typeof isValidImg !== 'string') {
        setCoverImgUrl(URL.createObjectURL(projectImg[0]));
      }
    })();
  }, [projectImg]);

  if (!coverImgUrl) {
    return <EmptyPreviewImg />;
  }

  const previewProject: TProjectResp = {
    _id: '',
    imageUrl: '',
    ...prepareProject({ ...defaultValues, ...currentValues }),
    teamMembers: teamMemberData,
  };

  return (
    <div className="group relative w-full max-w-[37.8rem]">
      <ul>
        <ProjectCard
          project={previewProject}
          coverImgUrl={coverImgUrl}
          lang={componentLang}
          isAdminMode
        />
      </ul>

      <div className="absolute right-0 top-0 rounded-md bg-yellow-500 py-5">
        <LanguageSelector
          currLang={componentLang}
          changeComponentLang={changeComponentLang}
        />
      </div>
    </div>
  );
};

export { ProjectPreview };
