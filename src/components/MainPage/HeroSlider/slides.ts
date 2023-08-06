import { TDictionary } from '@/types';

export const slides = [
  {
    image: '/img/carousel-slide-1.png',
    title: 'Baza Trainee Ukraine',
    text: 'Громадська організація, яка має на меті отримання першого досвіду роботи тими, хто починає свій шлях в IT.',
  },
  {
    image: '/img/carousel-slide-2.png',
    title: 'Про нас',
    text: 'Ініціатива Baza Trainee Ukraine як освітня і тренувальна платформа виникає у відповідь на суспільний запит, який склався в Україні в 2022-2023 роках в сфері працевлаштування в галузі інформаційних технологій і представляє собою веб-сайт, що об’єднує як користувачів дві соціальні групи.',
  },
  {
    image: '/img/carousel-slide-5.png',
    title: 'Наша цільова аудиторія',
    text: 'Українці, які опановують спеціальності в сфері ІТ незалежно від віку і досвіду- трейні, джуніори, світчери, ментори з однієї сторони, і громади та спільноти України  в сфері благодійності, волонтерства, громадських ініціатив з іншої.',
  },
  {
    image: '/img/carousel-slide-3.png',
    title: 'Наша ціль',
    text: 'Поєднати в спільній діяльності ці категорії таким чином, щоб користь отримали обидві сторони. Для першої групи – це реальний практичний досвід створення живого проєкту, для другої – цифровий продукт, що працює і сприяє розвитку соціальні ініціативи.',
  },
  {
    image: '/img/carousel-slide-4.png',
    title: 'Принцип дії',
    text: 'Тренувати учасника на основі технологій, якими він володіє на даний момент, і сприяти його працевлаштуванню. Застосовувати при створенні проєкту технології, які хоче розвивати учасник, перенавчання не відбувається. Забезпечити замовника якісним цифровим продуктом.',
  },
];

export const getTranslatedSlides = (
  slides: { image: string; title: string; text: string }[],
  dict: TDictionary
) => {
  // const translatedSlides = slides.map((slide, i) => {
  //   slide.title = dict[i]?.title
  // })
  for (let i in slides) {
    switch (i) {
      case '0':
        slides[i].title = dict?.heroSlider?.firstSlide?.title;
        slides[i].text = dict?.heroSlider?.firstSlide?.description;
        break;
      case '1':
        slides[i].title = dict?.heroSlider?.secondSlide?.title;
        slides[i].text = dict?.heroSlider?.secondSlide?.description;
        break;
      case '2':
        slides[i].title = dict?.heroSlider?.thirdSlide?.title;
        slides[i].text = dict.heroSlider?.thirdSlide?.description;
        break;
      case '3':
        slides[i].title = dict?.heroSlider?.fourthSlide?.title;
        slides[i].text = dict?.heroSlider?.fourthSlide?.description;
        break;
      case '4':
        slides[i].title = dict?.heroSlider?.fifthSlide?.title;
        slides[i].text = dict?.heroSlider?.fifthSlide?.description;
        break;
    }
  }
  return slides;
};
