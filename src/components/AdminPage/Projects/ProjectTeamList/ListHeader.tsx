import Link from 'next/link';

import { AdminPanelButton } from '@/components/atomic';
import { PlusIcon } from '@/components/common/icons';

// import { TEntity } from '../types';

// type TProps = {
//   entity: TEntity;
// };

const cellStyle = 'border-none p-0';
const bgStyle = 'mb-10 flex h-[7.2rem] items-center bg-yellow-200';

export const ListHeader = ({ projectId }: { projectId: string }) =>
  // { entity }: TProps
  {
    // const headerName = entity === 'members' ? 'Прізвище та Ім’я' : 'Назва';

    return (
      <thead>
        <tr>
          <th className={cellStyle + ' w-full'}>
            <div className={bgStyle + ' rounded-s-md pl-5'}>
              <span>Прізвище та Ім’я</span>
            </div>
          </th>

          {/* {entity === 'projectTeam' && ( */}
          <th className={`${cellStyle} w-1/3`}>
            <div className={bgStyle}>
              <span>Спеціалізація</span>
            </div>
          </th>
          {/* )} */}

          <th className={`${cellStyle} w-[18rem]`}>
            <div className={`${bgStyle} justify-center rounded-e-md`}>
              {/* <Link href={`/admin/${entity}/add`}> */}
              <Link href={`${projectId}/add-member`}>
                <AdminPanelButton icon={<PlusIcon />}>Додати</AdminPanelButton>
              </Link>
            </div>
          </th>
        </tr>
      </thead>
    );
  };
