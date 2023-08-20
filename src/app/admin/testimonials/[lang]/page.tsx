import { Testimonials_main } from '@/components/AdminPage/Testimonials';

export default function Testimonials({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return <Testimonials_main lang={lang} />;
}
