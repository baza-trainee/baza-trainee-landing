import { LanguageSelector } from '@/components/MainPage/Header/LanguageSelector';
import { SingleSlide } from '@/components/MainPage/Reviews/SingleSlide';
import { AdminPanelButton } from '@/components/atomic';
import { AdminTitle } from '@/components/atomic/AdminTitle';
import { ActionAdminPanelButton } from '@/components/atomic/buttons/ActionAdminPanelButton';
import { DeleteIcon, EditIcon } from '@/components/common/icons';
import testimonialsApi from '@/utils/API/testimonials';
import Link from 'next/link';

const itemContainerStyle =
  'flex h-[19.6rem] max-w-[111.8] items-center justify-center rounded bg-base-dark shadow-md ';

export const Testimonials_main = async ({
  lang,
}: {
  lang: 'ua' | 'en' | 'pl';
}) => {
  console.log(lang);
  const testimonialsData = await testimonialsApi.getAll();

  return (
    <>
      <div className="w-full bg-base-light px-[2.4rem] py-[3.2rem]">
        <div>
          <AdminTitle className="mb-[4.5rem]">Відгуки</AdminTitle>
          <div className="absolute right-[3.2rem] top-[3.2rem] h-[6.4rem] w-[7.1rem] rounded-md border bg-yellow-500 py-[1.2rem]">
            <LanguageSelector />
          </div>
        </div>
        <div className="flex flex-col gap-[3.2rem]">
          <div className={itemContainerStyle}>
            <Link href={`./create`}>
              <AdminPanelButton variant="secondary">
                + Додати відгук
              </AdminPanelButton>
            </Link>
          </div>
          {testimonialsData.map((el) => (
            <div className={itemContainerStyle} key={el._id}>
              <div className="flex gap-[1.2rem]">
                <SingleSlide slideData={el} lang={lang} />
                <div className="flex items-end justify-end gap-[1rem]">
                  <Link href={`edit/${el._id}`}>
                    <ActionAdminPanelButton icon={<EditIcon />} />
                  </Link>
                  <ActionAdminPanelButton icon={<DeleteIcon />} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
