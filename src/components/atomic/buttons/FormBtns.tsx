import Link from 'next/link';

import { AdminPanelButton } from '@/components/atomic';

type TBtnsProps = {
  isEditMode?: boolean;
  disabled?: boolean;
};

export const FormBtns = ({ isEditMode, disabled }: TBtnsProps) => {
  const okBtnName = isEditMode ? 'Зберегти зміни' : 'Додати';

  return (
    <div className="mt-14 flex gap-7">
      <AdminPanelButton disabled={disabled} type="submit">
        {okBtnName}
      </AdminPanelButton>

      <Link href=".">
        <AdminPanelButton variant="secondary">Скасувати</AdminPanelButton>
      </Link>
    </div>
  );
};
