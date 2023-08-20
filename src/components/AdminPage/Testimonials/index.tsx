import LanguageSelector from '@/components/MainPage/Header/LanguageSelector';
import { SingleSlide } from '@/components/MainPage/Reviews/SingleSlide';
import { AdminPanelButton } from '@/components/atomic';
import { AdminTitle } from '@/components/atomic/AdminTitle';
import testimonialsApi from '@/utils/API/testimonials';

const itemContainerStyle =
  'flex h-[19.6rem] w-[111.8] items-center justify-center rounded bg-base-dark shadow-md';
export const Testimonials_main = async () => {
  const testimonialsData = await testimonialsApi.getAll();
  //console.log(testimonialsData);
  const getTestimonials = async () => {
    try {
      const result = await testimonialsApi.getAll();

      return result;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  return (
    <>
      <div className="w-full bg-base-light px-[2.4rem] py-[3.2rem]">
        <div>
          <AdminTitle className="mb-[4.5rem]">Відгуки</AdminTitle>
          <div className="absolute right-[3.2rem] top-[3.2rem] h-[6.4rem] w-[7.1rem] bg-yellow-500 py-[1.2rem]">
            <LanguageSelector />
          </div>
        </div>
        <div className="flex flex-col gap-[3.2rem]">
          <div className={itemContainerStyle}>
            <AdminPanelButton variant="secondary">
              + Додати відгук
            </AdminPanelButton>
          </div>
          {testimonialsData.map((el) => (
            <div className={itemContainerStyle} key={el._id}>
              <SingleSlide slideData={el} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
