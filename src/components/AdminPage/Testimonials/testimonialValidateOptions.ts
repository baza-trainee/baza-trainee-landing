import { SETTINGS } from '@/config/settings';

export const testimonialValidateOptions = {
  name: {
    required: 'Введіть ім’я',
    minLength: {
      value: 2,
      message: 'Мінімальна довжина поля 2 символи',
    },
    maxLength: {
      value: 25,
      message: 'Максимальна довжина поля 25 символів',
    },
  },
  role: {
    required: 'Введіть ім’я',
    minLength: {
      value: 2,
      message: 'Мінімальна довжина поля 2 символи',
    },
    maxLength: {
      value: 25,
      message: 'Максимальна довжина поля 25 символів',
    },
  },
  review: {
    required: 'Введіть текст відгуку',
    minLength: {
      value: 5,
      message: 'Мінімальна довжина поля 5 символів',
    },
    maxLength: {
      value: 300,
      message: 'Максимальна довжина поля 300 символів',
    },
  },

  img: {
    validate: (
      value: any
    ) => {
      if (typeof value === 'object' && value !== null && value.length > 0) {
        const checkSize =
          value[0]?.size <= SETTINGS.fileSizeLimits.testimonialPhoto;
        const checkType =
          value[0]?.type === 'image/jpeg' ||
          value[0]?.type === 'image/png' ||
          value[0]?.type === 'image/webp' ||
          value[0]?.type === 'for-url';

        return (checkSize && checkType) || 'Виберіть коректне зображення';
      } else {
        return 'Додайте зображення';
      }
    },
  },
};
