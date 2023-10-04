import { FC } from 'react';
import Link from 'next/link';

import { AdminPanelButton } from '@/components/atomic';

type TSlideBtn = {
  dataInfo: {
    totalSlides: number;
    maxSlides: number;
  };
};

export const AddSlideButton: FC<TSlideBtn> = ({ dataInfo }) => {
  const { totalSlides, maxSlides } = dataInfo;
  const tooltipText = `Максимальна кількість слайдів ${maxSlides}`;

  if (totalSlides >= maxSlides) {
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
