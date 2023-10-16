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
  const tooltipText = `Слот ${totalSlides} із ${maxSlides} слайдів`;

  const AddBtn = () => (
    <AdminPanelButton
      icon={<PlusIcon />}
      variant="secondary"
      disabled={isDisabled}
    >
      Додати слайд
    </AdminPanelButton>
  );

  return (
    <div className="flex flex-col items-center gap-8">
      {isDisabled ? (
        <AddBtn />
      ) : (
        <Link href="/admin/slider/add">
          <AddBtn />
        </Link>
      )}
      <p>{tooltipText}</p>
    </div>
  );
};
