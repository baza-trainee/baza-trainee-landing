import { DeleteIcon, EditIcon } from '@/components/common/icons';
import { ButtonHTMLAttributes, FC } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: 'edit' | 'delete';
}

export const EditDeleteButton: FC<Props> = ({ icon, ...otherProps }) => (
  <button
    {...otherProps}
    className="flex-center h-16 w-16 rounded-md border border-white bg-neutral-800 text-white"
  >
    {icon === 'edit' ? <EditIcon /> : <DeleteIcon />}
  </button>
);
