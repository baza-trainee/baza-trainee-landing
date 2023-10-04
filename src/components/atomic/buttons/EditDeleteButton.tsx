import { ButtonHTMLAttributes } from 'react';

import { DeleteIcon, EditIcon } from '@/components/common/icons';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: 'edit' | 'delete';
}

export const EditDeleteButton = ({ icon, ...otherProps }: Props) => (
  <button
    {...otherProps}
    className="flex-center h-16 w-16 rounded-md border border-white bg-neutral-800 text-white"
  >
    {icon === 'edit' ? <EditIcon /> : <DeleteIcon />}
  </button>
);
