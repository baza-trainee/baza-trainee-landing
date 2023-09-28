import { AdminPanelButton } from '@/components/atomic';
import { PlusIcon } from '@/components/common/icons';

const cellStyle = 'border-none p-0';
const bgStyle = 'mb-10 flex h-[7.2rem] items-center bg-yellow-200';

export const ListHeader = ({ switchMode }: { switchMode: () => void }) => {
  return (
    <thead>
      <tr>
        <th className={cellStyle + ' w-full'}>
          <div className={bgStyle + ' rounded-s-md pl-5'}>
            <span>Прізвище та Ім’я</span>
          </div>
        </th>

        <th className={`${cellStyle} w-1/3`}>
          <div className={bgStyle}>
            <span>Спеціалізація</span>
          </div>
        </th>

        <th className={`${cellStyle} w-[18rem]`}>
          <div className={`${bgStyle} justify-center rounded-e-md`}>
            <AdminPanelButton icon={<PlusIcon />} onClick={switchMode}>
              Додати
            </AdminPanelButton>
          </div>
        </th>
      </tr>
    </thead>
  );
};
