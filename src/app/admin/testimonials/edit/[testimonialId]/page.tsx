import { TestimonialEditor } from '@/components/AdminPage/Testimonials/TestimonialEditor';

const EditTestimonial = ({ params }: { params: { testimonialId: string } }) => {
  return <TestimonialEditor testimonialId={params.testimonialId} />;
};

export default EditTestimonial;
