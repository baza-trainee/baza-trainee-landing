import Link from 'next/link';

import { EditDeleteButton } from './EditDeleteButton';

type TProps = {
  entity: 'projects' | 'members' | 'roles' | 'projectTeam'; // TODO: to decide about 'projectTeam'
  id: string;
  handleDelete: (id: string) => void;
};

export const ActionBtns = ({ entity, id, handleDelete }: TProps) => {
  return (
    <div className={`flex gap-3 ${entity === 'projects' ? 'flex-col' : ''}`}>
      <Link href={`/admin/${entity}/${id}`}>
        <EditDeleteButton icon="edit" />
      </Link>

      <EditDeleteButton icon="delete" onClick={() => handleDelete(id)} /> {/*  TODO: to implement "confirm question" logic */}
    </div>
  );
};
