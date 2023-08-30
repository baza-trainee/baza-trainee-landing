import { ListHeader } from './ListHeader';
import { ListRow } from './ListRow';
import { IMember } from '@/types';

export const MembersList = ({ members }: { members: IMember[] }) => {
  return (
    <table className="w-full table-fixed border-collapse text-ellipsis whitespace-nowrap">
      <ListHeader />

      <tbody>
        {members &&
          members.map((member) => <ListRow key={member._id} member={member} />)}
      </tbody>
    </table>
  );
};
