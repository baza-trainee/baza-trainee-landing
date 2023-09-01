import { AdminPanelButton } from '@/components/atomic';
import { PlusIcon } from '@/components/common/icons';
import Link from 'next/link';

const cellStyle = 'border-none p-0';
const bgStyle = 'mb-10 flex h-[7.2rem] items-center bg-yellow-200';

export const ListHeader = () => {
  return (
    <thead>
      <tr>
        <th className={cellStyle + ' w-full'}>
          <div className={bgStyle + ' rounded-s-md pl-5'}>
            <span>Прізвище та Ім’я</span>
          </div>
        </th>

        {false && ( // TODO: to implement logic when this component will be reusing in "project"
          <th className={cellStyle + ' w-1/4'}>
            <div className={bgStyle}>
              <span>Спеціалізація</span>
            </div>
          </th>
        )}

        <th className={cellStyle + ' w-[18rem]'}>
          <div className={bgStyle + ' justify-center rounded-e-md'}>
            <Link href="/admin/members/add">
              <AdminPanelButton icon={<PlusIcon />}>Додати</AdminPanelButton>
            </Link>
          </div>
        </th>
      </tr>
    </thead>
  );
};
