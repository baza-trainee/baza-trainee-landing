import { FC } from 'react';
import Link from 'next/link';

import { AdminPanelButton } from '@/components/atomic';
import { PlusIcon } from '@/components/common/icons';

type TSlideBtn = {
  totalSlides?: number;
  maxSlides?: number;
};

export const AddSlideButton: FC<TSlideBtn> = ({ totalSlides, maxSlides }) => {
  const isDisabled = !(totalSlides && maxSlides) || totalSlides >= maxSlides;
  const tooltipText = `Максимальна кількість слайдів ${maxSlides}`;

  const AddBtn = () => (
    <AdminPanelButton
      icon={<PlusIcon />}
      variant="secondary"
      disabled={isDisabled}
    >
      Додати слайд
    </AdminPanelButton>
  );

  return isDisabled ? (
    <div className="flex flex-col items-center gap-4">
      <AddBtn />
      <p>{tooltipText}</p>
    </div>
  ) : (
    <Link href="/admin/slider/add-slider">
      <AddBtn />
    </Link>
  );
};
