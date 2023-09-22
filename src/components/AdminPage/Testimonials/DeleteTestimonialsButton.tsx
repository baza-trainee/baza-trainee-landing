import { useTestimonialsSWR } from '@/hooks/SWR/useTestimonialsSWR';
import { ReactElement } from 'react';

type Props = {
  id: string;
  children: ReactElement;
};

export const DeleteTestimonialsButton: any = ({ id, children }: Props) => {
  const { delByIdSlider } = useTestimonialsSWR();

  return (
    <button type="button" onClick={() => delByIdSlider(id)}>
      {children}
    </button>
  );
};