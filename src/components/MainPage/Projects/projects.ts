import { IProject } from '@/types';

export const projects = [
  {
    _id: crypto.randomUUID(),
    title: 'hust',
    imageUrl: '/img/projects/hust.webp',
    status: 'under-development',
    link: '',
    description: 'Хист - агрегатор ветеранських ініціатив',
    creationDate: 1690848000000,
    launchDate: 0,
    complexity: 3,
    teamMembers: [
      {
        user: {
          name: 'Ольга Іванова',
          link: 'https://www.linkedin.com/in/ivolga-kyiv/',
        },
        role: {
          name: 'Product Owner',
        },
      },
      {
        user: {
          name: 'Жанна Бєлан',
          link: 'https://www.linkedin.com/in/joan-bielan-068434283/',
        },
        role: {
          name: 'Project Manager',
        },
      },
      {
        user: {
          name: 'Столярова Ірина',
          link: 'https://www.linkedin.com/in/iryna-stoliarova/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: 'Ольга Бутирська',
          link: 'https://www.linkedin.com/in/olha-butyrska/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: 'Джулія Каїн',
          link: 'https://www.linkedin.com/in/julia-kain/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: 'Олександра Терехова',
          link: 'https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0-%D1%82%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B2%D0%B0-4b483843/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: 'Данило Глушко',
          link: '',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: 'Артем Шевчук',
          link: 'https://www.linkedin.com/in/artem-shevchuk-b1955b190/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: 'Катерина Ланіна',
          link: 'https://www.linkedin.com/in/kateryna-lanina/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: 'Даніл Здорик',
          link: 'https://www.linkedin.com/in/zdoryk/',
        },
        role: {
          name: 'Back-end',
        },
      },
      {
        user: {
          name: 'Євген Блохін',
          link: 'https://www.linkedin.com/in/ievgen-blokhin',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Лілія Бакалінська',
          link: 'https://www.linkedin.com/in/liliia-bakalinska/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Ольга Савченко',
          link: 'https://www.linkedin.com/in/olsavchenko/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Яна Глазкова',
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
    status: 'under-development',
    link: '',
    description: 'Лендінг - збір коштів для 57-ї бригади 42 батальону',
    creationDate: 1691539200000,
    launchDate: 0,
    complexity: 1,
    teamMembers: [],
  },
  {
    _id: crypto.randomUUID(),
    title: 'Murrfecto',
    imageUrl: '/img/projects/murrfecto.webp',
    status: 'active',
    link: 'https://murrfecto.site',
    description: 'Сайт притулку для вуличних тварин Murrfecto',
    creationDate: 1682283600000,
    launchDate: 1686517200000,
    complexity: 2,
    teamMembers: [
      {
        user: {
          _id: '',
          name: 'Ольга Іванова',
          link: 'https://www.linkedin.com/in/ivolga-kyiv/',
        },
        role: {
          name: 'Project Manager',
        },
      },
      {
        user: {
          name: 'Сусанна Салата',
          link: 'https://www.linkedin.com/in/susanna-salata/',
        },
        role: {
          name: 'Business Analyst',
        },
      },
      {
        user: {
          name: 'Ірина Столярова',
          link: 'https://www.linkedin.com/in/iryna-stoliarova/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: 'Світлана Макаренко (Батрак)',
          link: 'https://www.linkedin.com/in/svetlana-makarenko-batrak-044850261/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: 'Іван Миронюк',
          link: 'https://www.linkedin.com/in/ivan-myroniuk-84009525b/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: 'Іван Миронюк',
          link: 'https://www.linkedin.com/in/ivan-myroniuk-84009525b/',
        },
        role: {
          name: 'Back-end',
        },
      },
      {
        user: {
          name: 'Марина Ковальова',
          link: 'https://www.linkedin.com/in/marina-kovaleva-b7470b166/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: 'Ольга Сидоренко',
          link: 'https://www.linkedin.com/in/olha-sydorenko-frontend-developer/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: 'Тоня Сива',
          link: 'https://www.linkedin.com/in/tonya-shyva/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: 'Євген Сердюк',
          link: 'https://www.linkedin.com/in/eugene-serdyuk-511969252/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: 'Євген Сердюк',
          link: 'https://www.linkedin.com/in/eugene-serdyuk-511969252/',
        },
        role: {
          name: 'Back-end',
        },
      },
      {
        user: {
          name: 'Ігор Дронішинець',
          link: 'https://www.linkedin.com/in/ihordrn/',
        },
        role: {
          name: 'Back-end',
        },
      },
      {
        user: {
          name: 'Олена Новаченко',
          link: 'http://linkedin.com/in/olena-novachenko-b5584925a',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Леся Черних',
          link: 'https://www.linkedin.com/in/lesyachernysh/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Інна  Фоменко',
          link: 'https://www.linkedin.com/in/inna-fomenko-63b216266',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Оксана Деркач',
          link: 'https://www.linkedin.com/in/oksana-derkach-52b788105/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Ярина Березовська',
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
    title: 'Ataka Help',
    imageUrl: '/img/projects/atack.webp',
    status: 'active',
    link: 'https://ataka-help.tech',
    description: 'Платформа про види кібершахрайства AtakaHelp',
    creationDate: 1683493200000,
    launchDate: 1687726800000,
    complexity: 2,
    teamMembers: [
      {
        user: {
          name: 'Ольга Іванова',
          link: 'https://www.linkedin.com/in/ivolga-kyiv/',
        },
        role: {
          name: 'Project Manager',
        },
      },
      {
        user: {
          name: 'Сусанна Салата',
          link: 'https://www.linkedin.com/in/susanna-salata/',
        },
        role: {
          name: 'Business Analyst',
        },
      },
      {
        user: {
          name: 'Еліна Трайберг',
          link: 'https://www.linkedin.com/in/elinateo/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: 'Дмитро Шленськовий',
          link: 'https://www.linkedin.com/in/dmytro-shlenskovoy-9970a6171/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: 'Вікторія Подстрел',
          link: 'https://www.linkedin.com/in/viktoria-podstrel/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: 'Світлана Макаренко (Байрак)',
          link: 'https://www.linkedin.com/in/svetlana-makarenko-batrak-044850261/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: 'Ірина Колесник',
          link: 'https://www.linkedin.com/in/iryna-kolesnyk/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: 'Анна Лисак',
          link: 'https://www.linkedin.com/in/anna-lysak/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: 'Віталій Вештобей',
          link: 'https://www.linkedin.com/in/vitaliiveshtobei/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: 'Марина Ковальова',
          link: 'https://www.linkedin.com/in/marina-kovaleva-b7470b166/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: 'Сергій Джулай',
          link: 'https://www.linkedin.com/in/serhii-dzhulai-330206241/',
        },
        role: {
          name: 'Back-end',
        },
      },
      {
        user: {
          name: 'Єгор Тверитінов',
          link: 'https://www.linkedin.com/in/yehor-tverytinov/',
        },
        role: {
          name: 'Back-end',
        },
      },
      {
        user: {
          name: 'Ольга Кійко',
          link: 'https://www.linkedin.com/in/olha-kiiko-8a0471262',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Ірина Зозуля',
          link: 'https://www.linkedin.com/in/iryna-zozulya/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Олена Красножан',
          link: 'https://www.linkedin.com/in/olena-krasnozhan/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Мар’яна Гірська',
          link: 'https://www.linkedin.com/in/mariana-hirska/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Марина Лебідь',
          link: 'https://www.linkedin.com/in/maryna-lebid-7085701bb/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Ірина Лозова',
          link: 'https://www.linkedin.com/in/iryna-lozova-20244925a',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Наталія Діденко',
          link: 'https://www.linkedin.com/in/nataliia-didenko-663415176/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Ярина Березовська',
          link: 'https://www.linkedin.com/in/yaryna-berezovska-a7b41320a/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Роман Малик',
          link: 'https://www.linkedin.com/in/roman-malyk-qa-qc/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Юлія Возняківська',
          link: 'https://www.linkedin.com/in/julia-vo/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Тимофій Заліщук',
          link: 'https://www.linkedin.com/in/timothy-zalishchuk/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Андрій Черкасов',
          link: 'https://www.linkedin.com/in/andrii-cherkasov-011977163/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Наталія Качан',
          link: 'https://www.linkedin.com/in/nataliiakachan/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Інна Фоменко',
          link: 'https://www.linkedin.com/in/inna-fomenko-63b216266',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Костянтин Ольховик',
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
    title: 'baza',
    imageUrl: '/img/projects/baza.webp',
    status: 'active',
    link: 'https://baza-trainee.tech',
    description: 'Платформа для Baza Trainee Ukraine',
    creationDate: 1683234000000,
    launchDate: 1687467600000,
    complexity: 3,
    teamMembers: [
      {
        user: {
          name: 'Ольга Іванова',
          link: 'https://www.linkedin.com/in/ivolga-kyiv/',
        },
        role: {
          name: 'Project Manager',
        },
      },
      {
        user: {
          name: 'Сусанна Салата',
          link: 'https://www.linkedin.com/in/susanna-salata/',
        },
        role: {
          name: 'Business Analyst',
        },
      },
      {
        user: {
          name: 'Ірина Столярова',
          link: 'https://www.linkedin.com/in/iryna-stoliarova/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: 'Світлана Денисова',
          link: 'https://www.linkedin.com/in/lanadenysova/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: 'Анастасія Антонів',
          link: 'https://www.linkedin.com/in/anastasiia-antoniv-36b523270/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: 'Світлана Макаренко (Батрак)',
          link: 'https://www.linkedin.com/in/svetlana-makarenko-batrak-044850261/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: 'Ігор Дронішинець',
          link: 'https://www.linkedin.com/in/ihordrn/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: 'Михайло Фисюк',
          link: 'https://www.linkedin.com/in/mykhailo-fysiuk/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: 'Олександр Нещадін',
          link: 'https://www.linkedin.com/in/olexandr-neschadin-804718238/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: 'Діана Форостяна',
          link: 'https://www.linkedin.com/in/diana-forostiana/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: 'Ігор Дронішинець',
          link: 'https://www.linkedin.com/in/ihordrn/',
        },
        role: {
          name: 'Back-end',
        },
      },
      {
        user: {
          name: 'Анна Клиба',
          link: 'https://www.linkedin.com/in/anna-klyba',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Олексій Бурис',
          link: 'https://www.linkedin.com/in/oleksii-burys-allanq',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Наталія Куксова',
          link: 'https://www.linkedin.com/in/natalia-kuksova-6b2138258/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Ростислав Багнюк',
          link: 'https://www.linkedin.com/in/rostyslav-bahniuk-b8ba9a265/?locale=en_US',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Ярина Березовська',
          link: 'https://www.linkedin.com/in/yaryna-berezovska-a7b41320a/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Кирило Матвієнко',
          link: 'https://www.linkedin.com/in/кирилл-матвиенко-b03668262/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Наталія Золотухіна',
          link: 'https://www.linkedin.com/in/nataliiazolotukhina/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Катерина Рубанік',
          link: 'http://linkedin.com/in/kateryna-rubanik-6133a6224',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Євген Полєжаєв',
          link: 'http://linkedin.com/in/evgeniy-poliezhaie',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Інна Ладика',
          link: 'https://www.linkedin.com/in/inna-ladyka-a09343241',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Ольга Хавроненко',
          link: 'https://www.linkedin.com/in/%D0%BElha-khavronenko-1b8146266',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Вікторія Єфименко',
          link: 'https://www.linkedin.com/in/victoriayefimenko/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Володимир Робота',
          link: 'https://www.linkedin.com/in/rabota-vladimir-aa3a34225/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Ірина Кореліна',
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
    title: 'Читозаврик',
    imageUrl: '/img/projects/zavr.webp',
    status: 'under-development',
    link: '',
    description: 'Читозаврик - веб-додаток з книжковими вікторинами для дітей',
    creationDate: 1685566800000,
    launchDate: 0,
    complexity: 5,
    teamMembers: [],
  },
  {
    _id: crypto.randomUUID(),
    title: '1001 songs',
    imageUrl: '/img/projects/1001songs.webp',
    status: 'under-development',
    link: '',
    description: '1001 songs - сайт-колекція українських автентичних пісень ',
    creationDate: 1685566800000,
    launchDate: 0,
    complexity: 3,
    teamMembers: [],
  },
  {
    _id: crypto.randomUUID(),
    title: 'Big Lapa',
    imageUrl: '/img/projects/lapa.webp',
    status: 'under-development',
    link: '',
    description: 'Сайт притулку для вуличних тварин Big Lapa',
    creationDate: 1685566800000,
    launchDate: 0,
    complexity: 2,
    teamMembers: [],
  },
  {
    _id: crypto.randomUUID(),
    title: 'feeda',
    imageUrl: '/img/projects/feeda-1.webp',
    status: 'under-development',
    link: '',
    description:
      'Feeda - платформа для обробки заявок на участь у Baza Trainee',
    creationDate: 1687208400000,
    launchDate: 0,
    complexity: 3,
    teamMembers: [],
  },
  {
    _id: crypto.randomUUID(),
    title: 'book',
    imageUrl: '/img/projects/book.webp',
    status: 'under-development',
    link: '',
    description: 'Книжка їде за кордон - портал гуманітарної допомоги',
    creationDate: 1688245200000,
    launchDate: 0,
    complexity: 2,
    teamMembers: [],
  },
  {
    _id: crypto.randomUUID(),
    title: 'arms',
    imageUrl: '/img/projects/arms.webp',
    status: 'active',
    link: 'https://obijmy59.online',
    description: 'Лендинг - збір коштів для 59-бригади “Сталеві Обійми”',
    creationDate: 1689368400000,
    launchDate: 1690705554200,
    complexity: 2,
    teamMembers: [
      {
        user: {
          name: 'Данило Осадченко',
          link: 'https://www.linkedin.com/in/danylo-osadchenko/',
        },
        role: {
          name: 'Back-end',
        },
      },
      {
        user: {
          name: 'Богдан Таран',
          link: 'https://www.linkedin.com/in/bohdan-taran-2168b1220',
        },
        role: {
          name: 'Business Analyst',
        },
      },
      {
        user: {
          name: 'Сусанна Салата',
          link: 'https://www.linkedin.com/in/susanna-salata/',
        },
        role: {
          name: 'BA/PM Mentor',
        },
      },
      {
        user: {
          name: 'Остап Сенюк',
          link: 'https://www.linkedin.com/in/ostap-seniuk/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: 'Вікторія Джус',
          link: 'https://www.linkedin.com/in/victoriadzhus/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: 'Марія Попова',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: 'Інна Кіян',
          link: 'https://www.linkedin.com/in/inna-kiyan-586138263/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: 'Анастасія Ворона',
          link: 'https://www.linkedin.com/in/anastasiia-vorona-6a5165220/',
        },
        role: {
          name: 'Design',
        },
      },
      {
        user: {
          name: 'Сергій Онопрієнко',
          link: 'https://www.linkedin.com/in/serhii-onopriienko-099215174/',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: 'Максим Кубалко',
          link: 'https://www.linkedin.com/in/maksym-kulbako-69028847',
        },
        role: {
          name: 'Front-end',
        },
      },
      {
        user: {
          name: 'Ольга Іванова',
          link: 'https://www.linkedin.com/in/ivolga-kyiv/',
        },
        role: {
          name: 'Product Owner',
        },
      },
      {
        user: {
          name: 'Світлана Дяченко',
          link: 'https://www.linkedin.com/in/svitlanadiachenko/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Олена Чорнобривець',
          link: 'http://www.linkedin.com/in/olenachornobryvets',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Катерина Жарова',
          link: 'https://www.linkedin.com/in/kateryna-zharova/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Сергій Штефан-Антонюк',
          link: 'https://www.linkedin.com/in/serhii-shtefan-antoniuk-91610b258?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfvGVVsReQpuZ9lDTBekIFA%3D%3D',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Лілія Олійник',
          link: 'https://sk.linkedin.com/in/lily-oliynyk-299605282',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Павло Хлебніков',
          link: 'https://www.linkedin.com/in/pavelkhlebnikov/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Тетяна Ковальська',
          link: 'http://linkedin.com/in/tetiana-kovalska-43b32022b',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
      {
        user: {
          name: 'Валентин Елькін',
          link: 'https://www.linkedin.com/in/valentyn-yelkin-295637261/',
        },
        role: {
          name: 'Quality Assurance',
        },
      },
    ],
  },
] as IProject[];
