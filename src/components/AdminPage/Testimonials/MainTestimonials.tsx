'use client';

import Link from 'next/link';

import { SingleSlideTestimonial } from './SingleSlideTestimonial';

import { AdminPanelButton, AdminTitle, LanguageSelector } from '@/components/atomic';
import { PlusIcon } from '@/components/common/icons';
import { useTestimonialsSWR } from '@/hooks/SWR/useTestimonialsSWR';
import { TLandingLanguage, useGlobalContext } from '@/store/globalContext';
import { TSlideReview } from '@/types';

export default function MainTestimonials() {
  const { testimonialsData } = useTestimonialsSWR();
  const curLang = useGlobalContext().landingLanguage;

  return (
    <section className="max-h-screen w-full overflow-y-auto bg-base-light px-10 py-[32px]">
      <div className="flex justify-between">
        <AdminTitle>Відгуки</AdminTitle>
        <div className="h-[64px] w-[71px] rounded-md bg-yellow-500 py-[12px]">
          <LanguageSelector currLang={'ua'} changeComponentLang={function (lang: TLandingLanguage): void {
            throw new Error('Function not implemented.');
          } } />
        </div>
      </div>

      <div className="mt-[18px] rounded-[4px] py-[70px] shadow">
        <Link href={'/admin/testimonials/add'}>
          <AdminPanelButton
            icon={<PlusIcon />}
            variant="secondary"
            className="mx-auto"
          >
            Додати відгук
          </AdminPanelButton>
        </Link>
      </div>

      <ul className="mt-[32px] flex flex-col gap-[32px]">
        {Array.isArray(testimonialsData) &&
          testimonialsData.length &&
          testimonialsData?.map((item: TSlideReview) => (
            <li key={item._id}>
              <SingleSlideTestimonial
                slideData={item}
                lang={curLang}
                isImage={item?.imageUrl.split('.')[0] !== 'undefined'}
              />
            </li>
          ))}
      </ul>
    </section>
  );
}
