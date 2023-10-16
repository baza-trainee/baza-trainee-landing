import { SETTINGS } from '@/config/settings';
import { formatBytes } from '@/utils/formatBytes';
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

  img: (isEditMode?: boolean) => {
    return {
      required: isEditMode ? false : 'Додайте зображення слайду',
      validate: (value: string | File | File[]) => {
        if (
          typeof value === 'object' &&
          'length' in value &&
          value.length > 0
        ) {
          const file = value[0];

          const checkType = ['image/jpeg', 'image/png', 'image/webp'].includes(
            file.type
          );
          if (!checkType) return 'Виберіть коректне зображення';

          const checkSize = file.size <= limitSize;
          if (!checkSize)
            return `Виберіть зображення до ${formatBytes(limitSize)}`;

          return validateImgDimensions(
            file,
            limitDimensions.width,
            limitDimensions.height
          );
        } else {
          return isEditMode || 'Додайте зображення слайду';
        }
      },
    };
  },
};
