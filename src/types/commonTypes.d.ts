export type TSlide = {
  title: string;
  specialization?: string;
  text: string;
  image: string;
};

export type TSlideReview = {
  name: string;
  role: string;
  date: string;
  review: string;
  imageUrl: string;
};

type TAdminSlideTitle = {
  ua: string;
  pl: string;
  en: string;
};

export type TAdminSlide = {
  title: TAdminSlideTitle;
  subtitle: TAdminSlideTitle;
  imageUrl?: string;
  __v: number;
  _id: string;
  key: string;
  slideData: never;
};

export interface IAddEditSlideProps {
  data?: {
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
    imageUrl: string;
    _id: string;
    _v: number;
  };
  title: string;
  isEdit: boolean;
}
