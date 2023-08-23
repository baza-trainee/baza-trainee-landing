import { TDictionary } from '@/types';

export const slides = [
  {
    name: 'Олена',
    role: 'учасниця, QA',
    date: 'червень 2023',
    review:
      '“Я останні два тижні щодня думаю про те, що на Базу варто було прийти мінімум для того, щоб усвідомити значущість роботи дизайнера в розробці ПЗ”',
    imageUrl: '/img/c_reviews.webp',
  },
  {
    name: 'Віталій',
    role: 'БФ',
    date: 'травень 2023',
    review:
      '“Проєкт побудовано за принципом win-win, коли обидві сторони підсилюють один одного на користь спільноти. Чудова ідея!”',
    imageUrl: '/img/a_reviews.webp',
  },
  {
    name: 'Ірина',
    role: 'учасниця, Front-end',
    date: 'травень 2023',
    review:
      '“Під час першої зустрічі команди проєкту обговорили, аргументували і обрали мову програмування. Зручно, що не треба перевчатись, я практикую навички по React”',
    imageUrl: '/img/b_reviews.webp',
  },
];

export const getTranslateReviews = (
  slides: {
    name: string;
    role: string;
    date: string;
    review: string;
    imageUrl: string;
  }[],
  dict: TDictionary
) => {
  dict.reviews.list.map((listItem, i) => {
    slides[i].name = listItem.name;
    slides[i].date = listItem.date;
    slides[i].review = listItem.review;
    slides[i].role = listItem.role;
  });
  return slides;
};
