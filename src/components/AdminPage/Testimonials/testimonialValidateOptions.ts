import { SETTINGS } from '@/config/settings';

export const testimonialValidateOptions = {
  name: {
    required: 'Введіть ім’я',
    minLength: {
      value: 5,
      message: 'Мінімальна довжина поля 5 символів',
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
      value: 200,
      message: 'Максимальна довжина поля 200 символів',
    },
  },

  img: {
    validate: (value: File[]) => {
      const checkSize =
        value[0]?.size <= SETTINGS.fileSizeLimits.testimonialPhoto;
      const checkType =
        value[0]?.type === 'image/jpeg' ||
        value[0]?.type === 'image/png' ||
        value[0]?.type === 'image/webp' ||
        value[0]?.type === 'for-url';

      return (checkSize && checkType) || 'Виберіть коректне зображення';
    },
  },
};
