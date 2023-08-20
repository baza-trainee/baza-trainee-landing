import { Testimonials_main } from '@/components/AdminPage/Testimonials';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pl' }, { lang: 'ua' }];
}

export default function Testimonials({
  params: { lang },
}: {
  params: { lang: 'en' | 'pl' | 'ua' };
}) {
  return <Testimonials_main lang={lang} />;
}
