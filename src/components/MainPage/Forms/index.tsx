import { ContainerMaxW1200, ParticipantButtonLink } from '@/components/atomic';

export const Forms = () => {
  return (
    <section className="text-center" id="forms">
      <ContainerMaxW1200 className="flex-col">
        <h2 className="mb-9 text-[3rem] font-bold md:text-[4rem]">
          Baza Trainee Ukraine запрошує приєднатись до команди
        </h2>

        <p className="mb-[4.8rem] text-[2.4rem]">Оберіть свою роль у проєкті</p>

        <nav className="flex flex-wrap justify-center gap-[3.2rem] md:flex-nowrap">
          <ParticipantButtonLink linkTo="https://docs.google.com/forms/d/1QsjBjv90-GNkMN_fm2-Nsn0ROlx-yHiyYyou2_oyH2Q/edit">
            Я учасник
          </ParticipantButtonLink>

          <ParticipantButtonLink linkTo="https://docs.google.com/forms/d/1Y_3FiBw_TYl8BvGq-tA_fcLmULz6p9K8T4WPuLmoc_k/edit">
            Я Ментор
          </ParticipantButtonLink>

          <ParticipantButtonLink linkTo="https://docs.google.com/forms/d/1Z2zOR8_WgCtq8cQ5ihsJKLUrfxIWA_Iq-rQiuXNd21Y/edit">
            Я партнер
          </ParticipantButtonLink>

          <ParticipantButtonLink linkTo="https://docs.google.com/forms/d/1gbHRVDY2kPOZe9D5GzLoFqJbzZxfR_xwXgMTOnmDttM/edit">
            Я замовник
          </ParticipantButtonLink>
        </nav>
      </ContainerMaxW1200>
    </section>
  );
};
