import Link from 'next/link';

import { TContactsInfo } from '@/types';

import { dictionaries } from '@/app/[lang]/dictionaries';
import { ContainerMaxW1200 } from '@/components/atomic';
import {
  LinkedInIcon,
  LogoMain,
  MailIcon,
  PhoneIcon,
  TelegramIcon,
} from '@/components/common/icons';
import { TLandingLanguage } from '@/store/globalContext';
import { formatPhoneNumber } from '@/utils/formatPhoneNumber';
import { headers } from 'next/headers';

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
    className={`hover:text-yellow-500 active:text-yellow-800 ${
      underline ? 'underline underline-offset-8' : ''
    }`}
  >
    {title}
  </Link>
);

export const Footer = async ({ lang }: { lang: TLandingLanguage }) => {
  const headersList = headers();
  const pathname = headersList.get('x-invoke-path') || '';
  const contactsInfo: TContactsInfo = await getContacts();
  const dict = await dictionaries[lang]();
  const anchorLinksList = [
    { title: dict.footer?.projects, href: '#projects' },
    { title: dict.footer?.partners, href: '#partners' },
    { title: dict.footer?.participate, href: '#forms' },
  ];

  const officialDocsList = [
    {
      title: dict.footer.privacyPolicy,
      href: '?document=policy.pdf',
    },
    {
      title: dict.footer.rulesForUsingTheSite,
      href: '?document=rules.pdf',
    },
    {
      title: dict.footer.statute,
      href: '?document=statut.pdf',
    },
    { title: dict.footer.accountability, href: '#' },
  ];

  return (
    <footer className="bg-neutral-700 pb-12 pt-16" id="footer">
      <ContainerMaxW1200 className="flex-col gap-12 text-white lg:gap-0">
        <nav className="grid gap-[3.2rem] sm:min-h-[18.4rem] sm:grid-cols-3 sm:flex-row lg:grid-cols-4">
          <Link href={pathname} className="cursor-pointer sm:row-span-2">
            <LogoMain className="h-32 w-32 sm:h-[12.4rem] sm:w-[12.4rem]" />
          </Link>

          <div className="flex flex-col gap-4 lg:row-span-2 lg:w-full">
            {anchorLinksList.map(({ title, href }) => (
              <FooterLink href={href} key={title + href} title={title} />
            ))}
          </div>

          <div className="flex flex-col gap-4 lg:row-span-2 lg:w-full">
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

          <div className="flex flex-col gap-4 lg:w-full">
            <p className="flex gap-3">
              <PhoneIcon />
              <span className="shrink whitespace-nowrap">
                {formatPhoneNumber(contactsInfo.contactsDataList!.phone1!)}
              </span>
            </p>
            <p className="flex gap-3">
              <PhoneIcon />
              <span className="shrink whitespace-nowrap">
                {formatPhoneNumber(contactsInfo.contactsDataList!.phone2!)}
              </span>
            </p>
            <p className="flex gap-3">
              <MailIcon className="shrink-0" />
              <span>{contactsInfo.contactsDataList!.email + ''}</span>
            </p>
          </div>

          <div className=" flex gap-[3.2rem] ">
            <Link
              href={
                contactsInfo.socialsMediaList!.linkedin
                  ? contactsInfo.socialsMediaList!.linkedin
                  : ''
              }
              target="blank"
            >
              <LinkedInIcon className="fill-yellow-500 hover:fill-yellow-700 active:fill-yellow-800" />
            </Link>
            <Link
              href={
                contactsInfo.socialsMediaList!.telegram
                  ? contactsInfo.socialsMediaList!.telegram
                  : ''
              }
              target="blank"
            >
              <TelegramIcon className="fill-yellow-500 hover:fill-yellow-700 active:fill-yellow-800" />
            </Link>
          </div>
        </nav>

        <span className="text-[1.4rem] text-neutral-75 sm:mt-0">
          {dict.footer.allRightsReserved}
        </span>
      </ContainerMaxW1200>
    </footer>
  );
};
