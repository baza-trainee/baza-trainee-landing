import Link from 'next/link';

import { EditDeleteButton } from './EditDeleteButton';

type TProps = {
  entity: 'projects' | 'members' | 'roles' | 'partners';
  id: string;
  // handleDelete: (id?: string) => void;
  handleDelete: () => void;
};

export const ActionBtns = ({ entity, id, handleDelete }: TProps) => {
  return (
    <div className={`flex gap-3 ${entity === 'projects' ? 'flex-col' : ''}`}>
      <Link href={`/admin/${entity}/${id}`}>
        <EditDeleteButton icon="edit" />
      </Link>
      {/* <EditDeleteButton icon="delete" onClick={() => handleDelete(id)} /> */}
      <EditDeleteButton icon="delete" onClick={handleDelete} />
      {/*  TODO: to implement "confirm question" logic */}
    </div>
  );
};
