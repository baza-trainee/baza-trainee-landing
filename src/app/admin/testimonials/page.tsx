'use client';

import { SingleSlideTestimonial } from '@/components/AdminPage/Testimonials/SingleSlideTestimonial';
import LanguageSelector from '@/components/MainPage/Header/LanguageSelector';
import { AdminPanelButton, AdminTitle } from '@/components/atomic';
import { PlusIcon } from '@/components/common/icons';
import { useTestimonialsSWR } from '@/hooks/SWR/useTestimonialsSWR';
import { useGlobalContext } from '@/store/globalContext';
import { ITestimonial } from '@/types';
import Link from 'next/link';

export default function Testimonials() {
  const { testimonialsData } = useTestimonialsSWR();
  console.log(testimonialsData);
  const curLang = useGlobalContext().landingLanguage;

  return (
    <section className="max-h-screen w-full overflow-y-auto bg-base-light px-10">
      <div className="mt-[32px] flex justify-between">
        <AdminTitle>Відгуки</AdminTitle>
        <div className="h-[64px] w-[71px] rounded-md bg-yellow-500 py-[12px]">
          <LanguageSelector />
        </div>
      </div>

      <div className="mx-auto my-[70px] w-[37.8rem]">
        <Link href={'/admin/testimonials/add'}>
          <AdminPanelButton icon={<PlusIcon />} variant="secondary">
            Додати відгук
          </AdminPanelButton>
        </Link>
      </div>

      <ul className='flex flex-col gap-[32px]'>
        {testimonialsData &&
          testimonialsData?.map((item: ITestimonial) => (
            <li key={item._id}>
              <SingleSlideTestimonial slideData={item} lang={curLang} />
            </li>
          ))}
      </ul>
    </section>
  );
}
