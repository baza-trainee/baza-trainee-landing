import { ReactElement } from 'react';

import { ActionBtns } from '@/components/atomic';

export const ButtonsOverlay = ({ children }: { children: ReactElement }) => {
  const id = children.props.project._id;

  return (
    <div className="group relative w-full max-w-[37.8rem]">
      {children}

      <div className="absolute right-8 top-8">
        <ActionBtns actionsFor="projects" id={id} />
      </div>
    </div>
  );
};
