'use client';

import Link from 'next/link';

import { useProjectsSWR } from '@/hooks/SWR/useProjectsSWR';
import { useMembersSWR } from '@/hooks/SWR/useMembersSWR';

import { EditDeleteButton } from '@/components/atomic';

type TProps = {
  actionsFor: 'projects' | 'members';
  id: string;
};

export const ActionBtns = ({ actionsFor, id }: TProps) => {
  const { handlerDeleteMember } = useMembersSWR();
  const { handlerDeleteProject } = useProjectsSWR();

  const handleDelete = () => {
    actionsFor === 'projects'
      ? handlerDeleteProject(id)
      : handlerDeleteMember(id);
  };

  return (
    <div
      className={`flex gap-3 ${actionsFor === 'projects' ? 'flex-col' : ''}`}
    >
      <Link href={`/admin/${actionsFor}/edit/${id}`}>
        <EditDeleteButton icon="edit" />
      </Link>

      <EditDeleteButton icon="delete" onClick={handleDelete} />
    </div>
  );
};
