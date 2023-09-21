import { IMember, IRole } from '@/types';
import { ListHeader } from './ListHeader';
import { ListRow } from './ListRow';
import { TEntity } from '../types';

type TProps = {
  entity: TEntity;
  showedData: IMember[] | IRole[];
  handleDelete: (id: string) => void;
};

export const MembersAndRolesList = ({
  entity,
  showedData,
  handleDelete,
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
              handleDelete={handleDelete}
            />
          ))}
      </tbody>
    </table>
  );
};
