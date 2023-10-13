import Link from 'next/link';

import { EditDeleteButton } from './EditDeleteButton';

type TProps = {
  entity: 'projects' | 'members' | 'roles' | 'partners' | 'testimonials';
  id: string;
  handleDelete: () => void;
};

export const ActionBtns = ({ entity, id, handleDelete }: TProps) => {
  return (
    <div className={`flex gap-3 ${entity === 'projects' ? 'flex-col' : ''}`}>
      <Link href={`/admin/${entity}/${id}`}>
        <EditDeleteButton icon="edit" />
      </Link>

      <EditDeleteButton icon="delete" onClick={handleDelete} />
    </div>
  );
};
