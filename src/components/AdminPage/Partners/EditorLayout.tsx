import { PartnerForm } from './PartnerForm';

import { AdminTitle } from '@/components/atomic/AdminTitle';

export const PartnerEditor = ({ partnerId }: { partnerId?: string }) => {
  const title = partnerId ? 'Редагування' : 'Додати партнера';

  return (
    <div className="w-full bg-base-light px-[2.4rem] pb-[5.6rem] pt-[3.2rem]">
      <AdminTitle className="mb-[4.4rem] tracking-wide">{title}</AdminTitle>

      <PartnerForm partnerId={partnerId} />
    </div>
  );
};
