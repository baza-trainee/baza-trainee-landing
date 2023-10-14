import { ReactElement } from 'react';

import { ActionBtns } from '@/components/atomic';

type Props = {
  children: ReactElement;
  handleDelete: (id: string) => void;
};

export const BtnsOverlay = ({ children, handleDelete }: Props) => {
  const id = children.props.slideData._id;

  return (
    <div className="group relative w-full">
      {children}

      <div className="absolute right-8 top-8">
        <ActionBtns
          entity="slider"
          id={id}
          handleDelete={() => handleDelete(id)}
        />
      </div>
    </div>
  );
};
