import { useTestimonialsSWR } from '@/hooks/SWR/useTestimonialsSWR';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  children: React.ReactNode;
}

export const DeleteTestimonialsButton = ({ id, children }: Props) => {
  const { deleteTestimonial } = useTestimonialsSWR();

  return (
    <button type="button" onClick={() => deleteTestimonial(id)}>
      {children}
    </button>
  );
};
