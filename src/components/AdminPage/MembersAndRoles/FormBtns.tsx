import Link from 'next/link';
import { AdminPanelButton } from '@/components/atomic';

export const FormBtns = () => {
  return (
    <div className="mt-14 flex gap-7">
      <AdminPanelButton type="submit">Зберегти зміни</AdminPanelButton>
      <Link href=".">
        <AdminPanelButton variant="secondary">Скасувати</AdminPanelButton>
      </Link>
    </div>
  );
};
