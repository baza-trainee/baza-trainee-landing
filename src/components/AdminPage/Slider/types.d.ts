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
  FileInput?: string;
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
  imageUrl?: string;
  // _id?: string;
};

export type TFormInputs = {
  titleUa: string;
  titleEn: string;
  titlePl: string;
  subtitleUa: string;
  subtitleEn: string;
  subtitlePl: string;
  file: File[];
  imageUrl?: string;
  _id?: string;
  // deployUrl: string;
};

export type TformData = {
  titleUa: string;
  titleEn: string;
  titlePl: string;
  subtitleUa: string;
  subtitleEn: string;
  subtitlePl: string;
  deployUrl: string;
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
