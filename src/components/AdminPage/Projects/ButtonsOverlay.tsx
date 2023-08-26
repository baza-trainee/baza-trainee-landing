import { ReactElement } from 'react';
import { useProjectsSWR } from '@/hooks/useProjectsSWR';
import { EditDeleteButton } from '@/components/atomic';

export const ButtonsOverlay = ({ children }: { children: ReactElement }) => {
  const { handlerDeleteProject } = useProjectsSWR();

  const id = children.props.project._id;

  const handleActionDelete = () => {
    handlerDeleteProject(id);
  };

  const handleActionEdit = () => {
    handlerDeleteProject(id);
  };

  return (
    <div className="group relative w-full max-w-[37.8rem]">
      {children}

      <div className="absolute right-8 top-8 flex flex-col gap-3">
        <EditDeleteButton action="delete" onClick={handleActionDelete} />
        <EditDeleteButton action="edit" onClick={handleActionEdit} />
      </div>

      {id}
    </div>
  );
};
