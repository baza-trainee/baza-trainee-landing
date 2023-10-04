import { ReactNode } from 'react';

import { useTestimonialsSWR } from '@/hooks/SWR/useTestimonialsSWR';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  children: ReactNode;
}

export const DeleteTestimonialsButton = ({ id, children }: Props) => {
  const { deleteTestimonial } = useTestimonialsSWR();

  return (
    <button type="button" onClick={() => deleteTestimonial(id)}>
      {children}
    </button>
  );
};
