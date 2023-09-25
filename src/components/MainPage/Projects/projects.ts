import { IProject } from '@/types';

export const projects = [
  {
    _id: crypto.randomUUID(),
    title: {
      en: 'lullabies',
      pl: 'lullabies',
      ua: 'lullabies',
    },
    imageUrl: '/img/projects/lullabies.webp',
    status: {
      en: 'Under development',
      pl: 'W budowie',
      ua: 'В розробці',
    },
    deployUrl: '',
    description: {
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
    title: {
      en: 'museum',
      pl: 'museum',
      ua: 'museum',
    },
    imageUrl: '/img/projects/museum.webp',
    status: {
      en: 'Under development',
      pl: 'W budowie',
      ua: 'В розробці',
    },
    deployUrl: '',
    description: {
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
    title: {
      en: 'army',
      pl: 'army',
      ua: 'army',
    },
    imageUrl: '/img/projects/mil.webp',
    status: {
      en: 'Under development',
      pl: 'W budowie',
      ua: 'В розробці',
    },
    deployUrl: '',
    description: {
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
    title: {
      en: 'hust',
      pl: 'hust',
      ua: 'hust',
    },
    imageUrl: '/img/projects/hust.webp',
    status: {
      en: 'Under development',
      pl: 'W budowie',
      ua: 'В розробці',
    },
    deployUrl: 'https://hyst.site/',
    description: {
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
        user: {
          name: {
            en: 'Olga Ivanova',
            pl: 'Olga Iwanowa',
            ua: 'Ольга Іванова',
          },
          deployUrl: 'https://www.deployUrledin.com/in/ivolga-kyiv/',
        },
        role: {
          name: 'Product Owner',
        },
      },
      {
        user: {
          name: {
            en: 'Zhanna Bielan',
            pl: 'Zhanna Bielan',
            ua: 'Жанна Бєлан',
          },
          deployUrl: 'https://www.deployUrledin.com/in/joan-bielan-068434283/',
        },
        role: {
          name: 'Project Manager',
        },
      },
      {
        user: {
          name: {
            en: 'Iryna Stoliarova',
            pl: 'Iryna Stoliarova',
            ua: 'Столярова Ірина',
          },
          deployUrl: 'https://www.deployUrledin.com/in/iryna-stoliarova/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: {
            en: 'Olha Butyrska',
            pl: 'Olha Butyrska',
            ua: 'Ольга Бутирська',
          },
          deployUrl: 'https://www.deployUrledin.com/in/olha-butyrska/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: {
            en: 'Julia Kain',
            pl: 'Julia Kain',
            ua: 'Джулія Каїн',
          },
          deployUrl: 'https://www.deployUrledin.com/in/julia-kain/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: {
            en: 'Oleksandra Tereshova',
            pl: 'Oleksandra Tereshova',
            ua: 'Олександра Терехова',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/%D0%BE%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0-%D1%82%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B2%D0%B0-4b483843/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: {
            en: 'Danilo Glushko',
            pl: 'Danilo Glushko',
            ua: 'Данило Глушко',
          },
          deployUrl: '',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Artem Shevchuk',
            pl: 'Artem Shevchuk',
            ua: 'Артем Шевчук',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/artem-shevchuk-b1955b190/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Kateryna Lanina',
            pl: 'Kateryna Lanina',
            ua: 'Катерина Ланіна',
          },
          deployUrl: 'https://www.deployUrledin.com/in/kateryna-lanina/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Danil Zdorik',
            pl: 'Danil Zdorik',
            ua: 'Даніл Здорик',
          },
          deployUrl: 'https://www.deployUrledin.com/in/zdoryk/',
        },
        role: {
          name: 'Back-end',
        },
      },
      {
        user: {
          name: {
            en: 'Yevhen Blokhin',
            pl: 'Yevhen Blokhin',
            ua: 'Євген Блохін',
          },
          deployUrl: 'https://www.deployUrledin.com/in/ievgen-blokhin',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Liliia Bakalinska',
            pl: 'Liliia Bakalinska',
            ua: 'Лілія Бакалінська',
          },
          deployUrl: 'https://www.deployUrledin.com/in/liliia-bakalinska/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Olga Savchenko',
            pl: 'Olga Savchenko',
            ua: 'Ольга Савченко',
          },
          deployUrl: 'https://www.deployUrledin.com/in/olsavchenko/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Yana Glazkova',
            pl: 'Yana Glazkova',
            ua: 'Яна Глазкова',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/%D1%8F%D0%BD%D0%B0-%D0%B3%D0%BB%D0%B0%D0%B7%D0%BA%D0%BE%D0%B2%D0%B0-241424281/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
    ],
  },
  {
    _id: crypto.randomUUID(),
    title: {
      en: '57-42',
      pl: '57-42',
      ua: '57-42',
    },
    imageUrl: '/img/projects/57-42.webp',
    status: {
      en: 'Under development',
      pl: 'W budowie',
      ua: 'В розробці',
    },
    deployUrl: '',
    description: {
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
    title: {
      en: 'Murrfecto',
      pl: 'Murrfecto',
      ua: 'Murrfecto',
    },
    imageUrl: '/img/projects/murrfecto.webp',
    status: {
      en: 'Done',
      pl: 'Zakończony',
      ua: 'Завершено',
    },
    statusVal: 'active',
    deployUrl: 'https://murrfecto.site',
    description: {
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
        user: {
          _id: '',
          name: {
            en: 'Olga Ivanova',
            pl: 'Olga Iwanowa',
            ua: 'Ольга Іванова',
          },
          deployUrl: 'https://www.deployUrledin.com/in/ivolga-kyiv/',
        },
        role: {
          name: 'Project Manager',
        },
      },
      {
        user: {
          name: {
            en: 'Susanna Salata',
            pl: 'Zuzanna Salata',
            ua: 'Сусанна Салата',
          },
          deployUrl: 'https://www.deployUrledin.com/in/susanna-salata/',
        },
        role: {
          name: 'Business Analyst',
        },
      },
      {
        user: {
          name: {
            en: 'Iryna Stolyarova',
            pl: 'Iryna Stolarowa',
            ua: 'Ірина Столярова',
          },
          deployUrl: 'https://www.deployUrledin.com/in/iryna-stoliarova/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: {
            en: 'Svitlana Makarenko (Batrak)',
            pl: 'Switłana Makarenko (Batrak)',
            ua: 'Світлана Макаренко (Батрак)',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/svetlana-makarenko-batrak-044850261/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: {
            en: 'Ivan Mironyuk',
            pl: 'Iwan Mireniuk',
            ua: 'Іван Миронюк',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/ivan-myroniuk-84009525b/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Ivan Mironyuk',
            pl: 'Iwan Mireniuk',
            ua: 'Іван Миронюк',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/ivan-myroniuk-84009525b/',
        },
        role: {
          name: 'Back-end',
        },
      },
      {
        user: {
          name: {
            en: 'Marina Kovaleva',
            pl: 'Marina Kowalowa',
            ua: 'Марина Ковальова',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/marina-kovaleva-b7470b166/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Olga Sydorenko',
            pl: 'Olga Sydorenko',
            ua: 'Ольга Сидоренко',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/olha-sydorenko-frontend-developer/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Tonya Siva',
            pl: 'Tonya Siwa',
            ua: 'Тоня Сива',
          },
          deployUrl: 'https://www.deployUrledin.com/in/tonya-shyva/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Jugen Serdiuk',
            pl: 'Jugen Serdiuk',
            ua: 'Євген Сердюк',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/eugene-serdyuk-511969252/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Jugen Serdiuk',
            pl: 'Jugen Serdiuk',
            ua: 'Євген Сердюк',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/eugene-serdyuk-511969252/',
        },
        role: {
          name: 'Back-end',
        },
      },
      {
        user: {
          name: {
            en: 'Ihor Dronishynets',
            pl: 'Ihor Droniszyniec',
            ua: 'Ігор Дронішинець',
          },
          deployUrl: 'https://www.deployUrledin.com/in/ihordrn/',
        },
        role: {
          name: 'Back-end',
        },
      },
      {
        user: {
          name: {
            en: 'Olena Novachenko',
            pl: 'Olena Nowaczenko',
            ua: 'Олена Новаченко',
          },
          deployUrl: 'http://deployUrledin.com/in/olena-novachenko-b5584925a',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Lesia Chernykh',
            pl: 'Lesia Czernyk',
            ua: 'Леся Черних',
          },
          deployUrl: 'https://www.deployUrledin.com/in/lesyachernysh/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Inna Fomenko',
            pl: 'Inna Fomenko',
            ua: 'Інна  Фоменко',
          },
          deployUrl: 'https://www.deployUrledin.com/in/inna-fomenko-63b216266',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Oksana Derkach',
            pl: 'Oksana Derkach',
            ua: 'Оксана Деркач',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/oksana-derkach-52b788105/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Yarina Berezovska',
            pl: 'Jarina Bieriezowska',
            ua: 'Ярина Березовська',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/yaryna-berezovska-a7b41320a/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
    ],
  },
  {
    _id: crypto.randomUUID(),
    title: {
      en: 'Ataka Help',
      pl: 'Ataka Help',
      ua: 'Ataka Help',
    },
    imageUrl: '/img/projects/atack.webp',
    status: {
      en: 'Done',
      pl: 'Zakończony',
      ua: 'Завершено',
    },
    statusVal: 'active',
    deployUrl: 'https://ataka-help.tech',
    description: {
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
        user: {
          name: {
            en: 'Olga Ivanova',
            pl: 'Olga Iwanowa',
            ua: 'Ольга Іванова',
          },
          deployUrl: 'https://www.deployUrledin.com/in/ivolga-kyiv/',
        },
        role: {
          name: 'Project Manager',
        },
      },
      {
        user: {
          name: {
            en: 'Susanna Salata',
            pl: 'Zuzanna Salata',
            ua: 'Сусанна Салата',
          },
          deployUrl: 'https://www.deployUrledin.com/in/susanna-salata/',
        },
        role: {
          name: 'Business Analyst',
        },
      },
      {
        user: {
          name: {
            en: 'Elina Tryberg',
            pl: 'Elina Tryberg',
            ua: 'Еліна Трайберг',
          },
          deployUrl: 'https://www.deployUrledin.com/in/elinateo/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: {
            en: 'Dmytro Shlenskovy',
            pl: 'Dmytro Szlenskowy',
            ua: 'Дмитро Шленськовий',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/dmytro-shlenskovoy-9970a6171/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: {
            en: 'Viktoria Podstrel',
            pl: 'Wiktoria Podstrel',
            ua: 'Вікторія Подстрел',
          },
          deployUrl: 'https://www.deployUrledin.com/in/viktoria-podstrel/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: {
            en: 'Svitlana Makarenko (Batrak)',
            pl: 'Switłana Makarenko (Batrak)',
            ua: 'Світлана Макаренко (Батрак)',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/svetlana-makarenko-batrak-044850261/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: {
            en: 'Iryna Kolesnyk',
            pl: 'Iryna Kolesnyk',
            ua: 'Ірина Колесник',
          },
          deployUrl: 'https://www.deployUrledin.com/in/iryna-kolesnyk/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Anna Lysak',
            pl: 'Anna Łysak',
            ua: 'Анна Лисак',
          },
          deployUrl: 'https://www.deployUrledin.com/in/anna-lysak/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Vitaly Veshtobey',
            pl: 'Witalij Wiesztobej',
            ua: 'Віталій Вештобей',
          },
          deployUrl: 'https://www.deployUrledin.com/in/vitaliiveshtobei/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Marina Kovaleva',
            pl: 'Marina Kowalowa',
            ua: 'Марина Ковальова',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/marina-kovaleva-b7470b166/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Serhiy Julai',
            pl: 'Serhij Julaj',
            ua: 'Сергій Джулай',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/serhii-dzhulai-330206241/',
        },
        role: {
          name: 'Back-end',
        },
      },
      {
        user: {
          name: {
            en: 'Egor Tveritinov',
            pl: 'Jegor Tweritinow',
            ua: 'Єгор Тверитінов',
          },
          deployUrl: 'https://www.deployUrledin.com/in/yehor-tverytinov/',
        },
        role: {
          name: 'Back-end',
        },
      },
      {
        user: {
          name: {
            en: 'Olga Kiyko',
            pl: 'Olga Kijko',
            ua: 'Ольга Кійко',
          },
          deployUrl: 'https://www.deployUrledin.com/in/olha-kiiko-8a0471262',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Iryna Zozulya',
            pl: 'Iryna Zozulia',
            ua: 'Ірина Зозуля',
          },
          deployUrl: 'https://www.deployUrledin.com/in/iryna-zozulya/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Olena Krasnozhan',
            pl: 'Olena Krasnożan',
            ua: 'Олена Красножан',
          },
          deployUrl: 'https://www.deployUrledin.com/in/olena-krasnozhan/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Maryana Hirska',
            pl: 'Mariana Hirska',
            ua: 'Мар’яна Гірська',
          },
          deployUrl: 'https://www.deployUrledin.com/in/mariana-hirska/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Marina Lebyd',
            pl: 'Marina Lebyd',
            ua: 'Марина Лебідь',
          },
          deployUrl: 'https://www.deployUrledin.com/in/maryna-lebid-7085701bb/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Iryna Lozova',
            pl: 'Iryna Łozowa',
            ua: 'Ірина Лозова',
          },
          deployUrl: 'https://www.deployUrledin.com/in/iryna-lozova-20244925a',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Natalia Didenko',
            pl: 'Natalia Didenko',
            ua: 'Наталія Діденко',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/nataliia-didenko-663415176/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Yarina Berezovska',
            pl: 'Jarina Bieriezowska',
            ua: 'Ярина Березовська',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/yaryna-berezovska-a7b41320a/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Roman Malik',
            pl: 'Roman Malik',
            ua: 'Роман Малик',
          },
          deployUrl: 'https://www.deployUrledin.com/in/roman-malyk-qa-qc/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Yulia Wozniakivska',
            pl: 'Julia Woźniakowska',
            ua: 'Юлія Возняківська',
          },
          deployUrl: 'https://www.deployUrledin.com/in/julia-vo/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Timofiy Zalishchuk',
            pl: 'Tymofij Zaliszczuk',
            ua: 'Тимофій Заліщук',
          },
          deployUrl: 'https://www.deployUrledin.com/in/timothy-zalishchuk/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Andrii Cherkasov',
            pl: 'Andrij Czerkasow',
            ua: 'Андрій Черкасов',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/andrii-cherkasov-011977163/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Natalia Kachan',
            pl: 'Natalii Kachan',
            ua: 'Наталія Качан',
          },
          deployUrl: 'https://www.deployUrledin.com/in/nataliiakachan/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Inna Fomenko',
            pl: 'Inna Fomenko',
            ua: 'Інна Фоменко',
          },
          deployUrl: 'https://www.deployUrledin.com/in/inna-fomenko-63b216266',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Kostyantyn Olkhovyk',
            pl: 'Kostiantyn Olchowyk',
            ua: 'Костянтин Ольховик',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/%D0%BA%D0%BE%D1%81%D1%82%D1%8F%D0%BD%D1%82%D0%B8%D0%BD-%D0%BE%D0%BB%D1%8C%D1%85%D0%BE%D0%B2%D0%B8%D0%BA-a01871273/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
    ],
  },
  {
    _id: crypto.randomUUID(),
    title: {
      en: 'baza',
      pl: 'baza',
      ua: 'baza',
    },
    imageUrl: '/img/projects/baza.webp',
    status: {
      en: 'Done',
      pl: 'Zakończony',
      ua: 'Завершено',
    },
    statusVal: 'active',
    deployUrl: 'https://baza-trainee.tech',
    description: {
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
        user: {
          name: {
            en: 'Olga Ivanova',
            pl: 'Olga Iwanowa',
            ua: 'Ольга Іванова',
          },
          deployUrl: 'https://www.deployUrledin.com/in/ivolga-kyiv/',
        },
        role: {
          name: 'Project Manager',
        },
      },
      {
        user: {
          name: {
            en: 'Susanna Salata',
            pl: 'Zuzanna Salata',
            ua: 'Сусанна Салата',
          },
          deployUrl: 'https://www.deployUrledin.com/in/susanna-salata/',
        },
        role: {
          name: 'Business Analyst',
        },
      },
      {
        user: {
          name: {
            en: 'Iryna Stolyarova',
            pl: 'Iryna Stolarowa',
            ua: 'Ірина Столярова',
          },
          deployUrl: 'https://www.deployUrledin.com/in/iryna-stoliarova/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: {
            en: 'Svitlana Makarenko (Batrak)',
            pl: 'Switłana Makarenko (Batrak)',
            ua: 'Світлана Макаренко (Батрак)',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/svetlana-makarenko-batrak-044850261/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: {
            en: 'Ihor Dronishynets',
            pl: 'Ihor Droniszyniec',
            ua: 'Ігор Дронішинець',
          },
          deployUrl: 'https://www.deployUrledin.com/in/ihordrn/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Mykhailo Fysyuk',
            pl: 'Mychajło Fisiuk',
            ua: 'Михайло Фисюк',
          },
          deployUrl: 'https://www.deployUrledin.com/in/mykhailo-fysiuk/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Alexander Neshchadin',
            pl: 'Aleksander Neszczadin',
            ua: 'Олександр Нещадін',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/olexandr-neschadin-804718238/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Diana Forostyan',
            pl: 'Diana Forostyan',
            ua: 'Діана Форостяна',
          },
          deployUrl: 'https://www.deployUrledin.com/in/diana-forostiana/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Ihor Dronishynets',
            pl: 'Ihor Droniszyniec',
            ua: 'Ігор Дронішинець',
          },
          deployUrl: 'https://www.deployUrledin.com/in/ihordrn/',
        },
        role: {
          name: 'Back-end',
        },
      },
      {
        user: {
          name: {
            en: 'Anna Klyba',
            pl: 'Anna Kłyba',
            ua: 'Анна Клиба',
          },
          deployUrl: 'https://www.deployUrledin.com/in/anna-klyba',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Aleksii Burys',
            pl: 'Aleksy Burys',
            ua: 'Олексій Бурис',
          },
          deployUrl: 'https://www.deployUrledin.com/in/oleksii-burys-allanq',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Natalia Kuksova',
            pl: 'Natalia Kuksowa',
            ua: 'Наталія Куксова',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/natalia-kuksova-6b2138258/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Rostislav Bagnyuk',
            pl: 'Rostisław Bagniuk',
            ua: 'Ростислав Багнюк',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/rostyslav-bahniuk-b8ba9a265/?locale=en_US',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Yarina Berezovska',
            pl: 'Jarina Bieriezowska',
            ua: 'Ярина Березовська',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/yaryna-berezovska-a7b41320a/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Kyrylo Matvienko',
            pl: 'Kiryło Matwienko',
            ua: 'Кирило Матвієнко',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/кирилл-матвиенко-b03668262/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Natalia Zolotukhina',
            pl: 'Natalia Zołotuchina',
            ua: 'Наталія Золотухіна',
          },
          deployUrl: 'https://www.deployUrledin.com/in/nataliiazolotukhina/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Kateryna Rubanik',
            pl: 'Kateryna Rubanik',
            ua: 'Катерина Рубанік',
          },
          deployUrl: 'http://deployUrledin.com/in/kateryna-rubanik-6133a6224',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Yevhen Polezhaev',
            pl: 'Jewhen Poleżajew',
            ua: 'Євген Полєжаєв',
          },
          deployUrl: 'http://deployUrledin.com/in/evgeniy-poliezhaie',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Inna Ladyka',
            pl: 'Inna Ladyka',
            ua: 'Інна Ладика',
          },
          deployUrl: 'https://www.deployUrledin.com/in/inna-ladyka-a09343241',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Olga Khavronenko',
            pl: 'Olga Chawronenko',
            ua: 'Ольга Хавроненко',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/%D0%BElha-khavronenko-1b8146266',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Viktoria Yefimenko',
            pl: 'Wiktoria Jefimenko',
            ua: 'Вікторія Єфименко',
          },
          deployUrl: 'https://www.deployUrledin.com/in/victoriayefimenko/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Vladimir Robota',
            pl: 'Władimir Robota',
            ua: 'Володимир Робота',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/rabota-vladimir-aa3a34225/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Iryna Corelina',
            pl: 'Iryna Corelina',
            ua: 'Ірина Кореліна',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/iryna-korelina-17ba40236/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
    ],
  },
  {
    _id: crypto.randomUUID(),
    title: {
      en: 'Cheetosaurus',
      pl: 'Cheetosaurus',
      ua: 'Читозаврик',
    },
    imageUrl: '/img/projects/zavr.webp',
    status: {
      en: 'Under development',
      pl: 'W budowie',
      ua: 'В розробці',
    },
    statusVal: 'under-development',
    deployUrl: '',
    description: {
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
    title: {
      en: '1001 songs',
      pl: '1001 songs',
      ua: '1001 songs',
    },
    imageUrl: '/img/projects/1001songs.webp',
    status: {
      en: 'Under development',
      pl: 'W budowie',
      ua: 'В розробці',
    },
    statusVal: 'under-development',
    deployUrl: '',
    description: {
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
    title: {
      en: 'Big Lapa',
      pl: 'Big Lapa',
      ua: 'Big Lapa',
    },
    imageUrl: '/img/projects/lapa.webp',
    status: {
      en: 'Under development',
      pl: 'W budowie',
      ua: 'В розробці',
    },
    statusVal: 'under-development',
    deployUrl: '',
    description: {
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
    title: {
      en: 'feeda',
      pl: 'feeda',
      ua: 'feeda',
    },
    imageUrl: '/img/projects/feeda-1.webp',
    status: {
      en: 'Under development',
      pl: 'W budowie',
      ua: 'В розробці',
    },
    statusVal: 'under-development',
    deployUrl: '',
    description: {
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
    title: {
      en: 'book',
      pl: 'książka',
      ua: 'книга',
    },
    imageUrl: '/img/projects/book.webp',
    status: {
      en: 'Under development',
      pl: 'W budowie',
      ua: 'В розробці',
    },
    statusVal: 'under-development',
    deployUrl: 'https://www.openbookhands.site/',
    description: {
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
        user: {
          name: {
            en: 'Natalia Gaivanovich',
            pl: 'Natalia Gaivanovich',
            ua: 'Наталя Гайванович',
          },
          deployUrl: 'https://www.deployUrledin.com/in/natalya-gayvanovych/',
        },
        role: {
          name: 'Project Manager',
        },
      },
      {
        user: {
          name: {
            en: 'Olga Prozorova',
            pl: 'Olga Prozorova',
            ua: 'Ольга Прозорова',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/olga-prozorova-248151255/',
        },
        role: {
          name: 'Project Manager',
        },
      },
      {
        user: {
          name: {
            en: 'Max Fedoryshin',
            pl: 'Max Fedoryshin',
            ua: 'Макс Федоришин',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/max-fedoryshyn-8992881b7/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: {
            en: 'Roman Paliokha',
            pl: 'Roman Paliokha',
            ua: 'Роман Пальоха',
          },
          deployUrl: 'https://www.deployUrledin.com/in/romanpaliokha/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: {
            en: 'Volodymyr Loboda',
            pl: 'Volodymyr Loboda',
            ua: 'Володимир Лобода',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/volodymyr-loboda-021935119/?originalSubdomain=pl',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: {
            en: 'Olga Bondarenko',
            pl: 'Olga Bondarenko',
            ua: 'Ольга Бондаренко',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/olha-bondarenko-74a093229/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Igor Vakaliuk',
            pl: 'Igor Vakaliuk',
            ua: 'Ігор Вакалюк',
          },
          deployUrl: 'https://www.deployUrledin.com/in/ihor-vakaliuk/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Sergii Tokaryev',
            pl: 'Sergii Tokaryev',
            ua: 'Сергій Токарєв',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/serhii-tokariev-4a1060155/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Oleksandr Brusyltsev',
            pl: 'Oleksandr Brusyltsev',
            ua: 'Олександр Брусильцев',
          },
          deployUrl: 'https://www.deployUrledin.com/in/oleksandr-brusyltsev/',
        },
        role: {
          name: 'Back-end',
        },
      },
      {
        user: {
          name: {
            en: 'Kateryna Pogrebna',
            pl: 'Kateryna Pogrebna',
            ua: 'Катерина Погребна',
          },
          deployUrl: 'https://www.deployUrledin.com/in/katerynapogrebna/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Zinaida Usikova',
            pl: 'Zinaida Usikova',
            ua: 'Зінаїда Усікова',
          },
          deployUrl: 'https://www.deployUrledin.com/in/zinaida-usikova/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Nikolay Osetrov',
            pl: 'Nikolay Osetrov',
            ua: 'Микола Осетров',
          },
          deployUrl: 'https://www.deployUrledin.com/in/nikolayosetrov/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Nataliya Kuhn',
            pl: 'Nataliya Kuhn',
            ua: 'Наталія Кун',
          },
          deployUrl: 'https://www.deployUrledin.com/in/nataliya-kuhn/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
    ],
  },
  {
    _id: crypto.randomUUID(),
    title: {
      en: 'Landing - fundraising',
      pl: 'Landing - zbieranie funduszy',
      ua: 'Лендінг - збір коштів',
    },
    imageUrl: '/img/projects/arms.webp',
    status: {
      en: 'Done',
      pl: 'Zakończony',
      ua: 'Завершено',
    },
    statusVal: 'active',
    deployUrl: 'https://obijmy59.online/',
    description: {
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
        user: {
          name: {
            en: 'Danilo Osadchenko',
            pl: 'Danilo Osadchenko',
            ua: 'Данило Осадченко',
          },
          deployUrl: 'https://www.deployUrledin.com/in/danylo-osadchenko/',
        },
        role: {
          name: 'Back-end',
        },
      },
      {
        user: {
          name: {
            en: 'Bogdan Taran',
            pl: 'Bogdan Taran',
            ua: 'Богдан Таран',
          },
          deployUrl: 'https://www.deployUrledin.com/in/bohdan-taran-2168b1220',
        },
        role: {
          name: 'Business Analyst',
        },
      },
      {
        user: {
          name: {
            en: 'Susanna Salata',
            pl: 'Susanna Salata',
            ua: 'Сусанна Салата',
          },
          deployUrl: 'https://www.deployUrledin.com/in/susanna-salata/',
        },
        role: {
          name: 'BA/PM Mentor',
        },
      },
      {
        user: {
          name: {
            en: 'Ostap Seniuk',
            pl: 'Ostap Seniuk',
            ua: 'Остап Сенюк',
          },
          deployUrl: 'https://www.deployUrledin.com/in/ostap-seniuk/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: {
            en: 'Viktoria Dzhus',
            pl: 'Viktoria Dzhus',
            ua: 'Вікторія Джус',
          },
          deployUrl: 'https://www.deployUrledin.com/in/victoriadzhus/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: {
            en: 'Maria Popova',
            pl: 'Maria Popova',
            ua: 'Марія Попова',
          },
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: {
            en: 'Inna Kijan',
            pl: 'Inna Kijan',
            ua: 'Інна Кіян',
          },
          deployUrl: 'https://www.deployUrledin.com/in/inna-kiyan-586138263/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: {
            en: 'Anastazja Worona',
            pl: 'Anastazja Worona',
            ua: 'Анастасія Ворона',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/anastasiia-vorona-6a5165220/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: {
            en: 'Sergiusz Onopriienko',
            pl: 'Sergiusz Onopriienko',
            ua: 'Сергій Онопрієнко',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/serhii-onopriienko-099215174/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Maksym Kulbako',
            pl: 'Maksym Kulbako',
            ua: 'Максим Кубалко',
          },
          deployUrl: 'https://www.deployUrledin.com/in/maksym-kulbako-69028847',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Olga Iwanowa',
            pl: 'Olga Iwanowa',
            ua: 'Ольга Іванова',
          },
          deployUrl: 'https://www.deployUrledin.com/in/ivolga-kyiv/',
        },
        role: {
          name: 'Product Owner',
        },
      },
      {
        user: {
          name: {
            en: 'Svitlana Diachenko',
            pl: 'Svitlana Diachenko',
            ua: 'Світлана Дяченко',
          },
          deployUrl: 'https://www.deployUrledin.com/in/svitlanadiachenko/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Olena Czornobrywiec',
            pl: 'Olena Czornobrywiec',
            ua: 'Олена Чорнобривець',
          },
          deployUrl: 'http://www.deployUrledin.com/in/olenachornobryvets',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Katarzyna Żarowa',
            pl: 'Katarzyna Żarowa',
            ua: 'Катерина Жарова',
          },
          deployUrl: 'https://www.deployUrledin.com/in/kateryna-zharova/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Sergiusz Sztiepan-Antoniuk',
            pl: 'Sergiusz Sztiepan-Antoniuk',
            ua: 'Сергій Штефан-Антонюк',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/serhii-shtefan-antoniuk-91610b258?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfvGVVsReQpuZ9lDTBekIFA%3D%3D',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Lilia Oliynyk',
            pl: 'Lilia Oliynyk',
            ua: 'Лілія Олійник',
          },
          deployUrl: 'https://sk.deployUrledin.com/in/lily-oliynyk-299605282',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Paweł Chlebnikow',
            pl: 'Paweł Chlebnikow',
            ua: 'Павло Хлебніков',
          },
          deployUrl: 'https://www.deployUrledin.com/in/pavelkhlebnikov/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Tatiana Kowalska',
            pl: 'Tatiana Kowalska',
            ua: 'Тетяна Ковальська',
          },
          deployUrl: 'http://deployUrledin.com/in/tetiana-kovalska-43b32022b',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Walenty Jelkin',
            pl: 'Walenty Jelkin',
            ua: 'Валентин Елькін',
          },
          deployUrl:
            'https://www.deployUrledin.com/in/valentyn-yelkin-295637261/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
    ],
  },
] as IProject[];
