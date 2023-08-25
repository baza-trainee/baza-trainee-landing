'use client';

import { ProjectCard } from '@/components/MainPage/Projects/ProjectCard';
import { EditDeleteButton } from '@/components/atomic/buttons/EditDeleteButton';
import { IProject } from '@/types';
import projectsApi from '@/utils/API/projects';
import { useAPI } from '@/utils/hooks/useAPI';
import { ReactElement } from 'react';

// const withTopRightButtons = (WrappedComponent: any) => {
//   const Wrapped = (props: any) => {
//     return (
//       <div className="relative">
//         <WrappedComponent {...props} />

//         <div className="absolute right-8 top-8 flex flex-col gap-3">
//           <EditDeleteButton action="delete" />
//           <EditDeleteButton action="edit" />
//         </div>
//       </div>
//     );
//   };

//   return Wrapped;
// };

// export const ProjectCardWithButtons = withTopRightButtons(ProjectCard);

type Props = {
  children: ReactElement;
};

export const ButtonsOverlay = ({ children }: Props) => {
  const [dispatchDelete, dataActionDelete, isErrorActionDelete] = useAPI(
    projectsApi.deleteById
  );
  const [dispatchUpdate, dataActionUpdate, isErrorActionUpdate] = useAPI(
    projectsApi.updateById
  );

  const id = children.props.project._id;

  const handleActionDelete = () => {
    dispatchDelete(id);
  };

  return (
    <div className="group relative w-full max-w-[37.8rem]">
      {children}

      <div className="absolute right-8 top-8 flex flex-col gap-3">
        {id}
        <EditDeleteButton action="delete" onClick={handleActionDelete} />
        <EditDeleteButton action="edit" onClick={() => alert('222')} />
      </div>
    </div>
  );
};
