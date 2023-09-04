import { ReactElement } from 'react';

import { ActionBtns } from '@/components/atomic';

type Props = {
  children: ReactElement;
  handleDelete: (id: string) => void;
};

export const ButtonsOverlay = ({ children, handleDelete }: Props) => {
  const id = children.props.project._id;

  return (
    <div className="group relative w-full max-w-[37.8rem]">
      {children}

      <div className="absolute right-8 top-8">
        <ActionBtns entity="projects" id={id} handleDelete={handleDelete} />
      </div>
    </div>
  );
};
