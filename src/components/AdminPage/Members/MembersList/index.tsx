import { useMembersSWR } from '@/hooks/SWR/useMembersSWR';
import { ListHeader } from './ListHeader';
import { ListRow } from './ListRow';

export const MembersList = () => {
  const { data: members, isLoading, isError } = useMembersSWR();

  return (
    <table className='w-full' >
      <ListHeader />

      <tbody>
        {members &&
          members.map((member) => <ListRow key={member._id} member={member} />)}
      </tbody>
    </table>
  );
};
