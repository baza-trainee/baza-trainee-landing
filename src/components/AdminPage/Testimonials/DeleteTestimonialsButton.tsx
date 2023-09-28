import { useTestimonialsSWR } from '@/hooks/SWR/useTestimonialsSWR';
import { ReactNode } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  children: ReactNode;
}

export const DeleteTestimonialsButton = ({ id, children }: Props) => {
  const { delByIdSlider } = useTestimonialsSWR();

  return (
    <button type="button" onClick={() => delByIdSlider(id)}>
      {children}
    </button>
  );
};
