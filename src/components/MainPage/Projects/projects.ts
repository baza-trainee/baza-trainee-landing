import { IProject } from '@/types';

export const projects = [
  {
    _id: crypto.randomUUID(),
    title: {
      en: 'Hust',
      pl: 'Hust',
      ua: 'Хист',
    },
    imageUrl: '/img/projects/hust.webp',
    status: {
      en: 'Under development',
      pl: 'W budowie',
      ua: 'В розробці',
    },
    statusVal: 'under-development',
    link: '',
    description: {
      en: 'Hust is an aggregator of veteran initiatives',
      pl: 'Hust - agregator inicjatyw dla weteranów',
      ua: 'Хист - агрегатор ветеранських ініціатив',
    },
    creationDate: 1690848000000,
    launchDate: 0,
    complexity: 3,
    teamMembers: [
      {
        user: {
          name: {
            en: 'Olga Ivanova',
            pl: 'Olga Iwanowa',
            ua: 'Ольга Іванова',
          },
          link: 'https://www.linkedin.com/in/ivolga-kyiv/',
        },
        role: {
          name: 'Product Owner',
        },
      },
      {
        user: {
          name: {
            en: 'Zhanna Belan',
            pl: 'Zhanna Belan',
            ua: 'Жанна Бєлан',
          },
          link: 'https://www.linkedin.com/in/joan-bielan-068434283/',
        },
        role: {
          name: 'Project Manager',
        },
      },
      {
        user: {
          name: {
            en: 'Iryna Stolyarova',
            pl: 'Iryna Stolarowa',
            ua: 'Ірина Столярова',
          },
          link: 'https://www.linkedin.com/in/iryna-stoliarova/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: {
            en: 'Olga Butyrska',
            pl: 'Olga Butyrska',
            ua: 'Ольга Бутирська',
          },
          link: 'https://www.linkedin.com/in/olha-butyrska/',
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
          link: 'https://www.linkedin.com/in/julia-kain/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: {
            en: 'Olexandra Terekhova',
            pl: 'Olexandra Terekhova',
            ua: 'Олександра Терехова',
          },
          link: 'https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0-%D1%82%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B2%D0%B0-4b483843/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: {
            en: 'Danylo Glushko',
            pl: 'Danylo Glushko',
            ua: 'Данило Глушко',
          },
          link: '',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Artem Shevchuk',
            pl: 'Artem Szewczuk',
            ua: 'Артем Шевчук',
          },
          link: 'https://www.linkedin.com/in/artem-shevchuk-b1955b190/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Katerina Lanina',
            pl: 'Kateryna Łanina',
            ua: 'Катерина Ланіна',
          },
          link: 'https://www.linkedin.com/in/kateryna-lanina/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: {
            en: 'Danil Zdorik',
            pl: 'Danił Zdorik',
            ua: 'Даніл Здорик',
          },
          link: 'https://www.linkedin.com/in/zdoryk/',
        },
        role: {
          name: 'Back-end',
        },
      },
      {
        user: {
          name: {
            en: 'Yevhen Blokhin',
            pl: 'Jewgienij Błochin',
            ua: 'Євген Блохін',
          },
          link: 'https://www.linkedin.com/in/ievgen-blokhin',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Lilia Bakalinska',
            pl: 'Lilia Bakalińska',
            ua: 'Лілія Бакалінська',
          },
          link: 'https://www.linkedin.com/in/liliia-bakalinska/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: {
            en: 'Olga Savchenko',
            pl: 'Olga Sawczenko',
            ua: 'Ольга Савченко',
          },
          link: 'https://www.linkedin.com/in/olsavchenko/',
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
          link: 'https://www.linkedin.com/in/%D1%8F%D0%BD%D0%B0-%D0%B3%D0%BB%D0%B0%D0%B7%D0%BA%D0%BE%D0%B2%D0%B0-241424281/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
    ],
  },
  {
    _id: crypto.randomUUID(),
    title: '57-42',
    imageUrl: '/img/projects/57-42.webp',
    status: {
      en: 'Under development',
      pl: 'W budowie',
      ua: 'В розробці',
    },
    statusVal: 'under-development',
    link: '',
    description: {
      en: 'Strona docelowa - zbiórka funduszy dla 57 Brygady, 42 Batalionu',
      pl: 'Landing page - fundraising for the 57th Brigade, 42nd Battalion',
      ua: 'Лендінг - збір коштів для 57-ї бригади 42 батальону',
    },
    creationDate: 1691539200000,
    launchDate: 0,
    complexity: 1,
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
    link: 'https://murrfecto.site',
    description: {
      en: 'Website of a shelter for street animals Murrfecto',
      pl: 'Miejsce schroniska dla zwierząt ulicznych Murrfecto',
      ua: 'Сайт притулку для вуличних тварин Murrfecto',
    },
    creationDate: 1682283600000,
    launchDate: 1686517200000,
    complexity: 2,
    teamMembers: [
      {
        user: {
          _id: '',
          name: {
            en: 'Olga Ivanova',
            pl: 'Olga Iwanowa',
            ua: 'Ольга Іванова',
          },
          link: 'https://www.linkedin.com/in/ivolga-kyiv/',
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
          link: 'https://www.linkedin.com/in/susanna-salata/',
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
          link: 'https://www.linkedin.com/in/iryna-stoliarova/',
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
          link: 'https://www.linkedin.com/in/svetlana-makarenko-batrak-044850261/',
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
          link: 'https://www.linkedin.com/in/ivan-myroniuk-84009525b/',
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
          link: 'https://www.linkedin.com/in/ivan-myroniuk-84009525b/',
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
          link: 'https://www.linkedin.com/in/marina-kovaleva-b7470b166/',
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
          link: 'https://www.linkedin.com/in/olha-sydorenko-frontend-developer/',
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
          link: 'https://www.linkedin.com/in/tonya-shyva/',
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
          link: 'https://www.linkedin.com/in/eugene-serdyuk-511969252/',
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
          link: 'https://www.linkedin.com/in/eugene-serdyuk-511969252/',
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
          link: 'https://www.linkedin.com/in/ihordrn/',
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
          link: 'http://linkedin.com/in/olena-novachenko-b5584925a',
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
          link: 'https://www.linkedin.com/in/lesyachernysh/',
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
          link: 'https://www.linkedin.com/in/inna-fomenko-63b216266',
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
          link: 'https://www.linkedin.com/in/oksana-derkach-52b788105/',
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
          link: 'https://www.linkedin.com/in/yaryna-berezovska-a7b41320a/',
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
    link: 'https://ataka-help.tech',
    description: {
      en: 'Platform about types of cyber fraud AtakaHelp',
      pl: 'Platforma o rodzajach oszustw internetowych AtakaHelp',
      ua: 'Платформа про види кібершахрайства AtakaHelp',
    },
    creationDate: 1683493200000,
    launchDate: 1687726800000,
    complexity: 2,
    teamMembers: [
      {
        user: {
          name: {
            en: 'Olga Ivanova',
            pl: 'Olga Iwanowa',
            ua: 'Ольга Іванова',
          },
          link: 'https://www.linkedin.com/in/ivolga-kyiv/',
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
          link: 'https://www.linkedin.com/in/susanna-salata/',
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
          link: 'https://www.linkedin.com/in/elinateo/',
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
          link: 'https://www.linkedin.com/in/dmytro-shlenskovoy-9970a6171/',
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
          link: 'https://www.linkedin.com/in/viktoria-podstrel/',
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
          link: 'https://www.linkedin.com/in/svetlana-makarenko-batrak-044850261/',
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
          link: 'https://www.linkedin.com/in/iryna-kolesnyk/',
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
          link: 'https://www.linkedin.com/in/anna-lysak/',
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
          link: 'https://www.linkedin.com/in/vitaliiveshtobei/',
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
          link: 'https://www.linkedin.com/in/marina-kovaleva-b7470b166/',
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
          link: 'https://www.linkedin.com/in/serhii-dzhulai-330206241/',
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
          link: 'https://www.linkedin.com/in/yehor-tverytinov/',
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
          link: 'https://www.linkedin.com/in/olha-kiiko-8a0471262',
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
          link: 'https://www.linkedin.com/in/iryna-zozulya/',
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
          link: 'https://www.linkedin.com/in/olena-krasnozhan/',
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
          link: 'https://www.linkedin.com/in/mariana-hirska/',
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
          link: 'https://www.linkedin.com/in/maryna-lebid-7085701bb/',
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
          link: 'https://www.linkedin.com/in/iryna-lozova-20244925a',
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
          link: 'https://www.linkedin.com/in/nataliia-didenko-663415176/',
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
          link: 'https://www.linkedin.com/in/yaryna-berezovska-a7b41320a/',
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
          link: 'https://www.linkedin.com/in/roman-malyk-qa-qc/',
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
          link: 'https://www.linkedin.com/in/julia-vo/',
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
          link: 'https://www.linkedin.com/in/timothy-zalishchuk/',
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
          link: 'https://www.linkedin.com/in/andrii-cherkasov-011977163/',
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
          link: 'https://www.linkedin.com/in/nataliiakachan/',
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
          link: 'https://www.linkedin.com/in/inna-fomenko-63b216266',
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
          link: 'https://www.linkedin.com/in/%D0%BA%D0%BE%D1%81%D1%82%D1%8F%D0%BD%D1%82%D0%B8%D0%BD-%D0%BE%D0%BB%D1%8C%D1%85%D0%BE%D0%B2%D0%B8%D0%BA-a01871273/',
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
    link: 'https://baza-trainee.tech',
    description: {
      en: 'Platform for Baza Trainee Ukraine',
      pl: 'Platforma dla Praktykantów Baza Ukraina',
      ua: 'Платформа для Baza Trainee Ukraine',
    },
    creationDate: 1683234000000,
    launchDate: 1687467600000,
    complexity: 3,
    teamMembers: [
      {
        user: {
          name: {
            en: 'Olga Ivanova',
            pl: 'Olga Iwanowa',
            ua: 'Ольга Іванова',
          },
          link: 'https://www.linkedin.com/in/ivolga-kyiv/',
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
          link: 'https://www.linkedin.com/in/susanna-salata/',
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
          link: 'https://www.linkedin.com/in/iryna-stoliarova/',
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
          link: 'https://www.linkedin.com/in/svetlana-makarenko-batrak-044850261/',
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
          link: 'https://www.linkedin.com/in/ihordrn/',
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
          link: 'https://www.linkedin.com/in/mykhailo-fysiuk/',
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
          link: 'https://www.linkedin.com/in/olexandr-neschadin-804718238/',
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
          link: 'https://www.linkedin.com/in/diana-forostiana/',
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
          link: 'https://www.linkedin.com/in/ihordrn/',
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
          link: 'https://www.linkedin.com/in/anna-klyba',
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
          link: 'https://www.linkedin.com/in/oleksii-burys-allanq',
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
          link: 'https://www.linkedin.com/in/natalia-kuksova-6b2138258/',
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
          link: 'https://www.linkedin.com/in/rostyslav-bahniuk-b8ba9a265/?locale=en_US',
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
          link: 'https://www.linkedin.com/in/yaryna-berezovska-a7b41320a/',
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
          link: 'https://www.linkedin.com/in/кирилл-матвиенко-b03668262/',
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
          link: 'https://www.linkedin.com/in/nataliiazolotukhina/',
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
          link: 'http://linkedin.com/in/kateryna-rubanik-6133a6224',
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
          link: 'http://linkedin.com/in/evgeniy-poliezhaie',
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
          link: 'https://www.linkedin.com/in/inna-ladyka-a09343241',
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
          link: 'https://www.linkedin.com/in/%D0%BElha-khavronenko-1b8146266',
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
          link: 'https://www.linkedin.com/in/victoriayefimenko/',
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
          link: 'https://www.linkedin.com/in/rabota-vladimir-aa3a34225/',
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
          link: 'https://www.linkedin.com/in/iryna-korelina-17ba40236/',
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
    link: ' ',
    description: {
      en: 'Cheetosaurus - a web application with book quizzes for children',
      pl: 'Cheetosaurus - aplikacja internetowa z quizami książkowymi dla dzieci',
      ua: 'Читозаврик - веб-додаток з книжковими вікторинами для дітей',
    },
    creationDate: 1685566800000,
    launchDate: 0,
    complexity: 5,
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
    link: ' ',
    description: {
      en: '1001 songs - a site-collection of authentic Ukrainian songs',
      pl: '1001 piosenek - zbiór witryn z autentycznymi ukraińskimi piosenkami',
      ua: '1001 songs - сайт-колекція українських автентичних пісень ',
    },
    creationDate: 1685566800000,
    launchDate: 0,
    complexity: 3,
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
    link: ' ',
    description: {
      en: 'The website of the shelter for street animals Big Lapa',
      pl: 'Strona schroniska dla zwierząt ulicznych Big Lapa',
      ua: 'Сайт притулку для вуличних тварин Big Lapa',
    },
    creationDate: 1685566800000,
    launchDate: 0,
    complexity: 2,
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
    link: ' ',
    description: {
      en: 'Feeda is a platform for processing applications for participation in Baza Trainee',
      pl: 'Feeda to platforma do rozpatrywania wniosków o udział w Baza Trainee',
      ua: 'Feeda - платформа для обробки заявок на участь у Baza Trainee',
    },
    creationDate: 1687208400000,
    launchDate: 0,
    complexity: 3,
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
    link: ' ',
    description: {
      en: 'The book goes abroad - a humanitarian aid portal',
      pl: 'Książka wyjeżdża za granicę - portal pomocy humanitarnej',
      ua: 'Книжка їде за кордон - портал гуманітарної допомоги',
    },
    creationDate: 1688245200000,
    launchDate: 0,
    complexity: 2,
    teamMembers: [],
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
    link: 'https://obijmy59.online/',
    description: {
      en: `Landing - fundraising for the 59th Brigade 'Steel Arms'`,
      pl: `Lądowanie - zbiórka pieniędzy dla 59 Brygady 'Stalowej Broni'`,
      ua: 'Лендинг - збір коштів для 59-бригади “Сталеві Обійми”',
    },
    creationDate: 1689368400000,
    launchDate: 1690705554200,
    complexity: 2,
    teamMembers: [],
  },
] as IProject[];
