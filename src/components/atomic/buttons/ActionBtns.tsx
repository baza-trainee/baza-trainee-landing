import Link from 'next/link';

import { EditDeleteButton } from './EditDeleteButton';

type TProps = {
  actionsFor: 'projects' | 'members';
  id: string;
  deleteAction: (id: string) => Promise<void>;
};

export const ActionBtns = ({ actionsFor, id, deleteAction }: TProps) => {
  return (
    <div
      className={`flex gap-3 ${actionsFor === 'projects' ? 'flex-col' : ''}`}
    >
      <Link href={`/admin/${actionsFor}/${id}`}>
        <EditDeleteButton icon="edit" />
      </Link>

      <EditDeleteButton icon="delete" onClick={() => deleteAction(id)} />
    </div>
  );
};
