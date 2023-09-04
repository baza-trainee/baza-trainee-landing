import { IMember, IRole } from '@/types';
import { ListHeader } from './ListHeader';
import { ListRow } from './ListRow';

type TProps = {
  entity: 'members' | 'roles';
  showedData: IMember[] | IRole[];
  deleteAction: (id: string) => void;
};

export const MembersAndRolesList = ({
  entity,
  showedData,
  deleteAction,
}: TProps) => {
  return (
    <table className="w-full table-fixed border-collapse text-ellipsis whitespace-nowrap">
      <ListHeader entity={entity} />

      <tbody>
        {showedData &&
          showedData?.map((item) => (
            <ListRow
              entity={entity}
              key={item._id}
              showedData={item}
              deleteAction={deleteAction}
            />
          ))}
      </tbody>
    </table>
  );
};
