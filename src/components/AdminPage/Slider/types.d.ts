type TFormBase = {
  titleUa: string;
  titleEn: string;
  titlePl: string;
  subtitleUa: string;
  subtitleEn: string;
  subtitlePl: string;
  imageUrl?: string;
  _id?: string;
};

export type TForm = TFormBase & {
  file?: File;
  FileInput?: string;
};

export type TFormPromise = TFormBase & {
  file?: File;
  FileInput: string;
};

type TText = {
  ua: string;
  en: string;
  pl: string;
};

export type TFormSlideRequest = {
  title: TText;
  subtitle: TText;
  file?: File;
  imageUrl?: string;
};

export type TFormInputs = TFormBase & {
  file: File[];
};

export type TTextPreview = {
  title?: TText;
  subtitle?: TText;
};
