import { MemberForm } from './MemberForm';
import { RoleForm } from './RoleForm';
import { TMemberAndRoleEditor } from './types';

export const MemberAndRoleEditor = ({
  entity,
  memberOrRoleId,
}: TMemberAndRoleEditor) => {
  const title = memberOrRoleId ? 'Редагування' : 'Додавання';

  return (
    <section className="mx-[2.4rem] my-[3.2rem] w-full">
      <div className="mb-[3.2rem] flex gap-[3.2rem]">
        <h2 className="text-[3.2rem] font-bold text-admin-header">{title}</h2>
      </div>

      {entity === 'roles' && <RoleForm roleId={memberOrRoleId} />}
      {entity === 'members' && <MemberForm memberId={memberOrRoleId} />}
    </section>
  );
};
