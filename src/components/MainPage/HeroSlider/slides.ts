export const slides = [
  {
    image: '/img/carousel-slide-1.png',
    title: 'Baza Trainee Ukraine',
    description:
      'Громадська організація, яка має на меті допомогти отримати перший досвід роботи тим, хто починає свій шлях в IT',
  },
  {
    image: '/img/carousel-slide-2.png',
    title: 'Наша ціль',
    description:
      'Ініціатива Baza Trainee Ukraine як освітня і тренувальна платформа виникає у відповідь на суспільний запит, який склався в Україні в 2022-2023 роках в сфері працевлаштування в галузі інформаційних технологій і представляє собою веб-сайт, що об’єднує як користувачів дві соціальні групи.',
  },
  {
    image: '/img/carousel-slide-3.png',
    title: 'Наша місія',
    description:
      'Поєднати в спільній діяльності ці категорії таким чином, щоб користь отримали обидві сторони. Для першої групи – це реальний практичний досвід створення справжнього продукту, для другої – цифровий продукт, що працює і сприяє розвитку соціального проекту.',
  },
  {
    image: '/img/carousel-slide-4.png',
    title: 'Принцип дії',
    description:
      'Тренувати учасника на основі технологій, якими він володіє на даний момент, і сприяти його працевлаштуванню. Застосовувати при створенні проекту технології, які хоче розвивати учасник, перенавчання не відбувається.',
  },
  {
    image: '/img/carousel-slide-5.png',
    title: 'Наша цільова аудиторія',
    description:
      'Громадська організація, яка має на меті допомогти отримати перший досвід роботи тим, хто починає свій шлях в IT',
  },
];

export const getTranslatedSlides = (
  slides: { image: string; title: string; description: string }[],
  dict: {
    heroSlider: {
      firstSlide: {
        title: string;
        description: string;
      };
      secondSlide: {
        title: string;
        description: string;
      };
      thirdSlide: {
        title: string;
        description: string;
      };
      fourthSlide: {
        title: string;
        description: string;
      };
      fifthSlide: {
        title: string;
        description: string;
      };
    };
  }
) => {
  // const translatedSlides = slides.map((slide, i) => {
  //   slide.title = dict[i]?.title
  // })
  for (let i in slides) {
    switch (i) {
      case '0':
        slides[i].title = dict.heroSlider.firstSlide?.title;
        slides[i].description = dict.heroSlider.firstSlide?.description;
        break;
      case '1':
        slides[i].title = dict.heroSlider.secondSlide?.title;
        slides[i].description = dict.heroSlider.secondSlide?.description;
        break;
      case '2':
        slides[i].title = dict.heroSlider.thirdSlide?.title;
        slides[i].description = dict.heroSlider.thirdSlide?.description;
        break;
      case '3':
        slides[i].title = dict.heroSlider.fourthSlide?.title;
        slides[i].description = dict.heroSlider.fourthSlide?.description;
        break;
      case '4':
        slides[i].title = dict.heroSlider.fifthSlide?.title;
        slides[i].description = dict.heroSlider.fifthSlide?.description;
        break;
    }
  }
  return slides;
};
