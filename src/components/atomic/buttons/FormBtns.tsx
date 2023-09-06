import Link from 'next/link';

import { AdminPanelButton } from '@/components/atomic';

export const FormBtns = ({ isEditMode }: { isEditMode?: boolean }) => {
  const okBtnName = isEditMode ? 'Зберегти зміни' : 'Додати';

  return (
    <div className="mt-14 flex gap-7">
      <AdminPanelButton type="submit">{okBtnName}</AdminPanelButton>

      <Link href=".">
        <AdminPanelButton variant="secondary">Скасувати</AdminPanelButton>
      </Link>
    </div>
  );
};
