import { IHeroSlider } from '@/types';
// import { downloadImageAsFile } from '@/utils/imageHandler';
import { TFormInputs } from '../types';

export const emptyFields: TFormInputs = {
  titleUa: '',
  titleEn: '',
  titlePl: '',
  subtitleUa: '',
  subtitleEn: '',
  subtitlePl: '',
  imageUrl: '',
  file: [],
};

export const DefaultValuesState = async (slide: IHeroSlider | undefined) => {
  if (!slide) return emptyFields;

  const fieldsValues = {
    titleUa: slide.title.ua,
    titleEn: slide.title.en,
    titlePl: slide.title.pl,
    subtitleUa: slide.subtitle.ua,
    subtitleEn: slide.subtitle.en,
    subtitlePl: slide.subtitle.pl,
    imageUrl: slide.imageUrl,
    file: [new File([], slide.imageUrl!, { type: 'for-url' })],
  };

  if (fieldsValues.file?.length && fieldsValues.file[0]?.size > 0) {
    fieldsValues.imageUrl = fieldsValues.file[0].name;
  }
  // const img = await downloadImageAsFile(slide.imageUrl);
  // fieldsValues.file![0] = img ? img : new File([], slide.imageUrl);

  return fieldsValues;
};
