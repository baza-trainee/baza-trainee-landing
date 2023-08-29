import Link from 'next/link';
import { useMembersSWR } from '@/hooks/SWR/useMembersSWR';
import { EditDeleteButton } from '@/components/atomic';

export const ActionBtns = ({ id }: { id: string }) => {
  const { handlerDeleteMember } = useMembersSWR();

  return (
    <div className="flex gap-3">
      <Link href={`/admin/members/edit/${id}`}>
        <EditDeleteButton icon="edit" />
      </Link>

      <EditDeleteButton
        icon="delete"
        onClick={() => {
          handlerDeleteMember(id);
        }}
      />
    </div>
  );
};
