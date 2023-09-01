import { AdminPanelButton, InputField } from '@/components/atomic';
import { TextInputField } from '@/components/atomic/inputs';
import Link from 'next/link';

export const MemberForm = () => {
  return (
    <>
      <div className="grid w-[105rem] grid-cols-3 gap-10 px-5 py-11">
        <TextInputField inputType="uk" title="Прізвище та ім’я" />
        <TextInputField inputType="en" />
        <TextInputField inputType="pl" />
        <TextInputField title="Linkedin" />
      </div>

      <div className="mt-14 flex gap-7">
        <AdminPanelButton>Зберегти зміни</AdminPanelButton>
        <Link href=".">
          <AdminPanelButton variant="secondary">Скасувати</AdminPanelButton>
        </Link>
      </div>
    </>
  );
};
