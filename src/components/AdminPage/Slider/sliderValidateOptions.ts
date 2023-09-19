import { SETTINGS } from '@/config/settings';

export const sliderValidateOptions = {
  title: {
    required: 'Введіть назву',
    minLength: {
      value: 5,
      message: 'мінімальна довжина поля 5 символів',
    },
  },
  subtitle: {
    required: 'Введіть назву',
    minLength: {
      value: 5,
      message: 'мінімальна довжина поля 5 символів',
    },
  },
  img: {
    validate: (value: File[]) => {
      const checkSize =
        value[0]?.size <= SETTINGS.fileSizeLimits.heroSliderPhoto;
      const checkType =
        value[0]?.type === 'image/jpeg' ||
        value[0]?.type === 'image/png' ||
        value[0]?.type === 'image/webp' ||
        value[0]?.type === 'for-url';

      return (checkSize && checkType) || 'Виберіть коректне зображення';
    },
  },
};
