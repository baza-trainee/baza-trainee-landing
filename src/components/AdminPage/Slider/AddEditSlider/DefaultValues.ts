import { IHeroSlider } from '@/types';
import { downloadImageAsFile } from '@/utils/imageHandler';
import { TFormInputs } from '../types';

export const DefaultValuesState = async (slide: IHeroSlider | undefined) => {
  const emptyFields: TFormInputs = {
    titleUa: '',
    titleEn: '',
    titlePl: '',
    subtitleUa: '',
    subtitleEn: '',
    subtitlePl: '',
    file: [],
    deployUrl: '',
  };

  if (!slide) return emptyFields;

  const fieldsValues = {
    ...emptyFields,
    titleUa: slide.title.ua,
    titleEn: slide.title.en,
    titlePl: slide.title.pl,
    subtitleUa: slide.subtitle.ua,
    subtitleEn: slide.subtitle.en,
    subtitlePl: slide.subtitle.pl,
    deployUrl: slide.imageUrl,
  };

  const img = await downloadImageAsFile(slide.imageUrl);
  fieldsValues.file[0] = img ? img : new File([], slide.imageUrl);

  return fieldsValues;
};
