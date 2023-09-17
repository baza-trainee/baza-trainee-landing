export type TForm = {
  titleUa: string;
  titleEn: string;
  titlePl: string;
  subtitleUa: string;
  subtitleEn: string;
  subtitlePl: string;
  file?: File;
  imageUrl?: string;
  _id?: string;
  FileInput: string;
};

export type TFormPromise = {
  titleUa: string;
  titleEn: string;
  titlePl: string;
  subtitleUa: string;
  subtitleEn: string;
  subtitlePl: string;
  file?: File;
  imageUrl?: string;
  _id?: string;
  FileInput: string;
};

export type TFormSlideRequest = {
  title: {
    ua: string;
    en: string;
    pl: string;
  };
  subtitle: {
    ua: string;
    en: string;
    pl: string;
  };
  file?: File;
  _id?: string;
};

export type TformData = {
  file?: File;
  titleUa?: string;
  titleEn?: string;
  titlePl?: string;
  subtitleUa?: string;
  subtitleEn?: string;
  subtitlePl?: string;
};

export type TTextPreview = {
  title?: {
    ua?: string;
    en?: string;
    pl?: string;
  };
  subtitle?: {
    ua?: string;
    en?: string;
    pl?: string;
  };
};
