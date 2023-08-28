import { dictionaries } from '@/app/[lang]/dictionaries';
import { ContainerMaxW1200, ParticipantButtonLink } from '@/components/atomic';
import { TLandingLanguage } from '@/store/globalContext';

export const Forms = async ({ lang }: { lang: TLandingLanguage }) => {
  const dict = await dictionaries[lang]();
  return (
    <section className="text-center" id="forms">
      <ContainerMaxW1200 className="flex-col">
        <h2 className="mb-10 text-[3.8rem] font-bold md:text-[4rem]">
          {dict.invite.bazaTraineeInvite}
        </h2>

        <p className="mb-[4.8rem] text-[2.4rem]">{dict.invite.chooseRole}</p>

        <nav className="flex flex-wrap justify-center gap-[2rem] md:flex-nowrap xl:gap-[3.2rem]">
          <ParticipantButtonLink linkTo="https://docs.google.com/forms/d/1QsjBjv90-GNkMN_fm2-Nsn0ROlx-yHiyYyou2_oyH2Q/edit">
            {dict.invite.role.participant}
          </ParticipantButtonLink>

          <ParticipantButtonLink linkTo="https://docs.google.com/forms/d/1Y_3FiBw_TYl8BvGq-tA_fcLmULz6p9K8T4WPuLmoc_k/edit">
            {dict.invite.role.mentor}
          </ParticipantButtonLink>

          <ParticipantButtonLink linkTo="https://docs.google.com/forms/d/1Z2zOR8_WgCtq8cQ5ihsJKLUrfxIWA_Iq-rQiuXNd21Y/edit">
            {dict.invite.role.partner}
          </ParticipantButtonLink>

          <ParticipantButtonLink linkTo="https://docs.google.com/forms/d/1gbHRVDY2kPOZe9D5GzLoFqJbzZxfR_xwXgMTOnmDttM/edit">
            {dict.invite.role.customer}
          </ParticipantButtonLink>
        </nav>
      </ContainerMaxW1200>
    </section>
  );
};
