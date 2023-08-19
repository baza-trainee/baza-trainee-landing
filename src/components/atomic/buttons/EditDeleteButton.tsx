import { DeleteIcon, EditIcon } from '@/components/common/icons';
import { ButtonHTMLAttributes, FC } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  action: 'edit' | 'delete';
}

export const EditDeleteButton: FC<Props> = ({ action, ...otherProps }) => (
  <button
    {...otherProps}
    className="flex-center h-16 w-16 rounded-md border border-white bg-neutral-800 text-white"
  >
    {action === 'edit' ? <EditIcon /> : <DeleteIcon />}
  </button>
);
