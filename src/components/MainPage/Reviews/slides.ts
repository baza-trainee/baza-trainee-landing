import { ITestimonial } from '@/types';

export const slides = [
  {
    _id: crypto.randomUUID(),
    name: { ua: 'Олена' },
    role: 'учасниця, QA',
    date: 'червень 2023',
    review: {
      ua: '“Я останні два тижні щодня думаю про те, що на Базу варто було прийти мінімум для того, щоб усвідомити значущість роботи дизайнера в розробці ПЗ”',
    },
    imageUrl: '/img/c_reviews.webp',
  },
  {
    _id: crypto.randomUUID(),
    name: { ua: 'Віталій' },
    role: 'БФ',
    date: 'травень 2023',
    review: {
      ua: '“Проєкт побудовано за принципом win-win, коли обидві сторони підсилюють один одного на користь спільноти. Чудова ідея!”',
    },
    imageUrl: '/img/a_reviews.webp',
  },
  {
    _id: crypto.randomUUID(),
    name: { ua: 'Ірина' },
    role: 'учасниця, Front-end',
    date: 'травень 2023',
    review: {
      ua: '“Під час першої зустрічі команди проєкту обговорили, аргументували і обрали мову програмування. Зручно, що не треба перевчатись, я практикую навички по React”',
    },
    imageUrl: '/img/b_reviews.webp',
  },
] as unknown as ITestimonial[];
