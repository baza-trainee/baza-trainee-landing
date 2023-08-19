import { ProjectCard } from '@/components/MainPage/Projects/ProjectCard';
import { EditDeleteButton } from '@/components/atomic/buttons/EditDeleteButton';
import { IProject } from '@/types';
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

export const ProjectCardWithButtons = ({ children }: Props) => (
  <div className="relative">
    {children}

    <div className="absolute right-8 top-8 flex flex-col gap-3">
      <EditDeleteButton action="delete" />
      <EditDeleteButton action="edit" />
    </div>
  </div>
);
