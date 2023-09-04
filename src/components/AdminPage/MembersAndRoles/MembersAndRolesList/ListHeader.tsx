import { AdminPanelButton } from '@/components/atomic';
import { PlusIcon } from '@/components/common/icons';
import Link from 'next/link';

type TProps = {
  entity: 'members' | 'roles';
};

const cellStyle = 'border-none p-0';
const bgStyle = 'mb-10 flex h-[7.2rem] items-center bg-yellow-200';

export const ListHeader = ({ entity }: TProps) => {
  const headerName = entity === 'members' ? 'Прізвище та Ім’я' : 'Назва';

  return (
    <thead>
      <tr>
        <th className={cellStyle + ' w-full'}>
          <div className={bgStyle + ' rounded-s-md pl-5'}>
            <span>{headerName}</span>
          </div>
        </th>

        {false && ( // TODO: to implement logic when this component will be reusing in "project"
          <th className={`${cellStyle} w-1/4`}>
            <div className={bgStyle}>
              <span>Спеціалізація</span>
            </div>
          </th>
        )}

        <th className={`${cellStyle} w-[18rem]`}>
          <div className={`${bgStyle} justify-center rounded-e-md`}>
            <Link href={`/admin/${entity}/add`}>
              <AdminPanelButton icon={<PlusIcon />}>Додати</AdminPanelButton>
            </Link>
          </div>
        </th>
      </tr>
    </thead>
  );
};