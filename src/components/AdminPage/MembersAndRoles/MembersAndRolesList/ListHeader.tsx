import Link from 'next/link';

import { AdminPanelButton } from '@/components/atomic';
import { PlusIcon } from '@/components/common/icons';

import { TEntity } from '../types';

const cellStyle = 'border-none p-0';
const bgStyle = 'mb-10 flex h-[7.2rem] items-center bg-yellow-200';

export const ListHeader = ({ entity }: { entity: TEntity }) => {
  const headerName = entity === 'members' ? 'Прізвище та Ім’я' : 'Назва';

  return (
    <thead>
      <tr>
        <th className={cellStyle + ' w-full'}>
          <div className={bgStyle + ' rounded-s-md pl-5'}>
            <span>{headerName}</span>
          </div>
        </th>

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
