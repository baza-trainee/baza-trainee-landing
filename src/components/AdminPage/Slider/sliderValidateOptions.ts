import { SETTINGS } from '@/config/settings';
import { validateImgDimensions } from '@/utils/validateImgDimensions';

const limitSize = SETTINGS.fileSizeLimits.heroSliderPhoto;
const limitDimensions = SETTINGS.imgDimensions.sliderImg;

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
    maxLength: {
      value: 320,
      message: 'максимальна довжина поля 320 символів',
    },
  },
  img: {
    validate: (value: File[]) => {
      const file = value[0];
      const checkType = [
        'image/jpeg',
        'image/png',
        'image/webp',
        'for-url',
      ].includes(file.type);
      if (!checkType) return 'Виберіть коректне зображення';
      const checkSize = file.size <= limitSize;
      if (!checkSize) return `Виберіть зображення до ${limitSize} Мб`;

      return validateImgDimensions(
        file,
        limitDimensions.width,
        limitDimensions.height
      );
    },
  },
};
