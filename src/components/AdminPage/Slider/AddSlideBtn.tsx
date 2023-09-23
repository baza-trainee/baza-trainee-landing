import { AdminPanelButton } from '@/components/atomic';
import Link from 'next/link';
import { FC } from 'react';

type TSlideBtn = {
  dataLength: number;
};

export const AddSlideButton: FC<TSlideBtn> = ({ dataLength }) => {
  const maxSlides = 5;
  const tooltipText = `Максимальна кількість слайдів ${maxSlides}`;

  if (dataLength >= maxSlides) {
    return (
      <div className="flex flex-col items-center gap-2">
        <AdminPanelButton variant="secondary" disabled>
          + Додати слайд
        </AdminPanelButton>
        <p>{tooltipText}</p>
      </div>
    );
  }

  return (
    <AdminPanelButton variant="secondary">
      <Link href="/admin/slider/add-slider">+ Додати слайд</Link>
    </AdminPanelButton>
  );
};
