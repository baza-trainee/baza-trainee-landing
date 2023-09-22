import PartnerEditor from '@/components/AdminPage/Partners/EditorLayout';
import { PartnerEditorProps } from '@/types';

export async function generateStaticParams() {
  return [{ editorType: 'add' }, { editorType: 'edit' }];
}

const EditPage = ({ params }: PartnerEditorProps) => (
  <PartnerEditor params={params} />
);

export default EditPage;
