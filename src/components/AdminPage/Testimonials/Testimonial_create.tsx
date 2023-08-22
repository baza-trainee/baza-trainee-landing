'use client';
import { LanguageSelector } from '@/components/MainPage/Header/LanguageSelector';
import { AdminPanelButton } from '@/components/atomic';
import { AdminTitle } from '@/components/atomic/AdminTitle';
import { TextInputField } from '@/components/atomic/inputs';

export const Testimonial_create = ({ lang }: { lang: 'ua' | 'en' | 'pl' }) => {
  console.log(lang);
  //const testimonialsData = await testimonialsApi.getAll();
  const isFormValid = true;
  const handleSubmit = () => {};
  const resetHandler = () => {};
  const onInputChange = () => {};

  return (
    <>
      <div className="w-full bg-base-light px-[2.4rem] py-[3.2rem]">
        <div>
          <AdminTitle className="mb-[4.5rem]">Додати відгук</AdminTitle>
          <div className="absolute right-[3.2rem] top-[3.2rem] h-[6.4rem] w-[7.1rem] rounded-md border bg-yellow-500 py-[1.2rem]">
            {<LanguageSelector />}
          </div>
        </div>
        <form className="flex flex-col gap-16" onSubmit={handleSubmit}>
          <div className="flex w-full flex-col gap-10 bg-base-dark px-[1.2rem] py-8">
            <div className="flex flex-wrap gap-[2.4rem]">
              <TextInputField
                title="Телефон"
                name="contactsDataList phone1"
                inputType="uk"
                errorText={''}
                value={''}
                onChange={onInputChange}
                placeholder="Введіть телефон"
              />
              <TextInputField
                title="Телефон"
                name="contactsDataList phone1"
                inputType="en"
                errorText={''}
                value={''}
                onChange={onInputChange}
                placeholder="Введіть телефон"
              />
              <TextInputField
                title="Телефон"
                name="contactsDataList phone1"
                inputType="pl"
                errorText={''}
                value={''}
                onChange={onInputChange}
                placeholder="Введіть телефон"
              />
            </div>
          </div>

          <div className="ml-5 flex gap-[1.8rem]">
            <AdminPanelButton type="submit" disabled={!isFormValid}>
              Зберегти зміни
            </AdminPanelButton>
            <AdminPanelButton variant="secondary" onClick={resetHandler}>
              Скасувати
            </AdminPanelButton>
          </div>
        </form>
      </div>
    </>
  );
};
