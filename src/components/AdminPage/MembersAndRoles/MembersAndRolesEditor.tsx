'use client';

import { useParams } from 'next/navigation';

import { MembersForm } from './MembersForm';
import { RolesForm } from './RolesForm';

type TProps = {
  entity: 'members' | 'roles';
};

export const MembersAndRolesEditor = ({ entity }: TProps) => {
  const { id } = useParams();
  const separatedId = typeof id === 'string' ? id : undefined;

  const title = separatedId ? 'Редагування' : 'Додавання';

  return (
    <section className="mx-[2.4rem] my-[3.2rem] w-full">
      <div className="mb-[3.2rem] flex gap-[3.2rem]">
        <h2 className="text-[3.2rem] font-bold text-admin-header">{title}</h2>
      </div>

      {entity === 'members' && <MembersForm id={separatedId} />}
      {entity === 'roles' && <RolesForm id={separatedId} />}
    </section>
  );
};
