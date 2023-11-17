import { ProjectEditor } from '@/components/AdminPage/Projects/ProjectEditor';

export default function EditProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  return <ProjectEditor projectId={params.projectId} />;
}
