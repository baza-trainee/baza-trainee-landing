import Link from 'next/link';

import { contactsApi } from '@/utils/API/contacts';
import { TContactsInfo } from '@/types';

import { ContainerMaxW1200 } from '@/components/atomic';
import {
  FacebookIcon,
  LinkedInIcon,
  LogoMain,
  MailIcon,
  PhoneIcon,
} from '@/components/common/icons';

const anchorLinksList = [
  { title: 'Проєкти', href: '#projects' },
  { title: 'Партнери', href: '#partners' },
  { title: 'Взяти участь', href: '#forms' },
];

const officialDocsList = [
  { title: 'Політика конфіденційності', href: '/docs/policy.pdf' },
  { title: 'Правила користування сайтом', href: '/docs/rules.pdf' },
  { title: 'Статут', href: '#' },
  { title: 'Звітність', href: '#' },
];

const getContacts = async () => {
  const noData = {
    contactsDataList: {
      phone1: 'n/a',
      phone2: 'n/a',
      email: 'n/a',
    },
    socialsMediaList: {
      linkedin: '#',
      facebook: '#',
    },
  };

  try {
    return await contactsApi.getData();
  } catch (_) {
    return noData;
  }
};

export const Footer = async () => {
  const contactsInfo: TContactsInfo = await getContacts();

  return (
    <footer className="bg-neutral-700 pb-12 pt-16" id="footer">
      <ContainerMaxW1200 className="flex-col text-white">
        <nav className="flex flex-col justify-between gap-[3.2rem] sm:min-h-[18.4rem] sm:flex-row">
          <div className="lg:w-full ">
            <LogoMain className="h-32 w-32 md:h-[12.4rem] md:w-[12.4rem]" />
          </div>

          <div className="flex flex-col gap-4 lg:w-full">
            {anchorLinksList.map(({ title, href }) => (
              <Link href={href} key={title + href}>
                {title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4 lg:w-full">
            {officialDocsList.map(({ title, href }, i) => (
              <Link
                key={title + href}
                href={href}
                className={i < 2 ? 'underline underline-offset-8' : ''}
              >
                {title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4 lg:w-full">
            <Link
              href={'tel:' + contactsInfo.contactsDataList.phone1}
              className="flex gap-3"
            >
              <PhoneIcon />
              <span>{contactsInfo.contactsDataList.phone1 + ''}</span>
            </Link>
            <Link
              href={'tel:' + contactsInfo.contactsDataList.phone2}
              className="flex gap-3"
            >
              <PhoneIcon />
              <span>{contactsInfo.contactsDataList.phone2 + ''}</span>
            </Link>
            <Link
              href={'mailto:' + contactsInfo.contactsDataList.email}
              className="flex gap-3"
            >
              <MailIcon />
              <span>{contactsInfo.contactsDataList.email + ''}</span>
            </Link>

            <div className="mt-[3.2rem] flex gap-[3.2rem] sm:mt-auto">
              <Link href={contactsInfo.socialsMediaList.linkedin}>
                <LinkedInIcon className="fill-yellow-500 hover:fill-yellow-700 active:fill-yellow-800" />
              </Link>
              <Link href={contactsInfo.socialsMediaList.facebook}>
                <FacebookIcon className="fill-yellow-500 hover:fill-yellow-700 active:fill-yellow-800" />
              </Link>
            </div>
          </div>
        </nav>

        <span className="mt-12 text-[1.4rem] text-neutral-75 sm:mt-0">
          Розробка BazaTraineeUkraine 2023 Усі права захищені.
        </span>
      </ContainerMaxW1200>
    </footer>
  );
};
