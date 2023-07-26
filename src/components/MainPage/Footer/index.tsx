import Link from 'next/link';

import { TContactsInfo } from '@/types';

import { ContainerMaxW1200 } from '@/components/atomic';
import {
  LinkedInIcon,
  LogoMain,
  MailIcon,
  PhoneIcon,
  TelegramIcon,
} from '@/components/common/icons';
import { formatPhoneNumber } from '@/utils/formatPhoneNumber';

const anchorLinksList = [
  { title: 'Проєкти', href: '#projects' },
  { title: 'Партнери', href: '#partners' },
  { title: 'Взяти участь', href: '#forms' },
];

const officialDocsList = [
  { title: 'Політика конфіденційності', href: '?document=policy.pdf' },
  { title: 'Правила користування сайтом', href: '?document=rules.pdf' },
  { title: 'Статут', href: '#' },
  { title: 'Звітність', href: '#' },
];

const getContacts = async () => {
  const noData: TContactsInfo = {
    contactsDataList: {
      phone1: 380636286630,
      phone2: 380675681788,
      email: 'info@baza-trainee.tech',
    },
    socialsMediaList: {
      linkedin: 'https://www.linkedin.com/company/baza-trainee/',
      facebook: '#',
      telegram: 'https://t.me/+CBXkAJlsCy83ZDYy',
    },
  };
  return noData; /*
  try {
    return await contactsApi.getData();
  } catch (_) {
    return noData;
  }*/
};

const FooterLink = ({ href = '', title = '', underline = false, ...args }) => (
  <Link
    href={href}
    {...args}
    className={`visited:text-yellow-800 hover:text-yellow-500 ${
      underline ? 'underline underline-offset-8' : ''
    }`}
  >
    {title}
  </Link>
);

export const Footer = async () => {
  const contactsInfo: TContactsInfo = await getContacts();

  return (
    <footer className="bg-neutral-700 pb-12 pt-16" id="footer">
      <ContainerMaxW1200 className="flex-col text-white">
        <nav className="flex flex-col justify-between gap-[3.2rem] sm:min-h-[18.4rem] sm:flex-row">
          <Link href={'/'} className=" w-96">
            <LogoMain className="h-32 w-32 md:h-[12.4rem] md:w-[12.4rem]" />
          </Link>
          <div className="flex w-full flex-col flex-wrap justify-between gap-[3.2rem] sm:min-h-[18.4rem] sm:flex-row ">
            <div className="flex flex-col gap-4 lg:w-64">
              {anchorLinksList.map(({ title, href }) => (
                <FooterLink href={href} key={title + href} title={title} />
              ))}
            </div>

            <div className="flex flex-col gap-4 lg:w-96">
              {officialDocsList.map(({ title, href }, i) => (
                <FooterLink
                  key={title + href}
                  href={href}
                  title={title}
                  scroll={false}
                  underline={i < 2}
                />
              ))}
            </div>

            <div className="flex flex-col justify-between gap-4 sm:w-full sm:flex-row lg:w-auto lg:flex-col">
              <div className="flex flex-col gap-4 lg:w-[27.6rem]">
                <p className="flex gap-3">
                  <PhoneIcon />
                  <span>
                    {formatPhoneNumber(contactsInfo.contactsDataList.phone1)}
                  </span>
                </p>
                <p className="flex gap-3">
                  <PhoneIcon />
                  <span>
                    {formatPhoneNumber(contactsInfo.contactsDataList.phone2)}
                  </span>
                </p>
                <p className="flex gap-3">
                  <MailIcon />
                  <span>{contactsInfo.contactsDataList.email}</span>
                </p>
              </div>

              <div className="mt-[3.2rem] flex w-96 gap-[3.2rem] sm:mt-auto">
                <Link
                  href={contactsInfo.socialsMediaList.linkedin}
                  target="blank"
                >
                  <LinkedInIcon className="fill-yellow-500 hover:fill-yellow-700 active:fill-yellow-800" />
                </Link>
                <Link
                  href={contactsInfo.socialsMediaList.telegram}
                  target="blank"
                >
                  <TelegramIcon className="fill-yellow-500 hover:fill-yellow-700 active:fill-yellow-800" />
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <span className="mt-12 text-[1.4rem] text-neutral-75 sm:mt-10">
          Розробка BazaTraineeUkraine 2023 Усі права захищені.
        </span>
      </ContainerMaxW1200>
    </footer>
  );
};
