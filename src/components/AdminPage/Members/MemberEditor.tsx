'use client';

import { useParams } from 'next/navigation';

import { MemberForm } from './MemberForm';

export const MemberEditor = () => {
  const { id } = useParams();
  const separatedId = typeof id === 'string' ? id : undefined;

  const title = separatedId ? 'Редагування учасника' : 'Додавання учасника';

  return (
    <section className="mx-[2.4rem] my-[3.2rem] w-full">
      <div className="mb-[3.2rem] flex gap-[3.2rem]">
        <h2 className="text-[3.2rem] font-bold text-admin-header">{title}</h2>
      </div>

      <MemberForm id={separatedId} />
    </section>
  );
};
