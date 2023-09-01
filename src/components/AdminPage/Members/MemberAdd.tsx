import { MemberForm } from './MemberForm';

export const MemberAdd = () => {
  return (
    <section className="mx-[2.4rem] my-[3.2rem] w-full">
      <div className="mb-[3.2rem] flex gap-[3.2rem]">
        <h2 className="text-[3.2rem] font-bold text-admin-header">
          Додавання учасника
        </h2>
      </div>

        <MemberForm />
    </section>
  );
};
