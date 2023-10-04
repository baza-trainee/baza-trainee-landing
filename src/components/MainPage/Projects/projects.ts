import { TProjectResp } from '@/types';

export const projects: TProjectResp[] = [
  {
    _id: crypto.randomUUID(),
    imageUrl: '/img/projects/lullabies.webp',
    // status: {
    //   en: 'Under development',
    //   pl: 'W budowie',
    //   ua: 'В розробці',
    // },
    deployUrl: '',
    title: {
      en: 'Kolyaskovi - a website-museum for the reproduction of Ukrainian lullabies',
      pl: 'Kolyaskovi - strona-muzeum reprodukcji ukraińskich kołysanek',
      ua: 'Колискові - сайт-музей з відтворення українських колискових',
    },
    creationDate: 1692921600000,
    launchDate: 0,
    complexity: 4,
    isTeamRequired: false,
    teamMembers: [],
  },
  {
    _id: crypto.randomUUID(),
    imageUrl: '/img/projects/museum.webp',
    // status: {
    //   en: 'Under development',
    //   pl: 'W budowie',
    //   ua: 'В розробці',
    // },
    deployUrl: '',
    title: {
      en: 'Website of the Ivan Kavaleridze Museum',
      pl: 'Strona internetowa Muzeum Iwana Kawaleridze',
      ua: 'Сайт музею ім.Івана Кавалерідзе',
    },
    creationDate: 1691366400000,
    launchDate: 0,
    complexity: 4,
    isTeamRequired: false,
    teamMembers: [],
  },
  {
    _id: crypto.randomUUID(),
    imageUrl: '/img/projects/mil.webp',
    // status: {
    //   en: 'Under development',
    //   pl: 'W budowie',
    //   ua: 'В розробці',
    // },
    deployUrl: '',
    title: {
      en: 'ENG for UArmy - a site for learning military English',
      pl: 'ENG for UArmy - strona do nauki wojskowego angielskiego',
      ua: 'ENG for UArmy - сайт з вивчення мілітарної англійської',
    },
    creationDate: 1693872000000,
    launchDate: 0,
    complexity: 3,
    isTeamRequired: false,
    teamMembers: [],
  },
  {
    _id: crypto.randomUUID(),
    imageUrl: '/img/projects/hust.webp',
    // status: {
    //   en: 'Under development',
    //   pl: 'W budowie',
    //   ua: 'В розробці',
    // },
    deployUrl: 'https://hyst.site/',
    title: {
      en: 'Khist is an aggregator of veteran initiatives',
      pl: 'Khist - agregator inicjatyw dla weteranów',
      ua: 'Хист - агрегатор ветеранських ініціатив',
    },
    creationDate: 1690848000000,
    launchDate: 1694883961894,
    complexity: 3,
    isTeamRequired: false,
    teamMembers: [
      {
        teamMember: {
          name: {
            en: 'Olga Ivanova',
            pl: 'Olga Iwanowa',
            ua: 'Ольга Іванова',
          },
          profileUrl: 'https://www.linkedin.com/in/ivolga-kyiv/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Product Owner',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Zhanna Bielan',
            pl: 'Zhanna Bielan',
            ua: 'Жанна Бєлан',
          },
          profileUrl: 'https://www.linkedin.com/in/joan-bielan-068434283/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Project Manager',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Iryna Stoliarova',
            pl: 'Iryna Stoliarova',
            ua: 'Столярова Ірина',
          },
          profileUrl: 'https://www.linkedin.com/in/iryna-stoliarova/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Design',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Olha Butyrska',
            pl: 'Olha Butyrska',
            ua: 'Ольга Бутирська',
          },
          profileUrl: 'https://www.linkedin.com/in/olha-butyrska/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Design',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Julia Kain',
            pl: 'Julia Kain',
            ua: 'Джулія Каїн',
          },
          profileUrl: 'https://www.linkedin.com/in/julia-kain/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Design',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Oleksandra Tereshova',
            pl: 'Oleksandra Tereshova',
            ua: 'Олександра Терехова',
          },
          profileUrl:
            'https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0-%D1%82%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B2%D0%B0-4b483843/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Design',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Danilo Glushko',
            pl: 'Danilo Glushko',
            ua: 'Данило Глушко',
          },
          profileUrl: '',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Front-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Artem Shevchuk',
            pl: 'Artem Shevchuk',
            ua: 'Артем Шевчук',
          },
          profileUrl: 'https://www.linkedin.com/in/artem-shevchuk-b1955b190/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Front-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Kateryna Lanina',
            pl: 'Kateryna Lanina',
            ua: 'Катерина Ланіна',
          },
          profileUrl: 'https://www.linkedin.com/in/kateryna-lanina/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Front-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Danil Zdorik',
            pl: 'Danil Zdorik',
            ua: 'Даніл Здорик',
          },
          profileUrl: 'https://www.linkedin.com/in/zdoryk/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Back-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Yevhen Blokhin',
            pl: 'Yevhen Blokhin',
            ua: 'Євген Блохін',
          },
          profileUrl: 'https://www.linkedin.com/in/ievgen-blokhin',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Liliia Bakalinska',
            pl: 'Liliia Bakalinska',
            ua: 'Лілія Бакалінська',
          },
          profileUrl: 'https://www.linkedin.com/in/liliia-bakalinska/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Olga Savchenko',
            pl: 'Olga Savchenko',
            ua: 'Ольга Савченко',
          },
          profileUrl: 'https://www.linkedin.com/in/olsavchenko/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Yana Glazkova',
            pl: 'Yana Glazkova',
            ua: 'Яна Глазкова',
          },
          profileUrl:
            'https://www.linkedin.com/in/%D1%8F%D0%BD%D0%B0-%D0%B3%D0%BB%D0%B0%D0%B7%D0%BA%D0%BE%D0%B2%D0%B0-241424281/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
    ],
  },
  {
    _id: crypto.randomUUID(),
    imageUrl: '/img/projects/57-42.webp',
    // status: {
    //   en: 'Under development',
    //   pl: 'W budowie',
    //   ua: 'В розробці',
    // },
    deployUrl: '',
    title: {
      en: 'Landing page - fundraising for the 57th Brigade, 42nd Battalion',
      pl: 'Strona docelowa - zbiórka funduszy dla 57 Brygady, 42 Batalionu',
      ua: 'Лендінг - збір коштів для 57-ї бригади 42 батальону',
    },
    creationDate: 1691539200000,
    launchDate: 0,
    complexity: 1,
    isTeamRequired: false,
    teamMembers: [],
  },
  {
    _id: crypto.randomUUID(),
    imageUrl: '/img/projects/murrfecto.webp',
    // status: {
    //   en: 'Done',
    //   pl: 'Zakończony',
    //   ua: 'Завершено',
    // },
    // statusVal: 'active',
    deployUrl: 'https://murrfecto.site',
    title: {
      en: 'Website of a shelter for street animals Murrfecto',
      pl: 'Miejsce schroniska dla zwierząt ulicznych Murrfecto',
      ua: 'Сайт притулку для вуличних тварин Murrfecto',
    },
    creationDate: 1682283600000,
    launchDate: 1686517200000,
    complexity: 2,
    isTeamRequired: false,
    teamMembers: [
      {
        teamMember: {
          _id: crypto.randomUUID(),
          name: {
            en: 'Olga Ivanova',
            pl: 'Olga Iwanowa',
            ua: 'Ольга Іванова',
          },
          profileUrl: 'https://www.linkedin.com/in/ivolga-kyiv/',
        },
        teamMemberRole: {
          name: {
            en: 'Project Manager',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Susanna Salata',
            pl: 'Zuzanna Salata',
            ua: 'Сусанна Салата',
          },
          profileUrl: 'https://www.linkedin.com/in/susanna-salata/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Business Analyst',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Iryna Stolyarova',
            pl: 'Iryna Stolarowa',
            ua: 'Ірина Столярова',
          },
          profileUrl: 'https://www.linkedin.com/in/iryna-stoliarova/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Design',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Svitlana Makarenko (Batrak)',
            pl: 'Switłana Makarenko (Batrak)',
            ua: 'Світлана Макаренко (Батрак)',
          },
          profileUrl:
            'https://www.linkedin.com/in/svetlana-makarenko-batrak-044850261/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Design',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Ivan Mironyuk',
            pl: 'Iwan Mireniuk',
            ua: 'Іван Миронюк',
          },
          profileUrl: 'https://www.linkedin.com/in/ivan-myroniuk-84009525b/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Front-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Ivan Mironyuk',
            pl: 'Iwan Mireniuk',
            ua: 'Іван Миронюк',
          },
          profileUrl: 'https://www.linkedin.com/in/ivan-myroniuk-84009525b/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Back-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Marina Kovaleva',
            pl: 'Marina Kowalowa',
            ua: 'Марина Ковальова',
          },
          profileUrl: 'https://www.linkedin.com/in/marina-kovaleva-b7470b166/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Front-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Olga Sydorenko',
            pl: 'Olga Sydorenko',
            ua: 'Ольга Сидоренко',
          },
          profileUrl:
            'https://www.linkedin.com/in/olha-sydorenko-frontend-developer/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Front-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Tonya Siva',
            pl: 'Tonya Siwa',
            ua: 'Тоня Сива',
          },
          profileUrl: 'https://www.linkedin.com/in/tonya-shyva/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Front-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Jugen Serdiuk',
            pl: 'Jugen Serdiuk',
            ua: 'Євген Сердюк',
          },
          profileUrl: 'https://www.linkedin.com/in/eugene-serdyuk-511969252/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Front-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Jugen Serdiuk',
            pl: 'Jugen Serdiuk',
            ua: 'Євген Сердюк',
          },
          profileUrl: 'https://www.linkedin.com/in/eugene-serdyuk-511969252/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Back-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Ihor Dronishynets',
            pl: 'Ihor Droniszyniec',
            ua: 'Ігор Дронішинець',
          },
          profileUrl: 'https://www.linkedin.com/in/ihordrn/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Back-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Olena Novachenko',
            pl: 'Olena Nowaczenko',
            ua: 'Олена Новаченко',
          },
          profileUrl: 'http://linkedin.com/in/olena-novachenko-b5584925a',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Lesia Chernykh',
            pl: 'Lesia Czernyk',
            ua: 'Леся Черних',
          },
          profileUrl: 'https://www.linkedin.com/in/lesyachernysh/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Inna Fomenko',
            pl: 'Inna Fomenko',
            ua: 'Інна  Фоменко',
          },
          profileUrl: 'https://www.linkedin.com/in/inna-fomenko-63b216266',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Oksana Derkach',
            pl: 'Oksana Derkach',
            ua: 'Оксана Деркач',
          },
          profileUrl: 'https://www.linkedin.com/in/oksana-derkach-52b788105/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Yarina Berezovska',
            pl: 'Jarina Bieriezowska',
            ua: 'Ярина Березовська',
          },
          profileUrl:
            'https://www.linkedin.com/in/yaryna-berezovska-a7b41320a/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
    ],
  },
  {
    _id: crypto.randomUUID(),
    imageUrl: '/img/projects/atack.webp',
    // status: {
    //   en: 'Done',
    //   pl: 'Zakończony',
    //   ua: 'Завершено',
    // },
    // statusVal: 'active',
    deployUrl: 'https://ataka-help.tech',
    title: {
      en: 'Platform about types of cyber fraud AtakaHelp',
      pl: 'Platforma o rodzajach oszustw internetowych AtakaHelp',
      ua: 'Платформа про види кібершахрайства AtakaHelp',
    },
    creationDate: 1683493200000,
    launchDate: 1687726800000,
    complexity: 2,
    isTeamRequired: false,
    teamMembers: [
      {
        teamMember: {
          name: {
            en: 'Olga Ivanova',
            pl: 'Olga Iwanowa',
            ua: 'Ольга Іванова',
          },
          profileUrl: 'https://www.linkedin.com/in/ivolga-kyiv/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Project Manager',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Susanna Salata',
            pl: 'Zuzanna Salata',
            ua: 'Сусанна Салата',
          },
          profileUrl: 'https://www.linkedin.com/in/susanna-salata/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Business Analyst',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Elina Tryberg',
            pl: 'Elina Tryberg',
            ua: 'Еліна Трайберг',
          },
          profileUrl: 'https://www.linkedin.com/in/elinateo/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Design',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Dmytro Shlenskovy',
            pl: 'Dmytro Szlenskowy',
            ua: 'Дмитро Шленськовий',
          },
          profileUrl:
            'https://www.linkedin.com/in/dmytro-shlenskovoy-9970a6171/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Design',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Viktoria Podstrel',
            pl: 'Wiktoria Podstrel',
            ua: 'Вікторія Подстрел',
          },
          profileUrl: 'https://www.linkedin.com/in/viktoria-podstrel/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Design',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Svitlana Makarenko (Batrak)',
            pl: 'Switłana Makarenko (Batrak)',
            ua: 'Світлана Макаренко (Батрак)',
          },
          profileUrl:
            'https://www.linkedin.com/in/svetlana-makarenko-batrak-044850261/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Design',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Iryna Kolesnyk',
            pl: 'Iryna Kolesnyk',
            ua: 'Ірина Колесник',
          },
          profileUrl: 'https://www.linkedin.com/in/iryna-kolesnyk/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Front-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Anna Lysak',
            pl: 'Anna Łysak',
            ua: 'Анна Лисак',
          },
          profileUrl: 'https://www.linkedin.com/in/anna-lysak/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Front-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Vitaly Veshtobey',
            pl: 'Witalij Wiesztobej',
            ua: 'Віталій Вештобей',
          },
          profileUrl: 'https://www.linkedin.com/in/vitaliiveshtobei/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Front-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Marina Kovaleva',
            pl: 'Marina Kowalowa',
            ua: 'Марина Ковальова',
          },
          profileUrl: 'https://www.linkedin.com/in/marina-kovaleva-b7470b166/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Front-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Serhiy Julai',
            pl: 'Serhij Julaj',
            ua: 'Сергій Джулай',
          },
          profileUrl: 'https://www.linkedin.com/in/serhii-dzhulai-330206241/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Back-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Egor Tveritinov',
            pl: 'Jegor Tweritinow',
            ua: 'Єгор Тверитінов',
          },
          profileUrl: 'https://www.linkedin.com/in/yehor-tverytinov/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Back-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Olga Kiyko',
            pl: 'Olga Kijko',
            ua: 'Ольга Кійко',
          },
          profileUrl: 'https://www.linkedin.com/in/olha-kiiko-8a0471262',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Iryna Zozulya',
            pl: 'Iryna Zozulia',
            ua: 'Ірина Зозуля',
          },
          profileUrl: 'https://www.linkedin.com/in/iryna-zozulya/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Olena Krasnozhan',
            pl: 'Olena Krasnożan',
            ua: 'Олена Красножан',
          },
          profileUrl: 'https://www.linkedin.com/in/olena-krasnozhan/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Maryana Hirska',
            pl: 'Mariana Hirska',
            ua: 'Мар’яна Гірська',
          },
          profileUrl: 'https://www.linkedin.com/in/mariana-hirska/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Marina Lebyd',
            pl: 'Marina Lebyd',
            ua: 'Марина Лебідь',
          },
          profileUrl: 'https://www.linkedin.com/in/maryna-lebid-7085701bb/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Iryna Lozova',
            pl: 'Iryna Łozowa',
            ua: 'Ірина Лозова',
          },
          profileUrl: 'https://www.linkedin.com/in/iryna-lozova-20244925a',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Natalia Didenko',
            pl: 'Natalia Didenko',
            ua: 'Наталія Діденко',
          },
          profileUrl: 'https://www.linkedin.com/in/nataliia-didenko-663415176/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Yarina Berezovska',
            pl: 'Jarina Bieriezowska',
            ua: 'Ярина Березовська',
          },
          profileUrl:
            'https://www.linkedin.com/in/yaryna-berezovska-a7b41320a/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Roman Malik',
            pl: 'Roman Malik',
            ua: 'Роман Малик',
          },
          profileUrl: 'https://www.linkedin.com/in/roman-malyk-qa-qc/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Yulia Wozniakivska',
            pl: 'Julia Woźniakowska',
            ua: 'Юлія Возняківська',
          },
          profileUrl: 'https://www.linkedin.com/in/julia-vo/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Timofiy Zalishchuk',
            pl: 'Tymofij Zaliszczuk',
            ua: 'Тимофій Заліщук',
          },
          profileUrl: 'https://www.linkedin.com/in/timothy-zalishchuk/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Andrii Cherkasov',
            pl: 'Andrij Czerkasow',
            ua: 'Андрій Черкасов',
          },
          profileUrl: 'https://www.linkedin.com/in/andrii-cherkasov-011977163/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Natalia Kachan',
            pl: 'Natalii Kachan',
            ua: 'Наталія Качан',
          },
          profileUrl: 'https://www.linkedin.com/in/nataliiakachan/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Inna Fomenko',
            pl: 'Inna Fomenko',
            ua: 'Інна Фоменко',
          },
          profileUrl: 'https://www.linkedin.com/in/inna-fomenko-63b216266',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Kostyantyn Olkhovyk',
            pl: 'Kostiantyn Olchowyk',
            ua: 'Костянтин Ольховик',
          },
          profileUrl:
            'https://www.linkedin.com/in/%D0%BA%D0%BE%D1%81%D1%82%D1%8F%D0%BD%D1%82%D0%B8%D0%BD-%D0%BE%D0%BB%D1%8C%D1%85%D0%BE%D0%B2%D0%B8%D0%BA-a01871273/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
    ],
  },
  {
    _id: crypto.randomUUID(),
    imageUrl: '/img/projects/baza.webp',
    // status: {
    //   en: 'Done',
    //   pl: 'Zakończony',
    //   ua: 'Завершено',
    // },
    // statusVal: 'active',
    deployUrl: 'https://baza-trainee.tech',
    title: {
      en: 'Platform for Baza Trainee Ukraine',
      pl: 'Platforma dla Praktykantów Baza Ukraina',
      ua: 'Платформа для Baza Trainee Ukraine',
    },
    creationDate: 1683234000000,
    launchDate: 1687467600000,
    complexity: 3,
    isTeamRequired: false,
    teamMembers: [
      {
        teamMember: {
          name: {
            en: 'Olga Ivanova',
            pl: 'Olga Iwanowa',
            ua: 'Ольга Іванова',
          },
          profileUrl: 'https://www.linkedin.com/in/ivolga-kyiv/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Project Manager',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Susanna Salata',
            pl: 'Zuzanna Salata',
            ua: 'Сусанна Салата',
          },
          profileUrl: 'https://www.linkedin.com/in/susanna-salata/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Business Analyst',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Iryna Stolyarova',
            pl: 'Iryna Stolarowa',
            ua: 'Ірина Столярова',
          },
          profileUrl: 'https://www.linkedin.com/in/iryna-stoliarova/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Design',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Svitlana Makarenko (Batrak)',
            pl: 'Switłana Makarenko (Batrak)',
            ua: 'Світлана Макаренко (Батрак)',
          },
          profileUrl:
            'https://www.linkedin.com/in/svetlana-makarenko-batrak-044850261/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Design',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Ihor Dronishynets',
            pl: 'Ihor Droniszyniec',
            ua: 'Ігор Дронішинець',
          },
          profileUrl: 'https://www.linkedin.com/in/ihordrn/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Front-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Mykhailo Fysyuk',
            pl: 'Mychajło Fisiuk',
            ua: 'Михайло Фисюк',
          },
          profileUrl: 'https://www.linkedin.com/in/mykhailo-fysiuk/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Front-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Alexander Neshchadin',
            pl: 'Aleksander Neszczadin',
            ua: 'Олександр Нещадін',
          },
          profileUrl:
            'https://www.linkedin.com/in/olexandr-neschadin-804718238/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Front-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Diana Forostyan',
            pl: 'Diana Forostyan',
            ua: 'Діана Форостяна',
          },
          profileUrl: 'https://www.linkedin.com/in/diana-forostiana/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Front-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Ihor Dronishynets',
            pl: 'Ihor Droniszyniec',
            ua: 'Ігор Дронішинець',
          },
          profileUrl: 'https://www.linkedin.com/in/ihordrn/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Back-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Anna Klyba',
            pl: 'Anna Kłyba',
            ua: 'Анна Клиба',
          },
          profileUrl: 'https://www.linkedin.com/in/anna-klyba',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Aleksii Burys',
            pl: 'Aleksy Burys',
            ua: 'Олексій Бурис',
          },
          profileUrl: 'https://www.linkedin.com/in/oleksii-burys-allanq',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Natalia Kuksova',
            pl: 'Natalia Kuksowa',
            ua: 'Наталія Куксова',
          },
          profileUrl: 'https://www.linkedin.com/in/natalia-kuksova-6b2138258/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Rostislav Bagnyuk',
            pl: 'Rostisław Bagniuk',
            ua: 'Ростислав Багнюк',
          },
          profileUrl:
            'https://www.linkedin.com/in/rostyslav-bahniuk-b8ba9a265/?locale=en_US',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Yarina Berezovska',
            pl: 'Jarina Bieriezowska',
            ua: 'Ярина Березовська',
          },
          profileUrl:
            'https://www.linkedin.com/in/yaryna-berezovska-a7b41320a/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Kyrylo Matvienko',
            pl: 'Kiryło Matwienko',
            ua: 'Кирило Матвієнко',
          },
          profileUrl: 'https://www.linkedin.com/in/кирилл-матвиенко-b03668262/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Natalia Zolotukhina',
            pl: 'Natalia Zołotuchina',
            ua: 'Наталія Золотухіна',
          },
          profileUrl: 'https://www.linkedin.com/in/nataliiazolotukhina/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Kateryna Rubanik',
            pl: 'Kateryna Rubanik',
            ua: 'Катерина Рубанік',
          },
          profileUrl: 'http://linkedin.com/in/kateryna-rubanik-6133a6224',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Yevhen Polezhaev',
            pl: 'Jewhen Poleżajew',
            ua: 'Євген Полєжаєв',
          },
          profileUrl: 'http://linkedin.com/in/evgeniy-poliezhaie',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Inna Ladyka',
            pl: 'Inna Ladyka',
            ua: 'Інна Ладика',
          },
          profileUrl: 'https://www.linkedin.com/in/inna-ladyka-a09343241',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Olga Khavronenko',
            pl: 'Olga Chawronenko',
            ua: 'Ольга Хавроненко',
          },
          profileUrl:
            'https://www.linkedin.com/in/%D0%BElha-khavronenko-1b8146266',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Viktoria Yefimenko',
            pl: 'Wiktoria Jefimenko',
            ua: 'Вікторія Єфименко',
          },
          profileUrl: 'https://www.linkedin.com/in/victoriayefimenko/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Vladimir Robota',
            pl: 'Władimir Robota',
            ua: 'Володимир Робота',
          },
          profileUrl: 'https://www.linkedin.com/in/rabota-vladimir-aa3a34225/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Iryna Corelina',
            pl: 'Iryna Corelina',
            ua: 'Ірина Кореліна',
          },
          profileUrl: 'https://www.linkedin.com/in/iryna-korelina-17ba40236/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
    ],
  },
  {
    _id: crypto.randomUUID(),
    imageUrl: '/img/projects/zavr.webp',
    // status: {
    //   en: 'Under development',
    //   pl: 'W budowie',
    //   ua: 'В розробці',
    // },
    // statusVal: 'under-development',
    deployUrl: '',
    title: {
      en: 'Cheetosaurus - a web application with book quizzes for children',
      pl: 'Cheetosaurus - aplikacja internetowa z quizami książkowymi dla dzieci',
      ua: 'Читозаврик - веб-додаток з книжковими вікторинами для дітей',
    },
    creationDate: 1685566800000,
    launchDate: 0,
    complexity: 5,
    isTeamRequired: false,
    teamMembers: [],
  },
  {
    _id: crypto.randomUUID(),
    imageUrl: '/img/projects/1001songs.webp',
    // status: {
    //   en: 'Under development',
    //   pl: 'W budowie',
    //   ua: 'В розробці',
    // },
    // statusVal: 'under-development',
    deployUrl: '',
    title: {
      en: '1001 songs - a site-collection of authentic Ukrainian songs',
      pl: '1001 piosenek - zbiór witryn z autentycznymi ukraińskimi piosenkami',
      ua: '1001 songs - сайт-колекція українських автентичних пісень ',
    },
    creationDate: 1685566800000,
    launchDate: 0,
    complexity: 3,
    isTeamRequired: false,
    teamMembers: [],
  },
  {
    _id: crypto.randomUUID(),
    imageUrl: '/img/projects/lapa.webp',
    // status: {
    //   en: 'Under development',
    //   pl: 'W budowie',
    //   ua: 'В розробці',
    // },
    // statusVal: 'under-development',
    deployUrl: '',
    title: {
      en: 'The website of the shelter for street animals Big Lapa',
      pl: 'Strona schroniska dla zwierząt ulicznych Big Lapa',
      ua: 'Сайт притулку для вуличних тварин Big Lapa',
    },
    creationDate: 1685566800000,
    launchDate: 0,
    complexity: 2,
    isTeamRequired: false,
    teamMembers: [],
  },
  {
    _id: crypto.randomUUID(),
    imageUrl: '/img/projects/feeda-1.webp',
    // status: {
    //   en: 'Under development',
    //   pl: 'W budowie',
    //   ua: 'В розробці',
    // },
    // statusVal: 'under-development',
    deployUrl: '',
    title: {
      en: 'Feeda is a platform for processing applications for participation in Baza Trainee',
      pl: 'Feeda to platforma do rozpatrywania wniosków o udział w Baza Trainee',
      ua: 'Feeda - платформа для обробки заявок на участь у Baza Trainee',
    },
    creationDate: 1687208400000,
    launchDate: 0,
    complexity: 3,
    isTeamRequired: false,
    teamMembers: [],
  },
  {
    _id: crypto.randomUUID(),
    imageUrl: '/img/projects/book.webp',
    // status: {
    //   en: 'Under development',
    //   pl: 'W budowie',
    //   ua: 'В розробці',
    // },
    // statusVal: 'under-development',
    deployUrl: 'https://www.openbookhands.site/',
    title: {
      en: 'The book goes abroad - a humanitarian aid portal',
      pl: 'Książka wyjeżdża za granicę - portal pomocy humanitarnej',
      ua: 'Книжка їде за кордон - портал гуманітарної допомоги',
    },
    creationDate: 1688245200000,
    launchDate: 1693526400000,
    complexity: 2,
    isTeamRequired: false,
    teamMembers: [
      {
        teamMember: {
          name: {
            en: 'Natalia Gaivanovich',
            pl: 'Natalia Gaivanovich',
            ua: 'Наталя Гайванович',
          },
          profileUrl: 'https://www.linkedin.com/in/natalya-gayvanovych/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Project Manager',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Olga Prozorova',
            pl: 'Olga Prozorova',
            ua: 'Ольга Прозорова',
          },
          profileUrl: 'https://www.linkedin.com/in/olga-prozorova-248151255/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Project Manager',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Max Fedoryshin',
            pl: 'Max Fedoryshin',
            ua: 'Макс Федоришин',
          },
          profileUrl: 'https://www.linkedin.com/in/max-fedoryshyn-8992881b7/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Design',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Roman Paliokha',
            pl: 'Roman Paliokha',
            ua: 'Роман Пальоха',
          },
          profileUrl: 'https://www.linkedin.com/in/romanpaliokha/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Design',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Volodymyr Loboda',
            pl: 'Volodymyr Loboda',
            ua: 'Володимир Лобода',
          },
          profileUrl:
            'https://www.linkedin.com/in/volodymyr-loboda-021935119/?originalSubdomain=pl',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Design',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Olga Bondarenko',
            pl: 'Olga Bondarenko',
            ua: 'Ольга Бондаренко',
          },
          profileUrl: 'https://www.linkedin.com/in/olha-bondarenko-74a093229/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Front-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Igor Vakaliuk',
            pl: 'Igor Vakaliuk',
            ua: 'Ігор Вакалюк',
          },
          profileUrl: 'https://www.linkedin.com/in/ihor-vakaliuk/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Front-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Sergii Tokaryev',
            pl: 'Sergii Tokaryev',
            ua: 'Сергій Токарєв',
          },
          profileUrl: 'https://www.linkedin.com/in/serhii-tokariev-4a1060155/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Front-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Oleksandr Brusyltsev',
            pl: 'Oleksandr Brusyltsev',
            ua: 'Олександр Брусильцев',
          },
          profileUrl: 'https://www.linkedin.com/in/oleksandr-brusyltsev/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Back-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Kateryna Pogrebna',
            pl: 'Kateryna Pogrebna',
            ua: 'Катерина Погребна',
          },
          profileUrl: 'https://www.linkedin.com/in/katerynapogrebna/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Zinaida Usikova',
            pl: 'Zinaida Usikova',
            ua: 'Зінаїда Усікова',
          },
          profileUrl: 'https://www.linkedin.com/in/zinaida-usikova/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Nikolay Osetrov',
            pl: 'Nikolay Osetrov',
            ua: 'Микола Осетров',
          },
          profileUrl: 'https://www.linkedin.com/in/nikolayosetrov/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Nataliya Kuhn',
            pl: 'Nataliya Kuhn',
            ua: 'Наталія Кун',
          },
          profileUrl: 'https://www.linkedin.com/in/nataliya-kuhn/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
    ],
  },
  {
    _id: crypto.randomUUID(),
    imageUrl: '/img/projects/arms.webp',
    // status: {
    //   en: 'Done',
    //   pl: 'Zakończony',
    //   ua: 'Завершено',
    // },
    // statusVal: 'active',
    deployUrl: 'https://obijmy59.online/',
    title: {
      en: `Landing -  fundraising for the 59th Brigade 'Steel Arms'`,
      pl: `Lądowanie - zbiórka pieniędzy dla 59 Brygady 'Stalowej Broni'`,
      ua: 'Лендинг - збір коштів для 59-бригади “Сталеві Обійми”',
    },
    creationDate: 1689368400000,
    launchDate: 1690705554200,
    complexity: 2,
    isTeamRequired: false,
    teamMembers: [
      {
        teamMember: {
          name: {
            en: 'Danilo Osadchenko',
            pl: 'Danilo Osadchenko',
            ua: 'Данило Осадченко',
          },
          profileUrl: 'https://www.linkedin.com/in/danylo-osadchenko/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Back-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Bogdan Taran',
            pl: 'Bogdan Taran',
            ua: 'Богдан Таран',
          },
          profileUrl: 'https://www.linkedin.com/in/bohdan-taran-2168b1220',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Business Analyst',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Susanna Salata',
            pl: 'Susanna Salata',
            ua: 'Сусанна Салата',
          },
          profileUrl: 'https://www.linkedin.com/in/susanna-salata/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'BA/PM Mentor',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Ostap Seniuk',
            pl: 'Ostap Seniuk',
            ua: 'Остап Сенюк',
          },
          profileUrl: 'https://www.linkedin.com/in/ostap-seniuk/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Design',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Viktoria Dzhus',
            pl: 'Viktoria Dzhus',
            ua: 'Вікторія Джус',
          },
          profileUrl: 'https://www.linkedin.com/in/victoriadzhus/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Design',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Maria Popova',
            pl: 'Maria Popova',
            ua: 'Марія Попова',
          },
          _id: crypto.randomUUID(),
          profileUrl: '',
        },
        teamMemberRole: {
          name: {
            en: 'Design',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Inna Kijan',
            pl: 'Inna Kijan',
            ua: 'Інна Кіян',
          },
          profileUrl: 'https://www.linkedin.com/in/inna-kiyan-586138263/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Design',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Anastazja Worona',
            pl: 'Anastazja Worona',
            ua: 'Анастасія Ворона',
          },
          profileUrl:
            'https://www.linkedin.com/in/anastasiia-vorona-6a5165220/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Design',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Sergiusz Onopriienko',
            pl: 'Sergiusz Onopriienko',
            ua: 'Сергій Онопрієнко',
          },
          profileUrl:
            'https://www.linkedin.com/in/serhii-onopriienko-099215174/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Front-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Maksym Kulbako',
            pl: 'Maksym Kulbako',
            ua: 'Максим Кубалко',
          },
          profileUrl: 'https://www.linkedin.com/in/maksym-kulbako-69028847',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Front-end',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Olga Iwanowa',
            pl: 'Olga Iwanowa',
            ua: 'Ольга Іванова',
          },
          profileUrl: 'https://www.linkedin.com/in/ivolga-kyiv/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Product Owner',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Svitlana Diachenko',
            pl: 'Svitlana Diachenko',
            ua: 'Світлана Дяченко',
          },
          profileUrl: 'https://www.linkedin.com/in/svitlanadiachenko/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Olena Czornobrywiec',
            pl: 'Olena Czornobrywiec',
            ua: 'Олена Чорнобривець',
          },
          profileUrl: 'http://www.linkedin.com/in/olenachornobryvets',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Katarzyna Żarowa',
            pl: 'Katarzyna Żarowa',
            ua: 'Катерина Жарова',
          },
          profileUrl: 'https://www.linkedin.com/in/kateryna-zharova/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Sergiusz Sztiepan-Antoniuk',
            pl: 'Sergiusz Sztiepan-Antoniuk',
            ua: 'Сергій Штефан-Антонюк',
          },
          profileUrl:
            'https://www.linkedin.com/in/serhii-shtefan-antoniuk-91610b258?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfvGVVsReQpuZ9lDTBekIFA%3D%3D',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Lilia Oliynyk',
            pl: 'Lilia Oliynyk',
            ua: 'Лілія Олійник',
          },
          profileUrl: 'https://sk.linkedin.com/in/lily-oliynyk-299605282',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Paweł Chlebnikow',
            pl: 'Paweł Chlebnikow',
            ua: 'Павло Хлебніков',
          },
          profileUrl: 'https://www.linkedin.com/in/pavelkhlebnikov/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Tatiana Kowalska',
            pl: 'Tatiana Kowalska',
            ua: 'Тетяна Ковальська',
          },
          profileUrl: 'http://linkedin.com/in/tetiana-kovalska-43b32022b',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
      {
        teamMember: {
          name: {
            en: 'Walenty Jelkin',
            pl: 'Walenty Jelkin',
            ua: 'Валентин Елькін',
          },
          profileUrl: 'https://www.linkedin.com/in/valentyn-yelkin-295637261/',
          _id: crypto.randomUUID(),
        },
        teamMemberRole: {
          name: {
            en: 'Quality Assurance',
            pl: '',
            ua: '',
          },
          _id: crypto.randomUUID(),
        },
      },
    ],
  },
];
