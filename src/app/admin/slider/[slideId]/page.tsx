import { AddEditAdminSlider } from '@/components/AdminPage/Slider/AddEditSlider';

export default function SliderEdit({
  params,
}: {
  params: { slideId: string };
}) {
  return (
    <AddEditAdminSlider title="Редагувати слайд" slideId={params.slideId} />
  );
}
