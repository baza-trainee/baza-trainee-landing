import PartnerEditor from '@/components/AdminPage/Partners/EditorLayout';

export async function generateStaticParams() {
  return [{ editorType: 'add' }, { editorType: 'edit' }];
}

const EditPage = ({
  params,
}: {
  params: { editorType: 'add' | 'edit'; partnerId: string | undefined };
}) => {
  return (
    <>
      <PartnerEditor params={params} />
    </>
  );
};

export default EditPage;
