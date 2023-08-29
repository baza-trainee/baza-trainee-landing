import { AdminPanelButton } from '@/components/atomic';
import { PlusIcon } from '@/components/common/icons';

export const ListHeader = () => {
  return (
    <thead>
      <div className="flex w-full rounded-md bg-yellow-200 px-2 py-3">
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>
            <span className="ml-11 mr-auto">Прізвище та Ім’я</span>
          </th>
          <th>
            <AdminPanelButton icon={<PlusIcon />}>Додати</AdminPanelButton>
          </th>
        </tr>
      </div>
    </thead>
  );
};
