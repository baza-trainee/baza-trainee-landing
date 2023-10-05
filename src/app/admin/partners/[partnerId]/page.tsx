import { PartnerEditor } from '@/components/AdminPage/Partners/EditorLayout';

export default function EditMemberPage({
  params,
}: {
  params: { partnerId: string };
}) {
  return <PartnerEditor partnerId={params.partnerId} />;
}
