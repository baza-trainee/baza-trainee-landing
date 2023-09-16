import { useRouter } from 'next/navigation';

import { AdminPanelButton } from '@/components/atomic';

type TBtnsProps = {
  isEditMode?: boolean;
  disabled?: boolean;
};

export const FormBtns = ({ isEditMode, disabled }: TBtnsProps) => {
  const router = useRouter();
  const okBtnName = isEditMode ? 'Зберегти зміни' : 'Додати';

  return (
    <div className="mt-14 flex gap-7">
      <AdminPanelButton disabled={disabled} type="submit">
        {okBtnName}
      </AdminPanelButton>

      <AdminPanelButton variant="secondary" onClick={() => router.back()}>
        Скасувати
      </AdminPanelButton>
    </div>
  );
};
